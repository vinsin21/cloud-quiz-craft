variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
}

variable "bucket_name_prefix" {
  description = "The name prefix for the S3 bucket"
  type        = string
}

variable "github_username" {
  description = "GitHub username (repository owner)"
  type        = string
}

variable "github_repository" {
  description = "GitHub repository name"
  type        = string
}

variable "environment" {
  description = "Environment name (e.g., Dev, Prod, Staging)"
  type        = string
  default     = "Dev"
}

variable "enable_versioning" {
  description = "Enable S3 bucket versioning"
  type        = bool
  default     = false
}

variable "encryption_algorithm" {
  description = "S3 encryption algorithm"
  type        = string
  default     = "AES256"
}

variable "cloudfront_default_ttl" {
  description = "Default TTL for CloudFront cache in seconds"
  type        = number
  default     = 3600
}

variable "cloudfront_max_ttl" {
  description = "Maximum TTL for CloudFront cache in seconds"
  type        = number
  default     = 86400
}

variable "default_root_object" {
  description = "Default root object for CloudFront"
  type        = string
  default     = "index.html"
}
