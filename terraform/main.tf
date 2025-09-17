# Local values for computed and reusable values
locals {
  project_name = "cloudquiz"
  origin_id    = "S3-${local.project_name}-bucket"

  common_tags = {
    Project     = local.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }

  # IAM resource names
  github_oidc_provider_name = "${local.project_name}-github-oidc-provider"
  github_policy_name        = "${local.project_name}-github-s3-deploy-policy"
  github_role_name          = "${local.project_name}-github-s3-deploy-role"

  # Comments
  oai_comment               = "OAI for ${local.project_name} S3 bucket"
  cloudfront_comment        = "${local.project_name} S3 Distribution"
  github_policy_description = "Policy for GitHub Actions to deploy ${local.project_name} to S3 and invalidate CloudFront"
}

# S3 bucket created
resource "aws_s3_bucket" "cloudquiz_bucket" {
  bucket_prefix = var.bucket_name_prefix

  tags = merge(local.common_tags, {
    Name = var.bucket_name_prefix
  })

  force_destroy = true
}
# create a s3 bucket ownership controls
resource "aws_s3_bucket_ownership_controls" "cloudquiz_bucket_ownership_controls" {
  bucket = aws_s3_bucket.cloudquiz_bucket.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

# create a s3 bucket public access block
resource "aws_s3_bucket_public_access_block" "cloudquiz_bucket_public_access_block" {
  bucket = aws_s3_bucket.cloudquiz_bucket.id

  block_public_acls       = true
  ignore_public_acls      = true
  block_public_policy     = true
  restrict_public_buckets = true
}

# create a s3 bucket versioning configuration
resource "aws_s3_bucket_versioning" "cloudquiz_bucket_versioning" {
  bucket = aws_s3_bucket.cloudquiz_bucket.id
  versioning_configuration {
    status = var.enable_versioning ? "Enabled" : "Disabled"
  }
}

# create a s3 bucket server-side encryption configuration
resource "aws_s3_bucket_server_side_encryption_configuration" "cloudquiz_bucket_encryption" {
  bucket = aws_s3_bucket.cloudquiz_bucket.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = var.encryption_algorithm
    }
  }
}



# create a cloudfront origin access identity
resource "aws_cloudfront_origin_access_identity" "cloudquiz_oai" {
  comment = local.oai_comment
}

# create a s3 bucket policy to allow cloudfront OAI access
resource "aws_s3_bucket_policy" "cloudquiz_bucket_policy" {
  bucket = aws_s3_bucket.cloudquiz_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontAccess"
        Effect = "Allow"
        Principal = {
          AWS = aws_cloudfront_origin_access_identity.cloudquiz_oai.iam_arn
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.cloudquiz_bucket.arn}/*"
      }
    ]
  })
}

# create a cloudfront distribution
resource "aws_cloudfront_distribution" "s3_cloudquiz_distribution" {
  origin {
    domain_name = aws_s3_bucket.cloudquiz_bucket.bucket_regional_domain_name
    origin_id   = local.origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.cloudquiz_oai.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = local.cloudfront_comment
  default_root_object = var.default_root_object

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.origin_id

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = var.cloudfront_default_ttl
    max_ttl                = var.cloudfront_max_ttl
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  depends_on = [aws_s3_bucket_public_access_block.cloudquiz_bucket_public_access_block]
}

# create a github OIDC identity provider
resource "aws_iam_openid_connect_provider" "github_oidc_provider" {
  url = "https://token.actions.githubusercontent.com"

  client_id_list = [
    "sts.amazonaws.com",
  ]

  thumbprint_list = [
    "6938fd4d98bab03faadb97b34396831e3780aea1"
  ]

  tags = merge(local.common_tags, {
    Name = local.github_oidc_provider_name
  })
}

# create a custom IAM policy for GitHub Actions
resource "aws_iam_policy" "github_s3_deploy_policy" {
  name        = local.github_policy_name
  description = local.github_policy_description

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowFileUploadsAndSyncToS3"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:ListBucket",
          "s3:DeleteObject"
        ]
        Resource = [
          aws_s3_bucket.cloudquiz_bucket.arn,
          "${aws_s3_bucket.cloudquiz_bucket.arn}/*"
        ]
      },
      {
        Sid      = "InvalidateCloudFrontCache"
        Effect   = "Allow"
        Action   = "cloudfront:CreateInvalidation"
        Resource = "*"
      }
    ]
  })

  tags = merge(local.common_tags, {
    Name = local.github_policy_name
  })
}

# create an IAM role for GitHub Actions
resource "aws_iam_role" "github_s3_deploy_role" {
  name = local.github_role_name

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.github_oidc_provider.arn
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
          }
          StringLike = {
            "token.actions.githubusercontent.com:sub" = "repo:${var.github_username}/${var.github_repository}:*"
          }
        }
      }
    ]
  })

  tags = merge(local.common_tags, {
    Name = local.github_role_name
  })
}

# attach the policy to the role
resource "aws_iam_role_policy_attachment" "github_s3_deploy_role_policy" {
  role       = aws_iam_role.github_s3_deploy_role.name
  policy_arn = aws_iam_policy.github_s3_deploy_policy.arn
}
