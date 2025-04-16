export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  timeLimit: number; // in minutes
  questions: Question[];
}

export const awsCloudPractitionerQuiz: Quiz = {
  id: "aws-ccp-1",
  title: "AWS Certified Cloud Practitioner",
  description: "Practice Exam 1 - Test your knowledge of AWS Cloud concepts, services, and the AWS global infrastructure.",
  timeLimit: 90,
  questions: [
    {
      id: 1,
      text: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
      options: [
        { id: "A", text: "AWS CLI." },
        { id: "B", text: "AWS API." },
        { id: "C", text: "AWS SDK." },
        { id: "D", text: "AWS Management Console." }
      ],
      correctAnswer: "D",
      explanation: "The AWS Management Console is a web-based interface for accessing and managing AWS services."
    },
    {
      id: 2,
      text: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
      options: [
        { id: "A", text: "Replacing an existing EC2 instance with a larger, more powerful one." },
        { id: "B", text: "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application." },
        { id: "C", text: "Adding more RAM capacity to an EC2 instance." },
        { id: "D", text: "Adding more EC2 instances of the same size to handle an increase in traffic." }
      ],
      correctAnswer: "D",
      explanation: "Horizontal scaling involves adding more instances of the same size to distribute load, rather than increasing the size of existing instances (vertical scaling)."
    },
    {
      id: 3,
      text: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
      options: [
        { id: "A", text: "Amazon Inspector." },
        { id: "B", text: "AWS CloudTrail." },
        { id: "C", text: "AWS Trusted Advisor." },
        { id: "D", text: "EC2 Instance Usage Report." }
      ],
      correctAnswer: "B",
      explanation: "AWS CloudTrail tracks user activity and API usage, providing visibility into actions taken in your AWS account."
    },
    {
      id: 4,
      text: "Which of the below options are related to the reliability of AWS? (Choose TWO)",
      options: [
        { id: "A", text: "Applying the principle of least privilege to all AWS resources." },
        { id: "B", text: "Automatically provisioning new resources to meet demand." },
        { id: "C", text: "All AWS services are considered Global Services, and this design helps customers serve their international users." },
        { id: "D", text: "Providing compensation to customers if issues occur." },
        { id: "E", text: "Ability to recover quickly from failures." }
      ],
      correctAnswer: "B,E",
      explanation: "Automatically provisioning resources to meet demand (B) and quick recovery from failures (E) are key aspects of AWS reliability."
    },
    {
      id: 5,
      text: "Which statement is true regarding the AWS Shared Responsibility Model?",
      options: [
        { id: "A", text: "Responsibilities vary depending on the services used." },
        { id: "B", text: "Security of the IaaS services is the responsibility of AWS." },
        { id: "C", text: "Patching the guest OS is always the responsibility of AWS." },
        { id: "D", text: "Security of the managed services is the responsibility of the customer." }
      ],
      correctAnswer: "A",
      explanation: "The division of responsibilities varies depending on the AWS services you use. Different services require different levels of management from customers."
    },
    {
      id: 6,
      text: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
      options: [
        { id: "A", text: "The Reserved Instance discounts can only be shared with the master account." },
        { id: "B", text: "All accounts can receive the hourly cost benefit of the Reserved Instances." },
        { id: "C", text: "The purchased instances will have better performance than On-demand instances." },
        { id: "D", text: "There are no cost benefits from using consolidated billing; It is for informational purposes only." }
      ],
      correctAnswer: "B",
      explanation: "With consolidated billing, unused Reserved Instance hours can be applied to usage by other accounts within the organization."
    },
    {
      id: 7,
      text: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
      options: [
        { id: "A", text: "Deploy the application across multiple Availability Zones and Edge locations." },
        { id: "B", text: "Deploy the application across multiple Availability Zones and subnets." },
        { id: "C", text: "Deploy the application across multiple Regions and Availability Zones." },
        { id: "D", text: "Deploy the application across multiple VPC's and subnets." }
      ],
      correctAnswer: "C",
      explanation: "For the highest availability, applications should be deployed across multiple regions and availability zones to protect against region-wide failures."
    },
    {
      id: 8,
      text: "What does AWS Snowball provide? (Choose TWO)",
      options: [
        { id: "A", text: "Built-in computing capabilities that allow customers to process data locally." },
        { id: "B", text: "A catalog of third-party software solutions that customers need to build solutions and run their businesses." },
        { id: "C", text: "A hybrid cloud storage between on-premises environments and the AWS Cloud." },
        { id: "D", text: "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS." },
        { id: "E", text: "Secure transfer of large amounts of data into and out of the AWS." }
      ],
      correctAnswer: "A,E",
      explanation: "AWS Snowball provides built-in computing capabilities for local data processing and secure transfer of large amounts of data to and from AWS."
    },
    {
      id: 9,
      text: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
      options: [
        { id: "A", text: "AWS Health Dashboard." },
        { id: "B", text: "AWS Support Concierge." },
        { id: "C", text: "AWS Customer Service." },
        { id: "D", text: "AWS Operations Support." }
      ],
      correctAnswer: "B",
      explanation: "AWS Support Concierge provides Enterprise Support customers with billing and account assistance."
    },
    {
      id: 10,
      text: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
      options: [
        { id: "A", text: "Applying the Amazon Connect latency-based routing policy." },
        { id: "B", text: "Registering a new US domain name to serve the users in the US." },
        { id: "C", text: "Building a new data center in the US and implementing a hybrid model." },
        { id: "D", text: "Deploying new Amazon EC2 instances in a Region located in the US." }
      ],
      correctAnswer: "D",
      explanation: "Deploying EC2 instances in a region closer to the US users will reduce latency by providing lower network latency for those users."
    },
    {
      id: 11,
      text: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
      options: [
        { id: "A", text: "IAM roles." },
        { id: "B", text: "IAM users." },
        { id: "C", text: "IAM user groups." },
        { id: "D", text: "AWS Organizations." }
      ],
      correctAnswer: "C",
      explanation: "IAM user groups are collections of IAM users, making it easier to manage permissions for multiple users."
    },
    {
      id: 12,
      text: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
      options: [
        { id: "A", text: "AWS OpsWorks." },
        { id: "B", text: "AWS Database Migration Service." },
        { id: "C", text: "AWS Server Migration Service." },
        { id: "D", text: "AWS Application Discovery Service." }
      ],
      correctAnswer: "B",
      explanation: "AWS Database Migration Service (DMS) helps migrate databases to AWS with minimal downtime and maintains continuous replication during migration."
    },
    {
      id: 13,
      text: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
      options: [
        { id: "A", text: "Build security in every layer." },
        { id: "B", text: "Parallelize tasks." },
        { id: "C", text: "Implement elasticity." },
        { id: "D", text: "Adopt monolithic architecture." }
      ],
      correctAnswer: "C",
      explanation: "Elasticity refers to the ability to automatically scale resources based on demand, which helps optimize costs."
    },
    {
      id: 14,
      text: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
      options: [
        { id: "A", text: "Increasing speed and agility." },
        { id: "B", text: "There is no need to worry about security." },
        { id: "C", text: "Gaining complete control over the physical infrastructure." },
        { id: "D", text: "Operating applications on behalf of customers." },
        { id: "E", text: "All of the physical security and most of the data/network security are taken care of for you." }
      ],
      correctAnswer: "A,E",
      explanation: "AWS provides increased speed and agility (A) and handles physical security and much of the data/network security (E)."
    },
    {
      id: 15,
      text: "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
      options: [
        { id: "A", text: "Allows treating an application as a single, cohesive unit." },
        { id: "B", text: "Reduces inter-dependencies so that failures do not impact other components of the application." },
        { id: "C", text: "Allows updates of any monolithic application quickly and easily." },
        { id: "D", text: "Allows tracking of any API call made to any AWS service." }
      ],
      correctAnswer: "B",
      explanation: "Decoupling reduces dependencies between components, preventing failures from cascading through the entire application."
    },
    {
      id: 16,
      text: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
      options: [
        { id: "A", text: "AWS Budgets." },
        { id: "B", text: "AWS Pricing Calculator." },
        { id: "C", text: "AWS Systems Manager." },
        { id: "D", text: "AWS Cost & Usage Reports." }
      ],
      correctAnswer: "D",
      explanation: "AWS Cost & Usage Reports provide detailed information about your AWS spending and usage, including Amazon EC2 billing activity."
    },
    {
      id: 17,
      text: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
      options: [
        { id: "A", text: "AWS services' costs will be reduced to half the original price." },
        { id: "B", text: "The consolidated billing feature is just for organizational purpose." },
        { id: "C", text: "Each AWS account gets volume discounts." },
        { id: "D", text: "Each AWS account gets five times the free-tier services capacity." }
      ],
      correctAnswer: "C",
      explanation: "With consolidated billing, the combined usage across all accounts qualifies for volume discounts, potentially reducing costs."
    },
    {
      id: 18,
      text: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
      options: [
        { id: "A", text: "Regularly update firmware on EBS devices." },
        { id: "B", text: "Create EBS snapshots." },
        { id: "C", text: "Ensure that EBS data is encrypted at rest." },
        { id: "D", text: "Store a backup daily in an external drive." },
        { id: "E", text: "Prevent any unauthorized access to AWS data centers." }
      ],
      correctAnswer: "B,C",
      explanation: "Creating EBS snapshots (B) and encrypting data at rest (C) are recommended practices for keeping EBS data safe."
    },
    {
      id: 19,
      text: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
      options: [
        { id: "A", text: "By automatically scaling your on-premises resources based on changes in demand." },
        { id: "B", text: "By automatically scaling your AWS resources using an Elastic Load Balancer." },
        { id: "C", text: "By reducing interdependencies between application components wherever possible." },
        { id: "D", text: "By automatically provisioning the required AWS resources based on changes in demand." }
      ],
      correctAnswer: "D",
      explanation: "Elasticity improves architecture by automatically provisioning or deprovisioning resources in response to demand, optimizing costs and performance."
    },
    {
      id: 20,
      text: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
      options: [
        { id: "A", text: "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded." },
        { id: "B", text: "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis." },
        { id: "C", text: "Configure the AWS Budgets Service to alert the company when the threshold is exceeded." },
        { id: "D", text: "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded." },
        { id: "E", text: "Configure the Amazon Connect Service to alert the company when the threshold is exceeded." }
      ],
      correctAnswer: "A,C",
      explanation: "CloudWatch billing alarms (A) and AWS Budgets (C) can be configured to send notifications when billing thresholds are exceeded."
    },
    {
      id: 21,
      text: "What does Amazon CloudFront use to distribute content to global users with low latency?",
      options: [
        { id: "A", text: "AWS Global Accelerator." },
        { id: "B", text: "AWS Regions." },
        { id: "C", text: "AWS Edge Locations." },
        { id: "D", text: "AWS Availability Zones." }
      ],
      correctAnswer: "C",
      explanation: "CloudFront uses Edge Locations to cache content closer to end users, reducing latency for content delivery."
    },
    {
      id: 22,
      text: "What does the 'Principle of Least Privilege' refer to?",
      options: [
        { id: "A", text: "You should grant your users only the permissions they need when they need them and nothing more." },
        { id: "B", text: "All IAM users should have at least the necessary permissions to access the core AWS services." },
        { id: "C", text: "All trusted IAM users should have access to any AWS service in the respective AWS account." },
        { id: "D", text: "IAM users should not be granted any permissions; to keep your account safe." }
      ],
      correctAnswer: "A",
      explanation: "The Principle of Least Privilege means granting only the minimum permissions necessary to perform required tasks."
    },
    {
      id: 23,
      text: "Which of the following does NOT belong to the AWS Cloud Computing models?",
      options: [
        { id: "A", text: "Platform as a Service (PaaS)." },
        { id: "B", text: "Infrastructure as a Service (IaaS)." },
        { id: "C", text: "Software as a Service (SaaS)." },
        { id: "D", text: "Networking as a Service (NaaS)." }
      ],
      correctAnswer: "D",
      explanation: "Networking as a Service (NaaS) is not one of the standard AWS cloud computing models. The main models are IaaS, PaaS, and SaaS."
    },
    {
      id: 24,
      text: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
      options: [
        { id: "A", text: "S3 Intelligent-Tiering." },
        { id: "B", text: "AWS Marketplace." },
        { id: "C", text: "Amazon S3 Glacier Deep Archive." },
        { id: "D", text: "Amazon EBS." }
      ],
      correctAnswer: "C",
      explanation: "S3 Glacier Deep Archive is the most cost-effective option for long-term archival storage of data that is rarely accessed."
    },
    {
      id: 25,
      text: "Which service provides DNS in the AWS cloud?",
      options: [
        { id: "A", text: "Route 53." },
        { id: "B", text: "AWS Config." },
        { id: "C", text: "Amazon CloudFront." },
        { id: "D", text: "Amazon EMR." }
      ],
      correctAnswer: "A",
      explanation: "Amazon Route 53 is AWS's Domain Name System (DNS) web service."
    },
    {
      id: 26,
      text: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
      options: [
        { id: "A", text: "AWS Shield." },
        { id: "B", text: "AWS Config." },
        { id: "C", text: "Amazon Cognito." },
        { id: "D", text: "AWS WAF." },
        { id: "E", text: "AWS KMS." }
      ],
      correctAnswer: "A,D",
      explanation: "AWS Shield (A) provides DDoS protection and AWS WAF (D) helps protect web applications from common web exploits."
    },
    {
      id: 27,
      text: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
      options: [
        { id: "A", text: "AWS OpsWorks." },
        { id: "B", text: "AWS Storage Gateway." },
        { id: "C", text: "Amazon EBS volume." },
        { id: "D", text: "Amazon ElastiCache." }
      ],
      correctAnswer: "D",
      explanation: "Amazon ElastiCache provides in-memory caching for frequently accessed data, significantly improving response times."
    },
    {
      id: 28,
      text: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
      options: [
        { id: "A", text: "Reserved instances." },
        { id: "B", text: "Spot instances." },
        { id: "C", text: "Dedicated instances." },
        { id: "D", text: "On-demand instances." }
      ],
      correctAnswer: "D",
      explanation: "On-demand instances are ideal for short-term, unpredictable workloads that cannot be interrupted."
    },
    {
      id: 29,
      text: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
      options: [
        { id: "A", text: "Reserved Instances." },
        { id: "B", text: "On-demand Instances." },
        { id: "C", text: "Dedicated Instances." },
        { id: "D", text: "Spot Instances." }
      ],
      correctAnswer: "D",
      explanation: "Spot Instances offer the lowest cost for flexible, non-critical workloads that can handle interruptions."
    },
    {
      id: 30,
      text: "Which of the following can be described as a global content delivery network (CDN) service?",
      options: [
        { id: "A", text: "AWS VPN." },
        { id: "B", text: "AWS Direct Connect." },
        { id: "C", text: "AWS Regions." },
        { id: "D", text: "Amazon CloudFront." }
      ],
      correctAnswer: "D",
      explanation: "Amazon CloudFront is AWS's global content delivery network (CDN) service."
    },
    {
      id: 31,
      text: "Which of the following services allows customers to manage their agreements with AWS?",
      options: [
        { id: "A", text: "AWS Artifact." },
        { id: "B", text: "AWS Certificate Manager." },
        { id: "C", text: "AWS Systems Manager." },
        { id: "D", text: "AWS Organizations." }
      ],
      correctAnswer: "A",
      explanation: "AWS Artifact provides on-demand access to AWS security and compliance documents and agreements."
    },
    {
      id: 32,
      text: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
      options: [
        { id: "A", text: "Amazon VPC." },
        { id: "B", text: "Amazon DynamoDB." },
        { id: "C", text: "Amazon Elastic MapReduce." },
        { id: "D", text: "AWS IAM." },
        { id: "E", text: "Amazon Elastic Compute Cloud." }
      ],
      correctAnswer: "B,C",
      explanation: "DynamoDB (B) and Elastic MapReduce (C) are managed services where AWS handles the underlying infrastructure."
    },
    {
      id: 33,
      text: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
      options: [
        { id: "A", text: "Amazon Aurora." },
        { id: "B", text: "Amazon DynamoDB." },
        { id: "C", text: "Amazon Elastic Block Store." },
        { id: "D", text: "Amazon Redshift." }
      ],
      correctAnswer: "B",
      explanation: "Amazon DynamoDB is AWS's NoSQL database service."
    },
    {
      id: 34,
      text: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
      options: [
        { id: "A", text: "AWS Identity and Access Management (IAM) user." },
        { id: "B", text: "Infrastructure Event Management (IEM) engineer." },
        { id: "C", text: "AWS Consulting Partners." },
        { id: "D", text: "Technical Account Manager (TAM)." }
      ],
      correctAnswer: "D",
      explanation: "A Technical Account Manager (TAM) is the primary point of contact for Enterprise Support customers."
    },
    {
      id: 35,
      text: "How can you view the distribution of AWS spending in one of your AWS accounts?",
      options: [
        { id: "A", text: "By using Amazon VPC console." },
        { id: "B", text: "By contacting the AWS Support team." },
        { id: "C", text: "By using AWS Cost Explorer." },
        { id: "D", text: "By contacting the AWS Finance team." }
      ],
      correctAnswer: "C",
      explanation: "AWS Cost Explorer provides visualizations and analysis of your AWS costs and usage over time."
    },
    {
      id: 36,
      text: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
      options: [
        { id: "A", text: "Access keys." },
        { id: "B", text: "Secret token." },
        { id: "C", text: "UserID." },
        { id: "D", text: "User name and password." }
      ],
      correctAnswer: "A",
      explanation: "Access keys (consisting of an access key ID and secret access key) are required for programmatic access to AWS via the CLI."
    },
    {
      id: 37,
      text: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
      options: [
        { id: "A", text: "Contact the AWS Customer Service team." },
        { id: "B", text: "Contact the AWS Abuse team." },
        { id: "C", text: "Contact the AWS Concierge team." },
        { id: "D", text: "Contact the AWS Security team." }
      ],
      correctAnswer: "B",
      explanation: "The AWS Abuse team handles reports of malicious use of AWS resources, available to all AWS customers regardless of support plan."
    },
    {
      id: 38,
      text: "Select TWO examples of the AWS shared controls.",
      options: [
        { id: "A", text: "Patch Management." },
        { id: "B", text: "IAM Management." },
        { id: "C", text: "VPC Management." },
        { id: "D", text: "Configuration Management." },
        { id: "E", text: "Data Center operations." }
      ],
      correctAnswer: "A,D",
      explanation: "Patch Management (A) and Configuration Management (D) are shared controls, with both AWS and the customer having responsibilities."
    },
    {
      id: 39,
      text: "In order to implement best practices when dealing with a 'Single Point of Failure,' you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
      options: [
        { id: "A", text: "ELB." },
        { id: "B", text: "Auto Scaling." },
        { id: "C", text: "Amazon Athen." },
        { id: "D", text: "ECR." },
        { id: "E", text: "Amazon EC2." }
      ],
      correctAnswer: "A,B",
      explanation: "Elastic Load Balancing (A) distributes traffic across multiple instances, while Auto Scaling (B) automatically adjusts capacity."
    },
    {
      id: 40,
      text: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
      options: [
        { id: "A", text: "Amazon SNS." },
        { id: "B", text: "Amazon Kinesis Video Streams." },
        { id: "C", text: "AWS CloudFormation." },
        { id: "D", text: "Amazon CloudFront." }
      ],
      correctAnswer: "D",
      explanation: "Amazon CloudFront is a content delivery network that delivers content globally with low latency and high transfer speeds."
    },
    {
      id: 41,
      text: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
      options: [
        { id: "A", text: "A MySQL database installed on an EC2 instance." },
        { id: "B", text: "Amazon Aurora." },
        { id: "C", text: "Amazon DynamoDB." },
        { id: "D", text: "Amazon Neptune." }
      ],
      correctAnswer: "B",
      explanation: "Amazon Aurora is a MySQL-compatible database service that includes automated backups as a feature."
    },
    {
      id: 42,
      text: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
      options: [
        { id: "A", text: "AWS CloudFormation." },
        { id: "B", text: "AWS Config." },
        { id: "C", text: "Amazon SES." },
        { id: "D", text: "Amazon EMR." }
      ],
      correctAnswer: "A",
      explanation: "AWS CloudFormation allows you to define infrastructure as code, creating and managing AWS resources with templates."
    },
    {
      id: 43,
      text: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
      options: [
        { id: "A", text: "Client-side encryption." },
        { id: "B", text: "Configuring infrastructure devices." },
        { id: "C", text: "Server-side encryption." },
        { id: "D", text: "Filtering traffic with Security Groups." }
      ],
      correctAnswer: "B",
      explanation: "AWS is responsible for configuring the infrastructure devices that support AWS services."
    },
    {
      id: 44,
      text: "What does the AWS Health Dashboard provide? (Choose TWO)",
      options: [
        { id: "A", text: "Detailed troubleshooting guidance to address AWS events impacting your resources." },
        { id: "B", text: "Health checks for Auto Scaling instances." },
        { id: "C", text: "Recommendations for Cost Optimization." },
        { id: "D", text: "A dashboard detailing vulnerabilities in your applications." },
        { id: "E", text: "Personalized view of AWS service health." }
      ],
      correctAnswer: "A,E",
      explanation: "AWS Health Dashboard provides troubleshooting guidance (A) and a personalized view of AWS service health (E)."
    },
    {
      id: 45,
      text: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can't reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
      options: [
        { id: "A", text: "AWS Lambda." },
        { id: "B", text: "AWS Config." },
        { id: "C", text: "Amazon CloudWatch." },
        { id: "D", text: "AWS CloudTrail." }
      ],
      correctAnswer: "C",
      explanation: "Amazon CloudWatch monitors AWS resources and applications, providing insights into performance, health, and metrics."
    },
    {
      id: 46,
      text: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
      options: [
        { id: "A", text: "AWS Shield." },
        { id: "B", text: "AWS Management Console." },
        { id: "C", text: "AWS Secrets Manager." },
        { id: "D", text: "AWS Trusted Advisor." }
      ],
      correctAnswer: "D",
      explanation: "AWS Trusted Advisor provides recommendations to help optimize your AWS infrastructure, including security optimizations."
    },
    {
      id: 47,
      text: "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
      options: [
        { id: "A", text: "Amazon S3 provides unlimited storage for any type of data." },
        { id: "B", text: "Amazon S3 can run any type of application or backend system." },
        { id: "C", text: "Amazon S3 stores any number of objects, but with object size limits." },
        { id: "D", text: "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere." },
        { id: "E", text: "Amazon S3 provides 99.999999999% (11 9's) of data durability." }
      ],
      correctAnswer: "B,D",
      explanation: "S3 cannot run applications (B) and scaling is automatic, not manual (D)."
    },
    {
      id: 48,
      text: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
      options: [
        { id: "A", text: "Disk disposal." },
        { id: "B", text: "Controlling physical access to compute resources." },
        { id: "C", text: "Patching the Network infrastructure." },
        { id: "D", text: "Filtering traffic with Security Groups." }
      ],
      correctAnswer: "B,D",
      explanation: "The customer is responsible for controlling physical access to compute resources (B) and filtering traffic with Security Groups (D)."
    },
    {
      id: 49,
      text: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
      options: [
        { id: "A", text: "Amazon Rekognition" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "Amazon GuardDuty" },
        { id: "D", text: "Amazon CloudWatch" }
      ],
      correctAnswer: "C",
      explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads."
    },
    {
      id: 50,
      text: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
      options: [
        { id: "A", text: "AWS Marketplace" },
        { id: "B", text: "AWS Partner Network (APN)" },
        { id: "C", text: "AWS Managed Services" },
        { id: "D", text: "AWS Service Catalog" }
      ],
      correctAnswer: "A",
      explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    }
  ]
};

export const awsCloudPractitionerQuiz2: Quiz = {
  id: "aws-ccp-2",
  title: "AWS Certified Cloud Practitioner - Practice Exam 2",
  description: "Practice Exam 2 - Test your knowledge of AWS Cloud concepts, services, and the AWS global infrastructure.",
  timeLimit: 90,
  questions: [
    {
      id: 1,
      text: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
      options: [
        { id: "A", text: "Amazon Rekognition" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "Amazon GuardDuty" },
        { id: "D", text: "Amazon CloudWatch" }
      ],
      correctAnswer: "C",
      explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads."
    },
    {
      id: 2,
      text: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
      options: [
        { id: "A", text: "AWS Marketplace" },
        { id: "B", text: "AWS Partner Network (APN)" },
        { id: "C", text: "AWS Managed Services" },
        { id: "D", text: "AWS Service Catalog" }
      ],
      correctAnswer: "A",
      explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
      id: 3,
      text: "Which AWS service is a managed NoSQL database?",
      options: [
        { id: "A", text: "Amazon Redshift" },
        { id: "B", text: "Amazon DynamoDB" },
        { id: "C", text: "Amazon Aurora" },
        { id: "D", text: "Amazon RDS for MariaDB" }
      ],
      correctAnswer: "B",
      explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable NoSQL database."
    },
    {
      id: 4,
      text: "Which AWS service should be used to create a billing alarm?",
      options: [
        { id: "A", text: "AWS Trusted Advisor" },
        { id: "B", text: "AWS CloudTrail" },
        { id: "C", text: "Amazon CloudWatch" },
        { id: "D", text: "Amazon QuickSight" }
      ],
      correctAnswer: "C",
      explanation: "Amazon CloudWatch can be used to create billing alarms that watch for estimated charges and send a notification when a specified threshold is exceeded."
    },
    {
      id: 5,
      text: "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
      options: [
        { id: "A", text: "Scaling the web application and services developed with Docker" },
        { id: "B", text: "Provisioning or scheduling containers to run on clusters and maintain their availability" },
        { id: "C", text: "Performing hardware maintenance in the AWS facilities that run the AWS Cloud" },
        { id: "D", text: "Managing the guest operating system, including updates and security patches" }
      ],
      correctAnswer: "C",
      explanation: "Under the AWS shared responsibility model, AWS is responsible for the infrastructure that runs all of the services offered in the AWS Cloud, which includes hardware maintenance in AWS facilities."
    }
  ]
};

export const awsCloudPractitionerQuiz3: Quiz = {
  id: "aws-ccp-3",
  title: "AWS Certified Cloud Practitioner - Practice Exam 3",
  description: "Practice Exam 3 - Comprehensive exam covering AWS services, security, and cloud concepts for the Cloud Practitioner certification.",
  timeLimit: 90,
  questions: [
    {
      id: 1,
      text: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
      options: [
        { id: "A", text: "Amazon Rekognition" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "Amazon GuardDuty" },
        { id: "D", text: "Amazon CloudWatch" }
      ],
      correctAnswer: "C",
      explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads."
    },
    {
      id: 2,
      text: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
      options: [
        { id: "A", text: "AWS Marketplace" },
        { id: "B", text: "AWS Partner Network (APN)" },
        { id: "C", text: "AWS Managed Services" },
        { id: "D", text: "AWS Service Catalog" }
      ],
      correctAnswer: "A",
      explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
      id: 3,
      text: "Which AWS service is a managed NoSQL database?",
      options: [
        { id: "A", text: "Amazon Redshift" },
        { id: "B", text: "Amazon DynamoDB" },
        { id: "C", text: "Amazon Aurora" },
        { id: "D", text: "Amazon RDS for MariaDB" }
      ],
      correctAnswer: "B",
      explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable NoSQL database."
    },
    {
      id: 4,
      text: "Which AWS service should be used to create a billing alarm?",
      options: [
        { id: "A", text: "AWS Trusted Advisor" },
        { id: "B", text: "AWS CloudTrail" },
        { id: "C", text: "Amazon CloudWatch" },
        { id: "D", text: "Amazon QuickSight" }
      ],
      correctAnswer: "C",
      explanation: "Amazon CloudWatch can be used to create billing alarms that watch for estimated charges and send a notification when a specified threshold is exceeded."
    },
    {
      id: 5,
      text: "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
      options: [
        { id: "A", text: "Scaling the web application and services developed with Docker" },
        { id: "B", text: "Provisioning or scheduling containers to run on clusters and maintain their availability" },
        { id: "C", text: "Performing hardware maintenance in the AWS facilities that run the AWS Cloud" },
        { id: "D", text: "Managing the guest operating system, including updates and security patches" }
      ],
      correctAnswer: "C",
      explanation: "Under the AWS shared responsibility model, AWS is responsible for the infrastructure that runs all of the services offered in the AWS Cloud, which includes hardware maintenance in AWS facilities."
    },
    {
      id: 6,
      text: "Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?",
      options: [
        { id: "A", text: "Amazon CloudFront" },
        { id: "B", text: "AWS Direct Connect" },
        { id: "C", text: "Amazon EC2 Auto Scaling" },
        { id: "D", text: "AWS Transit Gateway" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudFront is a content delivery network service that speeds up distribution of your static and dynamic web content to end users by caching content at edge locations worldwide, resulting in reduced latency."
    },
    {
      id: 7,
      text: "Which actions represent best practices for using AWS IAM? (Choose two.)",
      options: [
        { id: "A", text: "Configure a strong password policy" },
        { id: "B", text: "Share the security credentials among users of AWS accounts who are in the same Region" },
        { id: "C", text: "Use access keys to log in to the AWS Management Console" },
        { id: "D", text: "Rotate access keys on a regular basis" },
        { id: "E", text: "Avoid using IAM roles to delegate permissions" }
      ],
      correctAnswer: "A,D",
      explanation: "Configuring a strong password policy (A) and rotating access keys regularly (D) are best practices for AWS IAM security."
    },
    {
      id: 8,
      text: "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
      options: [
        { id: "A", text: "AWS Config" },
        { id: "B", text: "VPC Flow Logs" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "AWS CloudTrail" }
      ],
      correctAnswer: "B",
      explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC."
    },
    {
      id: 9,
      text: "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?",
      options: [
        { id: "A", text: "Amazon Inspector" },
        { id: "B", text: "Amazon CloudWatch" },
        { id: "C", text: "AWS Global Accelerator" },
        { id: "D", text: "Amazon CloudFront" }
      ],
      correctAnswer: "C",
      explanation: "AWS Global Accelerator continuously monitors the health of your application endpoints and redirects traffic to healthy endpoints in less than 30 seconds."
    },
    {
      id: 10,
      text: "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)",
      options: [
        { id: "A", text: "Use AWS Config to generate an inventory of AWS resources" },
        { id: "B", text: "Use service limits to prevent users from creating or making changes to AWS resources" },
        { id: "C", text: "Use AWS CloudTrail to record AWS API calls into an auditable log file" },
        { id: "D", text: "Use AWS Certificate Manager to whitelist approved AWS resources and services" },
        { id: "E", text: "Use Amazon GuardDuty to validate configuration changes made to AWS resources" }
      ],
      correctAnswer: "A,C",
      explanation: "Using AWS Config to track resources (A) and AWS CloudTrail to record API calls (C) are key change management practices for reliability in the AWS Cloud."
    }
  ]
};

export const quizzes = [awsCloudPractitionerQuiz, awsCloudPractitionerQuiz2, awsCloudPractitionerQuiz3];
