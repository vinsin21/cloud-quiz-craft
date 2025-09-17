# 🚀 CloudQuiz - Production-Ready Frontend Deployment with AWS & Terraform

> **A complete DevOps demonstration showcasing automated deployment of a React.js application using AWS services, Terraform Infrastructure as Code, and GitHub Actions CI/CD pipeline.**

![AWS Architecture](https://img.shields.io/badge/AWS-Cloud%20Infrastructure-orange)
![Terraform](https://img.shields.io/badge/Terraform-Infrastructure%20as%20Code-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-green)
![React](https://img.shields.io/badge/React-Frontend-61DAFB)

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Technologies Used](#️-technologies-used)
- [⚡ Quick Start](#-quick-start)
- [🔧 Local Development](#-local-development)
- [☁️ AWS Deployment](#️-aws-deployment)
- [🔄 CI/CD Pipeline](#-cicd-pipeline)
- [📁 Project Structure](#-project-structure)
- [🔒 Security Features](#-security-features)
- [💰 Cost Optimization](#-cost-optimization)
- [📚 Learning Resources](#-learning-resources)
- [🤝 Contributing](#-contributing)

## 🎯 Project Overview

This project demonstrates **production-grade frontend deployment** using modern DevOps practices. It's designed to showcase skills in:

- **Infrastructure as Code** with Terraform
- **Automated CI/CD** with GitHub Actions
- **AWS Cloud Services** integration
- **Security best practices**
- **Cost-effective architecture**

### 🌟 Key Features

✅ **Fully Automated Deployment** - Push to main branch triggers complete deployment  
✅ **Secure Architecture** - Private S3 bucket with CloudFront OAI  
✅ **Global Content Delivery** - CloudFront CDN for worldwide performance  
✅ **Infrastructure as Code** - Reproducible infrastructure with Terraform  
✅ **Zero-Downtime Deployments** - Automated cache invalidation  
✅ **Cost Optimized** - Serverless architecture with minimal costs  

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Developer     │───▶│  GitHub Actions  │───▶│   AWS Cloud     │
│   (git push)    │    │     CI/CD        │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                ▼
                       ┌──────────────────┐
                       │   React Build    │
                       │   (npm run build)│
                       └──────────────────┘
                                ▼
                       ┌──────────────────┐
                       │   S3 Bucket      │
                       │   (Static Files) │
                       └──────────────────┘
                                ▼
                       ┌──────────────────┐
                       │   CloudFront     │
                       │   (Global CDN)   │
                       └──────────────────┘
                                ▼
                       ┌──────────────────┐
                       │   End Users      │
                       │   (Worldwide)    │
                       └──────────────────┘
```

### AWS Services Used

| Service | Purpose | Configuration |
|---------|---------|---------------|
| **S3** | Static file storage | Private bucket with encryption |
| **CloudFront** | Global CDN | HTTPS redirect, caching optimized |
| **IAM** | Access management | OIDC provider, roles, policies |
| **Route 53** | DNS (optional) | Custom domain support |

## 🛠️ Technologies Used

### Frontend

- **React 18** - Modern UI library
- **Vite** - Fast build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### Infrastructure

- **Terraform** - Infrastructure as Code
- **AWS CLI** - Command-line interface
- **GitHub Actions** - CI/CD automation

### DevOps

- **Git** - Version control
- **GitHub** - Repository hosting
- **OIDC** - Secure authentication

## ⚡ Quick Start

### Prerequisites

- AWS Account with appropriate permissions
- GitHub Account
- Node.js 18+ installed
- Git installed
- Terraform installed (1.0+)
- AWS CLI configured

### 🚀 Deploy Infrastructure

1. **Clone the repository**

   ```bash
   git clone https://github.com/vinsin21/cloud-quiz-craft.git
   cd cloud-quiz-craft
   ```

2. **Configure AWS credentials**

   ```bash
   aws configure
   # Enter your AWS Access Key ID, Secret Access Key, and region
   ```

3. **Update Terraform variables**

   ```bash
   cd terraform
   ```

   Edit `terraform.tfvars`:

   ```hcl
   aws_region         = "ap-south-1"  # Your preferred region
   bucket_name_prefix = "your-project-bucket-"
   github_username    = "your-github-username"
   github_repository  = "your-repo-name"
   ```

4. **Deploy infrastructure**

   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

5. **Save outputs for GitHub Actions**

   ```bash
   terraform output
   ```

## 🔧 Local Development

### Run Development Server

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access application
open http://localhost:5173
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Type checking
npm run type-check
```

## ☁️ AWS Deployment

### Manual Deployment

```bash
# Build the application
npm run build

# Deploy to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### Infrastructure Components

#### S3 Bucket Configuration

```hcl
resource "aws_s3_bucket" "cloudquiz_bucket" {
  bucket_prefix = var.bucket_name_prefix
  force_destroy = true
  
  # Security configurations
  # - Block public access
  # - Server-side encryption
  # - Versioning disabled for cost optimization
}
```

#### CloudFront Distribution

```hcl
resource "aws_cloudfront_distribution" "s3_cloudquiz_distribution" {
  # Global edge locations
  # HTTPS redirect enforcement
  # Optimized caching for static assets
  # Origin Access Identity for security
}
```

#### IAM Roles & Policies

```hcl
# GitHub OIDC Provider for secure authentication
# IAM role for GitHub Actions
# Minimal required permissions (principle of least privilege)
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The CI/CD pipeline automatically triggers on push to main branch:

```yaml
name: Deploy to AWS S3

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    
    steps:
    - name: Checkout code
    - name: Setup Node.js
    - name: Install dependencies
    - name: Build React app
    - name: Configure AWS credentials (OIDC)
    - name: Deploy to S3
    - name: Invalidate CloudFront cache
```

### Required GitHub Secrets

Add these secrets in your GitHub repository settings:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `AWS_REGION` | AWS deployment region | `ap-south-1` |
| `AWS_ROLE_TO_ASSUME` | IAM role ARN for GitHub Actions | `arn:aws:iam::123456789012:role/...` |
| `S3_BUCKET` | S3 bucket name | `cloudquiz-bucket-20240101123456` |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID | `E1ABCD234567890` |

### Pipeline Features

✅ **Automated Testing** - Runs linting and type checking  
✅ **Secure Authentication** - Uses OIDC instead of AWS keys  
✅ **Atomic Deployments** - Complete deployment or rollback  
✅ **Cache Invalidation** - Immediate content updates  
✅ **Build Optimization** - Minified and optimized assets  

## 📁 Project Structure

```
cloud-quiz-craft/
├── 📁 src/                          # React application source
│   ├── 📁 components/               # Reusable UI components
│   ├── 📁 pages/                    # Page components
│   ├── 📁 hooks/                    # Custom React hooks
│   ├── 📁 lib/                      # Utility functions
│   └── 📁 data/                     # Static data files
├── 📁 public/                       # Static assets
├── 📁 terraform/                    # Infrastructure as Code
│   ├── 📄 main.tf                   # Main Terraform configuration
│   ├── 📄 variables.tf              # Input variables
│   ├── 📄 output.tf                 # Output values
│   ├── 📄 provider.tf               # Provider configuration
│   └── 📄 terraform.tfvars          # Variable values
├── 📁 .github/workflows/            # CI/CD pipeline
│   └── 📄 deploy.yml                # GitHub Actions workflow
├── 📄 package.json                  # Node.js dependencies
├── 📄 vite.config.ts                # Vite configuration
├── 📄 tailwind.config.ts            # Tailwind CSS configuration
├── 📄 .gitignore                    # Git ignore rules
└── 📄 README.md                     # This file
```

## 🔒 Security Features

### Infrastructure Security

- **Private S3 Bucket** - No public access allowed
- **Origin Access Identity** - Only CloudFront can access S3
- **HTTPS Enforcement** - All traffic redirected to HTTPS
- **IAM Best Practices** - Principle of least privilege
- **Server-Side Encryption** - All files encrypted at rest

### CI/CD Security

- **OIDC Authentication** - No long-lived AWS credentials stored
- **Repository-specific Access** - IAM role limited to specific repo
- **Secure Secrets Management** - GitHub repository secrets
- **Audit Trail** - All deployments logged and traceable

## 💰 Cost Optimization

### Estimated Monthly Costs (Low Traffic)

| Service | Estimated Cost | Notes |
|---------|----------------|-------|
| S3 Standard | $0.50 - $2.00 | Based on storage used |
| CloudFront | $0.00 - $1.00 | Free tier: 1TB transfer |
| Route 53 | $0.50 | If using custom domain |
| **Total** | **$1.00 - $3.50** | Very cost-effective |

### Cost Optimization Features

✅ **S3 Standard Storage** - Cost-effective for frequently accessed files  
✅ **CloudFront Free Tier** - 1TB monthly transfer included  
✅ **No EC2 Instances** - Serverless architecture  
✅ **Efficient Caching** - Reduced origin requests  
✅ **Automated Cleanup** - Old build artifacts removed  

## 📚 Learning Resources

### For Beginners

1. **AWS Fundamentals**
   - [AWS Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/)
   - [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

2. **Terraform Learning**
   - [Terraform Getting Started](https://learn.hashicorp.com/terraform)
   - [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)

3. **GitHub Actions**
   - [GitHub Actions Documentation](https://docs.github.com/en/actions)
   - [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

### Advanced Topics

- AWS CDK vs Terraform comparison
- Multi-environment deployment strategies
- Blue-green deployments with CloudFront
- Monitoring and alerting with CloudWatch
- Security scanning in CI/CD pipelines

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Areas for Contribution

- [ ] Add monitoring and alerting
- [ ] Implement blue-green deployments
- [ ] Add automated testing in CI/CD
- [ ] Create Kubernetes deployment option
- [ ] Add custom domain setup guide

---

## 📧 Contact

**Vinsin Patel** - AWS DevOps Engineer  
📧 Email: <vinsin21@example.com>  
💼 LinkedIn: [linkedin.com/in/vinsin21](https://linkedin.com/in/vinsin21)  
🐙 GitHub: [@vinsin21](https://github.com/vinsin21)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **If this project helped you learn AWS DevOps, please give it a star!** ⭐
