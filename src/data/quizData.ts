// build a REST API for these data 
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
    },
    {
      id: 11,
      text: "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
      options: [
        { id: "A", text: "Amazon CloudWatch" },
        { id: "B", text: "AWS Config" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "AWS IAM" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudWatch can be configured to monitor and send alerts for AWS account root user sign-in events."
    },
    {
      id: 12,
      text: "Which design principle should be considered when architecting in the AWS Cloud?",
      options: [
        { id: "A", text: "Think of servers as non-disposable resources" },
        { id: "B", text: "Use synchronous integration of services" },
        { id: "C", text: "Design loosely coupled components" },
        { id: "D", text: "Implement the least permissive rules for security groups" }
      ],
      correctAnswer: "C",
      explanation: "Designing loosely coupled components reduces interdependencies, making systems more resilient and easier to scale."
    },
    {
      id: 13,
      text: "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
      options: [
        { id: "A", text: "AWS Snowball" },
        { id: "B", text: "AWS Lambda" },
        { id: "C", text: "AWS ElastiCache" },
        { id: "D", text: "AWS Database Migration Service (AWS DMS)" },
        { id: "E", text: "Amazon API Gateway" }
      ],
      correctAnswer: "A,D",
      explanation: "AWS Snowball (A) is used for large-scale data transfers, while AWS DMS (D) helps migrate databases to AWS Cloud."
    },
    {
      id: 14,
      text: "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
      options: [
        { id: "A", text: "Run the application on a bigger EC2 instance size." },
        { id: "B", text: "Switch to an EC2 instance family that better matches batch requirements." },
        { id: "C", text: "Distribute the application across multiple EC2 instances and run the workload in parallel." },
        { id: "D", text: "Run the application on a bare metal EC2 instance." }
      ],
      correctAnswer: "C",
      explanation: "Distributing the workload across multiple instances for parallel processing is the most effective way to handle consistently growing demand."
    },
    {
      id: 15,
      text: "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
      options: [
        { id: "A", text: "Forward monthly invoices for each account. Then create IAM roles to allow cross-account access." },
        { id: "B", text: "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join." },
        { id: "C", text: "Configure AWS Organizations in each of the existing accounts. Then link all accounts together." },
        { id: "D", text: "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts." }
      ],
      correctAnswer: "B",
      explanation: "AWS Organizations allows you to consolidate multiple AWS accounts into an organization that you can centrally manage."
    },
    {
      id: 16,
      text: "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
      options: [
        { id: "A", text: "Economy of scale" },
        { id: "B", text: "Elasticity" },
        { id: "C", text: "High availability" },
        { id: "D", text: "Agility" }
      ],
      correctAnswer: "B",
      explanation: "Elasticity refers to the ability to scale resources up or down easily as demand changes."
    },
    {
      id: 17,
      text: "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
      options: [
        { id: "A", text: "AWS CloudTrail" },
        { id: "B", text: "Amazon EC2 Auto Scaling" },
        { id: "C", text: "Amazon Forecast" },
        { id: "D", text: "AWS Config" }
      ],
      correctAnswer: "B",
      explanation: "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on demand."
    },
    {
      id: 18,
      text: "Which AWS service enables users to securely connect to AWS resources over the public internet?",
      options: [
        { id: "A", text: "Amazon VPC peering" },
        { id: "B", text: "AWS Direct Connect" },
        { id: "C", text: "AWS VPN" },
        { id: "D", text: "Amazon Pinpoint" }
      ],
      correctAnswer: "C",
      explanation: "AWS VPN lets you establish a secure and private encrypted connection between your network and AWS over the public internet."
    },
    {
      id: 19,
      text: "Which tool is used to forecast AWS spending?",
      options: [
        { id: "A", text: "AWS Trusted Advisor" },
        { id: "B", text: "AWS Organizations" },
        { id: "C", text: "Cost Explorer" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "C",
      explanation: "Cost Explorer helps you visualize, understand, and manage your AWS costs and usage over time and provides forecasting capabilities."
    },
    {
      id: 20,
      text: "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
      options: [
        { id: "A", text: "Amazon ElastiCache" },
        { id: "B", text: "Amazon CloudFront" },
        { id: "C", text: "Amazon Elastic File System (Amazon EFS)" },
        { id: "D", text: "Amazon Elastic Block Store (Amazon EBS)" }
      ],
      correctAnswer: "B",
      explanation: "Amazon CloudFront is a content delivery network that caches content at edge locations around the world to reduce latency for users."
    },
    {
      id: 21,
      text: "Which of the following is a component of the AWS Global Infrastructure?",
      options: [
        { id: "A", text: "Amazon Alexa" },
        { id: "B", text: "AWS Regions" },
        { id: "C", text: "Amazon Lightsail" },
        { id: "D", text: "AWS Organizations" }
      ],
      correctAnswer: "B",
      explanation: "AWS Regions are key components of the AWS Global Infrastructure, consisting of multiple Availability Zones."
    },
    {
      id: 22,
      text: "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
      options: [
        { id: "A", text: "Amazon CloudWatch" },
        { id: "B", text: "AWS Config" },
        { id: "C", text: "AWS CloudTrail" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudWatch monitors resources and applications, providing metrics such as CPU utilization for EC2 instances."
    },
    {
      id: 23,
      text: "Why is it beneficial to use Elastic Load Balancers with applications?",
      options: [
        { id: "A", text: "They allow for the conversion from Application Load Balancers to Classic Load Balancers." },
        { id: "B", text: "They are capable of handling constant changes in network traffic patterns." },
        { id: "C", text: "They automatically adjust capacity." },
        { id: "D", text: "They are provided at no charge to users." }
      ],
      correctAnswer: "B",
      explanation: "Elastic Load Balancers distribute incoming application traffic across multiple targets to handle varying traffic patterns."
    },
    {
      id: 24,
      text: "Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)",
      options: [
        { id: "A", text: "Infrastructure facilities access management" },
        { id: "B", text: "Cloud infrastructure hardware lifecycle management" },
        { id: "C", text: "Configuration management of user's applications" },
        { id: "D", text: "Networking infrastructure protection" },
        { id: "E", text: "Security groups configuration" }
      ],
      correctAnswer: "C,E",
      explanation: "Customers are responsible for security 'in' the cloud, including application configuration (C) and security group settings (E)."
    },
    {
      id: 25,
      text: "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
      options: [
        { id: "A", text: "Scalability" },
        { id: "B", text: "Loose coupling" },
        { id: "C", text: "Automation" },
        { id: "D", text: "Automatic scaling" }
      ],
      correctAnswer: "B",
      explanation: "Loose coupling reduces interdependencies between components, enhancing resilience to failures."
    },
    {
      id: 26,
      text: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
      options: [
        { id: "A", text: "AWS WAF" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "AWS Direct Connect" },
        { id: "D", text: "AWS Organizations" },
        { id: "E", text: "Network ACLs" }
      ],
      correctAnswer: "A,E",
      explanation: "AWS WAF (A) lets you monitor web requests and block specific IP ranges, while Network ACLs (E) act as firewalls at the subnet level."
    },
    {
      id: 27,
      text: "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
      options: [
        { id: "A", text: "Amazon EBS" },
        { id: "B", text: "Amazon EFS" },
        { id: "C", text: "Amazon S3" },
        { id: "D", text: "AWS Artifact" }
      ],
      correctAnswer: "B",
      explanation: "Amazon EFS provides scalable file storage that can be accessed concurrently by multiple EC2 instances."
    },
    {
      id: 28,
      text: "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose two.)",
      options: [
        { id: "A", text: "Running a virus scan on EC2 instances" },
        { id: "B", text: "Protecting against IP spoofing and packet sniffing" },
        { id: "C", text: "Installing the latest security patches on the RDS instance" },
        { id: "D", text: "Encrypting communication between the EC2 instances and the Elastic Load Balancer" },
        { id: "E", text: "Configuring a security group and a network access control list (NACL) for EC2" }
      ],
      correctAnswer: "B,C",
      explanation: "AWS handles network security (B) and patching for managed services like RDS (C)."
    },
    {
      id: 29,
      text: "What is the benefit of elasticity in the AWS Cloud?",
      options: [
        { id: "A", text: "Ensure web traffic is automatically spread across multiple AWS Regions." },
        { id: "B", text: "Minimize storage costs by automatically archiving log data." },
        { id: "C", text: "Enable AWS to automatically select the most cost-effective services." },
        { id: "D", text: "Automatically adjust the required compute capacity to maintain consistent performance." }
      ],
      correctAnswer: "D",
      explanation: "Elasticity allows automatic adjustment of resources to maintain performance as demand changes."
    },
    {
      id: 30,
      text: "The continual reduction of AWS Cloud pricing is due to:",
      options: [
        { id: "A", text: "pay-as-you go pricing" },
        { id: "B", text: "the AWS global infrastructure" },
        { id: "C", text: "economies of scale" },
        { id: "D", text: "reserved storage pricing" }
      ],
      correctAnswer: "C",
      explanation: "AWS passes on savings from economies of scale to customers through lower prices as their customer base grows."
    },
    {
      id: 31,
      text: "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
      options: [
        { id: "A", text: "Enable S3 Block Public Access from the AWS Management Console." },
        { id: "B", text: "Hold a team meeting to discuss the importance if only uploading private S3 objects." },
        { id: "C", text: "Require all S3 objects to be manually approved before uploading." },
        { id: "D", text: "Create a service to monitor all S3 uploads and remove any public uploads." }
      ],
      correctAnswer: "A",
      explanation: "S3 Block Public Access prevents public access to objects regardless of bucket policies or object permissions."
    },
    {
      id: 32,
      text: "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
      options: [
        { id: "A", text: "Open a detailed case related to billing and submit it to AWS Support for help." },
        { id: "B", text: "Upload data describing the issue to a new object in a private Amazon S3 bucket." },
        { id: "C", text: "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information." },
        { id: "D", text: "Proceed with creating a new dashboard in Amazon QuickSight." }
      ],
      correctAnswer: "A",
      explanation: "AWS Support can help resolve billing issues when contacted through the support portal."
    },
    {
      id: 33,
      text: "What does the AWS Simple Monthly Calculator do?",
      options: [
        { id: "A", text: "Compares on-premises costs to colocation environments" },
        { id: "B", text: "Estimates monthly billing based on projected usage" },
        { id: "C", text: "Estimates power consumption at existing data centers" },
        { id: "D", text: "Estimates CPU utilization" }
      ],
      correctAnswer: "B",
      explanation: "The AWS Simple Monthly Calculator helps estimate monthly AWS costs based on projected service usage."
    },
    {
      id: 34,
      text: "Who is responsible for patching the guest operating system for Amazon RDS?",
      options: [
        { id: "A", text: "The AWS Product team" },
        { id: "B", text: "The customer Database Administrator" },
        { id: "C", text: "Managed partners" },
        { id: "D", text: "AWS Support" }
      ],
      correctAnswer: "A",
      explanation: "For Amazon RDS, AWS handles operating system patching as part of the managed database service."
    },
    {
      id: 35,
      text: "Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
      options: [
        { id: "A", text: "Amazon EC2" },
        { id: "B", text: "Amazon DynamoDB" },
        { id: "C", text: "Amazon S3" },
        { id: "D", text: "Amazon Route 53" },
        { id: "E", text: "Amazon Redshift" }
      ],
      correctAnswer: "A,B",
      explanation: "AWS Auto Scaling can adjust capacity for EC2 instances (A) and DynamoDB tables (B) based on demand."
    },
    {
      id: 36,
      text: "Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
      options: [
        { id: "A", text: "Reduced cost to run services on AWS" },
        { id: "B", text: "Improved availability of applications deployed on AWS" },
        { id: "C", text: "Higher durability of data stored on AWS" },
        { id: "D", text: "Decreased latency to reach applications deployed on AWS" },
        { id: "E", text: "Higher security of data stored on AWS" }
      ],
      correctAnswer: "B,D",
      explanation: "AWS Global Accelerator improves application availability (B) and reduces latency (D) by routing traffic through the AWS global network."
    },
    {
      id: 37,
      text: "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
      options: [
        { id: "A", text: "the AWS Support forum" },
        { id: "B", text: "AWS Abuse" },
        { id: "C", text: "an AWS Solutions Architect" },
        { id: "D", text: "AWS Support" }
      ],
      correctAnswer: "D",
      explanation: "AWS Support handles account and billing inquiries, including account reactivation."
    },
    {
      id: 38,
      text: "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
      options: [
        { id: "A", text: "Provision capacity based on past usage and theoretical peaks" },
        { id: "B", text: "Dynamically and predictively scale to meet usage demands" },
        { id: "C", text: "Build the application and infrastructure in a data center that grants physical access" },
        { id: "D", text: "Break apart the application into loosely coupled components" }
      ],
      correctAnswer: "B",
      explanation: "Dynamically scaling resources based on demand leverages the cloud's elasticity to optimize performance and cost."
    },
    {
      id: 39,
      text: "Which method helps to optimize costs of users moving to the AWS Cloud?",
      options: [
        { id: "A", text: "Paying only for what is used" },
        { id: "B", text: "Purchasing hardware before it is needed" },
        { id: "C", text: "Manually provisioning cloud resources" },
        { id: "D", text: "Purchasing for the maximum possible load" }
      ],
      correctAnswer: "A",
      explanation: "The pay-as-you-go model allows customers to pay only for the resources they actually use, optimizing costs."
    },
    {
      id: 40,
      text: "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
      options: [
        { id: "A", text: "Installing security patches for the Xen and KVM hypervisors" },
        { id: "B", text: "Installing operating system patches for Amazon DynamoDB" },
        { id: "C", text: "Installing operating system security patches for Amazon EC2 database instances" },
        { id: "D", text: "Installing operating system security patches for Amazon RDS database instances" }
      ],
      correctAnswer: "C",
      explanation: "Customers are responsible for patching the operating systems on EC2 instances, while AWS handles patching for managed services like RDS and DynamoDB."
    },
    {
      id: 41,
      text: "The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
      options: [
        { id: "A", text: "Terminate all AWS resources automatically if budget thresholds are exceeded." },
        { id: "B", text: "Break down AWS costs by day, service, and linked AWS account." },
        { id: "C", text: "Create budgets and receive notifications if current of forecasted usage exceeds the budgets." },
        { id: "D", text: "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective." },
        { id: "E", text: "Move data stored in Amazon S3 to a more cost-effective storage class." }
      ],
      correctAnswer: "B,C",
      explanation: "AWS Cost Management tools let you analyze costs by various dimensions (B) and set up budgets with notifications (C)."
    },
    {
      id: 42,
      text: "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
      options: [
        { id: "A", text: "AWS Support" },
        { id: "B", text: "the customer" },
        { id: "C", text: "AWS Systems Manager" },
        { id: "D", text: "AWS Config" }
      ],
      correctAnswer: "B",
      explanation: "Customers are responsible for security 'in' the cloud, including guest operating system patching."
    },
    {
      id: 43,
      text: "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
      options: [
        { id: "A", text: "AWS Direct Connect" },
        { id: "B", text: "Amazon Connect" },
        { id: "C", text: "AWS Identity and Access Management (IAM)" },
        { id: "D", text: "AWS Firewall Manager" }
      ],
      correctAnswer: "C",
      explanation: "AWS IAM enables you to securely control access to AWS services and resources at no additional charge."
    },
    {
      id: 44,
      text: "Which AWS service provides on-demand of AWS security and compliance documentation?",
      options: [
        { id: "A", text: "AWS Directory Service" },
        { id: "B", text: "AWS Artifact" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "B",
      explanation: "AWS Artifact provides on-demand access to AWS security and compliance reports and select online agreements."
    },
    {
      id: 45,
      text: "Which AWS service can be used to turn text into life-like speech?",
      options: [
        { id: "A", text: "Amazon Polly" },
        { id: "B", text: "Amazon Transcribe" },
        { id: "C", text: "Amazon Rekognition" },
        { id: "D", text: "Amazon Lex" }
      ],
      correctAnswer: "A",
      explanation: "Amazon Polly is a service that turns text into lifelike speech, allowing applications to talk naturally."
    },
    {
      id: 46,
      text: "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
      options: [
        { id: "A", text: "Design using a serverless architecture" },
        { id: "B", text: "Assume that all components within an application can fail" },
        { id: "C", text: "Design AWS Auto Scaling into every application" },
        { id: "D", text: "Design all components using open-source code" }
      ],
      correctAnswer: "B",
      explanation: "Designing for failure by assuming all components can fail is a core principle of high availability in the cloud."
    },
    {
      id: 47,
      text: "A user needs to generate a report that outlines the status of key security checks in an AWS account including Amazon S3 bucket permissions, MFA status for the root user, and security group configurations. Where can all this information be found in one location?",
      options: [
        { id: "A", text: "Amazon QuickSight dashboard" },
        { id: "B", text: "AWS CloudTrail trails" },
        { id: "C", text: "AWS Trusted Advisor report" },
        { id: "D", text: "IAM credential report" }
      ],
      correctAnswer: "C",
      explanation: "AWS Trusted Advisor provides recommendations across multiple categories including security status checks."
    },
    {
      id: 48,
      text: "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
      options: [
        { id: "A", text: "Dedicated Hosts" },
        { id: "B", text: "On-Demand Instances" },
        { id: "C", text: "Spot Instances" },
        { id: "D", text: "Reserved Instances" }
      ],
      correctAnswer: "A",
      explanation: "EC2 Dedicated Hosts provide visibility of the underlying physical cores for software licensing purposes."
    },
    {
      id: 49,
      text: "Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
      options: [
        { id: "A", text: "AWS Regions" },
        { id: "B", text: "Availability Zones" },
        { id: "C", text: "Edge locations" },
        { id: "D", text: "Data centers" }
      ],
      correctAnswer: "C",
      explanation: "Edge locations are used by services like CloudFront to cache content closer to end users for faster delivery."
    },
    {
      id: 50,
      text: "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
      options: [
        { id: "A", text: "Security" },
        { id: "B", text: "Operational excellence" },
        { id: "C", text: "Performance efficiency" },
        { id: "D", text: "Cost optimization" }
      ],
      correctAnswer: "A",
      explanation: "Security is the pillar that focuses on protecting information and systems, including tracking configuration changes."
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
    },
    {
      id: 11,
      text: "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
      options: [
        { id: "A", text: "Amazon CloudWatch" },
        { id: "B", text: "AWS Config" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "AWS IAM" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudWatch can be configured to monitor and send alerts for AWS account root user sign-in events."
    },
    {
      id: 12,
      text: "Which design principle should be considered when architecting in the AWS Cloud?",
      options: [
        { id: "A", text: "Think of servers as non-disposable resources" },
        { id: "B", text: "Use synchronous integration of services" },
        { id: "C", text: "Design loosely coupled components" },
        { id: "D", text: "Implement the least permissive rules for security groups" }
      ],
      correctAnswer: "C",
      explanation: "Designing loosely coupled components reduces interdependencies, making systems more resilient and easier to scale."
    },
    {
      id: 13,
      text: "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
      options: [
        { id: "A", text: "AWS Snowball" },
        { id: "B", text: "AWS Lambda" },
        { id: "C", text: "AWS ElastiCache" },
        { id: "D", text: "AWS Database Migration Service (AWS DMS)" },
        { id: "E", text: "Amazon API Gateway" }
      ],
      correctAnswer: "A,D",
      explanation: "AWS Snowball (A) is used for large-scale data transfers, while AWS DMS (D) helps migrate databases to AWS Cloud."
    },
    {
      id: 14,
      text: "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
      options: [
        { id: "A", text: "Run the application on a bigger EC2 instance size." },
        { id: "B", text: "Switch to an EC2 instance family that better matches batch requirements." },
        { id: "C", text: "Distribute the application across multiple EC2 instances and run the workload in parallel." },
        { id: "D", text: "Run the application on a bare metal EC2 instance." }
      ],
      correctAnswer: "C",
      explanation: "Distributing the workload across multiple instances for parallel processing is the most effective way to handle consistently growing demand."
    },
    {
      id: 15,
      text: "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
      options: [
        { id: "A", text: "Forward monthly invoices for each account. Then create IAM roles to allow cross-account access." },
        { id: "B", text: "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join." },
        { id: "C", text: "Configure AWS Organizations in each of the existing accounts. Then link all accounts together." },
        { id: "D", text: "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts." }
      ],
      correctAnswer: "B",
      explanation: "AWS Organizations allows you to consolidate multiple AWS accounts into an organization that you can centrally manage."
    },
    {
      id: 16,
      text: "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
      options: [
        { id: "A", text: "Economy of scale" },
        { id: "B", text: "Elasticity" },
        { id: "C", text: "High availability" },
        { id: "D", text: "Agility" }
      ],
      correctAnswer: "B",
      explanation: "Elasticity refers to the ability to scale resources up or down easily as demand changes."
    },
    {
      id: 17,
      text: "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
      options: [
        { id: "A", text: "AWS CloudTrail" },
        { id: "B", text: "Amazon EC2 Auto Scaling" },
        { id: "C", text: "Amazon Forecast" },
        { id: "D", text: "AWS Config" }
      ],
      correctAnswer: "B",
      explanation: "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on demand."
    },
    {
      id: 18,
      text: "Which AWS service enables users to securely connect to AWS resources over the public internet?",
      options: [
        { id: "A", text: "Amazon VPC peering" },
        { id: "B", text: "AWS Direct Connect" },
        { id: "C", text: "AWS VPN" },
        { id: "D", text: "Amazon Pinpoint" }
      ],
      correctAnswer: "C",
      explanation: "AWS VPN lets you establish a secure and private encrypted connection between your network and AWS over the public internet."
    },
    {
      id: 19,
      text: "Which tool is used to forecast AWS spending?",
      options: [
        { id: "A", text: "AWS Trusted Advisor" },
        { id: "B", text: "AWS Organizations" },
        { id: "C", text: "Cost Explorer" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "C",
      explanation: "Cost Explorer helps you visualize, understand, and manage your AWS costs and usage over time and provides forecasting capabilities."
    },
    {
      id: 20,
      text: "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
      options: [
        { id: "A", text: "Amazon ElastiCache" },
        { id: "B", text: "Amazon CloudFront" },
        { id: "C", text: "Amazon Elastic File System (Amazon EFS)" },
        { id: "D", text: "Amazon Elastic Block Store (Amazon EBS)" }
      ],
      correctAnswer: "B",
      explanation: "Amazon CloudFront is a content delivery network that caches content at edge locations around the world to reduce latency."
    },
    {
      id: 21,
      text: "Which of the following is a component of the AWS Global Infrastructure?",
      options: [
        { id: "A", text: "Amazon Alexa" },
        { id: "B", text: "AWS Regions" },
        { id: "C", text: "Amazon Lightsail" },
        { id: "D", text: "AWS Organizations" }
      ],
      correctAnswer: "B",
      explanation: "AWS Regions are key components of the AWS Global Infrastructure, consisting of multiple Availability Zones."
    },
    {
      id: 22,
      text: "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
      options: [
        { id: "A", text: "Amazon CloudWatch" },
        { id: "B", text: "AWS Config" },
        { id: "C", text: "AWS CloudTrail" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudWatch monitors resources and applications, providing metrics such as CPU utilization for EC2 instances."
    },
    {
      id: 23,
      text: "Why is it beneficial to use Elastic Load Balancers with applications?",
      options: [
        { id: "A", text: "They allow for the conversion from Application Load Balancers to Classic Load Balancers." },
        { id: "B", text: "They are capable of handling constant changes in network traffic patterns." },
        { id: "C", text: "They automatically adjust capacity." },
        { id: "D", text: "They are provided at no charge to users." }
      ],
      correctAnswer: "B",
      explanation: "Elastic Load Balancers distribute incoming application traffic across multiple targets to handle varying traffic patterns."
    },
    {
      id: 24,
      text: "Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)",
      options: [
        { id: "A", text: "Infrastructure facilities access management" },
        { id: "B", text: "Cloud infrastructure hardware lifecycle management" },
        { id: "C", text: "Configuration management of user's applications" },
        { id: "D", text: "Networking infrastructure protection" },
        { id: "E", text: "Security groups configuration" }
      ],
      correctAnswer: "C,E",
      explanation: "Customers are responsible for security 'in' the cloud, including application configuration (C) and security group settings (E)."
    },
    {
      id: 25,
      text: "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
      options: [
        { id: "A", text: "Scalability" },
        { id: "B", text: "Loose coupling" },
        { id: "C", text: "Automation" },
        { id: "D", text: "Automatic scaling" }
      ],
      correctAnswer: "B",
      explanation: "Loose coupling reduces interdependencies between components, enhancing resilience to failures."
    },
    {
      id: 26,
      text: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
      options: [
        { id: "A", text: "AWS WAF" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "AWS Direct Connect" },
        { id: "D", text: "AWS Organizations" },
        { id: "E", text: "Network ACLs" }
      ],
      correctAnswer: "A,E",
      explanation: "AWS WAF (A) lets you monitor web requests and block specific IP ranges, while Network ACLs (E) act as firewalls at the subnet level."
    },
    {
      id: 27,
      text: "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
      options: [
        { id: "A", text: "Amazon EBS" },
        { id: "B", text: "Amazon EFS" },
        { id: "C", text: "Amazon S3" },
        { id: "D", text: "AWS Artifact" }
      ],
      correctAnswer: "B",
      explanation: "Amazon EFS provides scalable file storage that can be accessed concurrently by multiple EC2 instances."
    },
    {
      id: 28,
      text: "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose two.)",
      options: [
        { id: "A", text: "Running a virus scan on EC2 instances" },
        { id: "B", text: "Protecting against IP spoofing and packet sniffing" },
        { id: "C", text: "Installing the latest security patches on the RDS instance" },
        { id: "D", text: "Encrypting communication between the EC2 instances and the Elastic Load Balancer" },
        { id: "E", text: "Configuring a security group and a network access control list (NACL) for EC2" }
      ],
      correctAnswer: "B,C",
      explanation: "AWS handles network security (B) and patching for managed services like RDS (C)."
    },
    {
      id: 29,
      text: "What is the benefit of elasticity in the AWS Cloud?",
      options: [
        { id: "A", text: "Ensure web traffic is automatically spread across multiple AWS Regions." },
        { id: "B", text: "Minimize storage costs by automatically archiving log data." },
        { id: "C", text: "Enable AWS to automatically select the most cost-effective services." },
        { id: "D", text: "Automatically adjust the required compute capacity to maintain consistent performance." }
      ],
      correctAnswer: "D",
      explanation: "Elasticity allows automatic adjustment of resources to maintain performance as demand changes."
    },
    {
      id: 30,
      text: "The continual reduction of AWS Cloud pricing is due to:",
      options: [
        { id: "A", text: "pay-as-you go pricing" },
        { id: "B", text: "the AWS global infrastructure" },
        { id: "C", text: "economies of scale" },
        { id: "D", text: "reserved storage pricing" }
      ],
      correctAnswer: "C",
      explanation: "AWS passes on savings from economies of scale to customers through lower prices as their customer base grows."
    },
    {
      id: 31,
      text: "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
      options: [
        { id: "A", text: "Enable S3 Block Public Access from the AWS Management Console." },
        { id: "B", text: "Hold a team meeting to discuss the importance if only uploading private S3 objects." },
        { id: "C", text: "Require all S3 objects to be manually approved before uploading." },
        { id: "D", text: "Create a service to monitor all S3 uploads and remove any public uploads." }
      ],
      correctAnswer: "A",
      explanation: "S3 Block Public Access prevents public access to objects regardless of bucket policies or object permissions."
    },
    {
      id: 32,
      text: "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
      options: [
        { id: "A", text: "Open a detailed case related to billing and submit it to AWS Support for help." },
        { id: "B", text: "Upload data describing the issue to a new object in a private Amazon S3 bucket." },
        { id: "C", text: "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information." },
        { id: "D", text: "Proceed with creating a new dashboard in Amazon QuickSight." }
      ],
      correctAnswer: "A",
      explanation: "AWS Support can help resolve billing issues when contacted through the support portal."
    },
    {
      id: 33,
      text: "What does the AWS Simple Monthly Calculator do?",
      options: [
        { id: "A", text: "Compares on-premises costs to colocation environments" },
        { id: "B", text: "Estimates monthly billing based on projected usage" },
        { id: "C", text: "Estimates power consumption at existing data centers" },
        { id: "D", text: "Estimates CPU utilization" }
      ],
      correctAnswer: "B",
      explanation: "The AWS Simple Monthly Calculator helps estimate monthly AWS costs based on projected service usage."
    },
    {
      id: 34,
      text: "Who is responsible for patching the guest operating system for Amazon RDS?",
      options: [
        { id: "A", text: "The AWS Product team" },
        { id: "B", text: "The customer Database Administrator" },
        { id: "C", text: "Managed partners" },
        { id: "D", text: "AWS Support" }
      ],
      correctAnswer: "A",
      explanation: "For Amazon RDS, AWS handles operating system patching as part of the managed database service."
    },
    {
      id: 35,
      text: "Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
      options: [
        { id: "A", text: "Amazon EC2" },
        { id: "B", text: "Amazon DynamoDB" },
        { id: "C", text: "Amazon S3" },
        { id: "D", text: "Amazon Route 53" },
        { id: "E", text: "Amazon Redshift" }
      ],
      correctAnswer: "A,B",
      explanation: "AWS Auto Scaling can adjust capacity for EC2 instances (A) and DynamoDB tables (B) based on demand."
    },
    {
      id: 36,
      text: "Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
      options: [
        { id: "A", text: "Reduced cost to run services on AWS" },
        { id: "B", text: "Improved availability of applications deployed on AWS" },
        { id: "C", text: "Higher durability of data stored on AWS" },
        { id: "D", text: "Decreased latency to reach applications deployed on AWS" },
        { id: "E", text: "Higher security of data stored on AWS" }
      ],
      correctAnswer: "B,D",
      explanation: "AWS Global Accelerator improves application availability (B) and reduces latency (D) by routing traffic through the AWS global network."
    },
    {
      id: 37,
      text: "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
      options: [
        { id: "A", text: "the AWS Support forum" },
        { id: "B", text: "AWS Abuse" },
        { id: "C", text: "an AWS Solutions Architect" },
        { id: "D", text: "AWS Support" }
      ],
      correctAnswer: "D",
      explanation: "AWS Support handles account and billing inquiries, including account reactivation."
    },
    {
      id: 38,
      text: "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
      options: [
        { id: "A", text: "Provision capacity based on past usage and theoretical peaks" },
        { id: "B", text: "Dynamically and predictively scale to meet usage demands" },
        { id: "C", text: "Build the application and infrastructure in a data center that grants physical access" },
        { id: "D", text: "Break apart the application into loosely coupled components" }
      ],
      correctAnswer: "B",
      explanation: "Dynamically scaling resources based on demand leverages the cloud's elasticity to optimize performance and cost."
    },
    {
      id: 39,
      text: "Which method helps to optimize costs of users moving to the AWS Cloud?",
      options: [
        { id: "A", text: "Paying only for what is used" },
        { id: "B", text: "Purchasing hardware before it is needed" },
        { id: "C", text: "Manually provisioning cloud resources" },
        { id: "D", text: "Purchasing for the maximum possible load" }
      ],
      correctAnswer: "A",
      explanation: "The pay-as-you-go model allows customers to pay only for the resources they actually use, optimizing costs."
    },
    {
      id: 40,
      text: "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
      options: [
        { id: "A", text: "Installing security patches for the Xen and KVM hypervisors" },
        { id: "B", text: "Installing operating system patches for Amazon DynamoDB" },
        { id: "C", text: "Installing operating system security patches for Amazon EC2 database instances" },
        { id: "D", text: "Installing operating system security patches for Amazon RDS database instances" }
      ],
      correctAnswer: "C",
      explanation: "Customers are responsible for patching the operating systems on EC2 instances, while AWS handles patching for managed services like RDS and DynamoDB."
    },
    {
      id: 41,
      text: "The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
      options: [
        { id: "A", text: "Terminate all AWS resources automatically if budget thresholds are exceeded." },
        { id: "B", text: "Break down AWS costs by day, service, and linked AWS account." },
        { id: "C", text: "Create budgets and receive notifications if current of forecasted usage exceeds the budgets." },
        { id: "D", text: "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective." },
        { id: "E", text: "Move data stored in Amazon S3 to a more cost-effective storage class." }
      ],
      correctAnswer: "B,C",
      explanation: "AWS Cost Management tools let you analyze costs by various dimensions (B) and set up budgets with notifications (C)."
    },
    {
      id: 42,
      text: "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
      options: [
        { id: "A", text: "AWS Support" },
        { id: "B", text: "the customer" },
        { id: "C", text: "AWS Systems Manager" },
        { id: "D", text: "AWS Config" }
      ],
      correctAnswer: "B",
      explanation: "Customers are responsible for security 'in' the cloud, including guest operating system patching."
    },
    {
      id: 43,
      text: "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
      options: [
        { id: "A", text: "AWS Direct Connect" },
        { id: "B", text: "Amazon Connect" },
        { id: "C", text: "AWS Identity and Access Management (IAM)" },
        { id: "D", text: "AWS Firewall Manager" }
      ],
      correctAnswer: "C",
      explanation: "AWS IAM enables you to securely control access to AWS services and resources at no additional charge."
    },
    {
      id: 44,
      text: "Which AWS service provides on-demand of AWS security and compliance documentation?",
      options: [
        { id: "A", text: "AWS Directory Service" },
        { id: "B", text: "AWS Artifact" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "B",
      explanation: "AWS Artifact provides on-demand access to AWS security and compliance reports and select online agreements."
    },
    {
      id: 45,
      text: "Which AWS service can be used to turn text into life-like speech?",
      options: [
        { id: "A", text: "Amazon Polly" },
        { id: "B", text: "Amazon Transcribe" },
        { id: "C", text: "Amazon Rekognition" },
        { id: "D", text: "Amazon Lex" }
      ],
      correctAnswer: "A",
      explanation: "Amazon Polly is a service that turns text into lifelike speech, allowing applications to talk naturally."
    },
    {
      id: 46,
      text: "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
      options: [
        { id: "A", text: "Design using a serverless architecture" },
        { id: "B", text: "Assume that all components within an application can fail" },
        { id: "C", text: "Design AWS Auto Scaling into every application" },
        { id: "D", text: "Design all components using open-source code" }
      ],
      correctAnswer: "B",
      explanation: "Designing for failure by assuming all components can fail is a core principle of high availability in the cloud."
    },
    {
      id: 47,
      text: "A user needs to generate a report that outlines the status of key security checks in an AWS account including Amazon S3 bucket permissions, MFA status for the root user, and security group configurations. Where can all this information be found in one location?",
      options: [
        { id: "A", text: "Amazon QuickSight dashboard" },
        { id: "B", text: "AWS CloudTrail trails" },
        { id: "C", text: "AWS Trusted Advisor report" },
        { id: "D", text: "IAM credential report" }
      ],
      correctAnswer: "C",
      explanation: "AWS Trusted Advisor provides recommendations across multiple categories including security status checks."
    },
    {
      id: 48,
      text: "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
      options: [
        { id: "A", text: "Dedicated Hosts" },
        { id: "B", text: "On-Demand Instances" },
        { id: "C", text: "Spot Instances" },
        { id: "D", text: "Reserved Instances" }
      ],
      correctAnswer: "A",
      explanation: "EC2 Dedicated Hosts provide visibility of the underlying physical cores for software licensing purposes."
    },
    {
      id: 49,
      text: "Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
      options: [
        { id: "A", text: "AWS Regions" },
        { id: "B", text: "Availability Zones" },
        { id: "C", text: "Edge locations" },
        { id: "D", text: "Data centers" }
      ],
      correctAnswer: "C",
      explanation: "Edge locations are used by services like CloudFront to cache content closer to end users for faster delivery."
    },
    {
      id: 50,
      text: "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
      options: [
        { id: "A", text: "Security" },
        { id: "B", text: "Operational excellence" },
        { id: "C", text: "Performance efficiency" },
        { id: "D", text: "Cost optimization" }
      ],
      correctAnswer: "A",
      explanation: "Security is the pillar that focuses on protecting information and systems, including tracking configuration changes."
    }
  ]
};
export const awsCloudPractitionerQuiz4: Quiz = {
  id: "aws-ccp-4",
  title: "AWS Certified Cloud Practitioner - Practice Exam 4",
  description: "Practice Exam 4 - Test your knowledge of AWS Cloud concepts, services, and the AWS global infrastructure.",
  timeLimit: 90,
  questions: [
    {
      id: 1,
      text: "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
      options: [
        { id: "A", text: "Amazon Route 53." },
        { id: "B", text: "AWS ACM." },
        { id: "C", text: "AWS Directory Service." },
        { id: "D", text: "AWS Identity & Access Management." },
        { id: "E", text: "AWS Data Pipeline." }
      ],
      correctAnswer: "A,B",
      explanation: "AWS Certificate Manager (ACM) and Amazon Route 53 are used to deploy SSL certificates."
    },
    {
      id: 2,
      text: "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
      options: [
        { id: "A", text: "Amazon EC2." },
        { id: "B", text: "Amazon S3." },
        { id: "C", text: "AWS Lambda." },
        { id: "D", text: "Amazon EMR." },
        { id: "E", text: "Amazon EBS." }
      ],
      correctAnswer: "B,C",
      explanation: "Amazon S3 and AWS Lambda scale automatically."
    },
    {
      id: 3,
      text: "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
      options: [
        { id: "A", text: "Application management." },
        { id: "B", text: "Capacity management." },
        { id: "C", text: "Access control." },
        { id: "D", text: "Operating system maintenance." },
        { id: "E", text: "Data management." }
      ],
      correctAnswer: "B,D",
      explanation: "AWS manages capacity and OS maintenance for Lambda."
    },
    {
      id: 4,
      text: "How do ELBs improve the reliability of your application?",
      options: [
        { id: "A", text: "By distributing traffic across multiple S3 buckets." },
        { id: "B", text: "By replicating data to multiple availability zones." },
        { id: "C", text: "By creating database Read Replicas." },
        { id: "D", text: "By ensuring that only healthy targets receive traffic." }
      ],
      correctAnswer: "D",
      explanation: "ELB only routes traffic to healthy targets, improving reliability."
    },
    {
      id: 5,
      text: "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
      options: [
        { id: "A", text: "On-demand instances." },
        { id: "B", text: "Spot instances." },
        { id: "C", text: "Dedicated instances." },
        { id: "D", text: "Reserved instances." }
      ],
      correctAnswer: "C",
      explanation: "Dedicated instances run on hardware not shared with other customers."
    },
    {
      id: 6,
      text: "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
      options: [
        { id: "A", text: "Snowball." },
        { id: "B", text: "S3 Transfer Acceleration." },
        { id: "C", text: "Snowmobile." },
        { id: "D", text: "Amazon VPC." }
      ],
      correctAnswer: "C",
      explanation: "Snowmobile is designed for exabyte-scale data transfer."
    },
    {
      id: 7,
      text: "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
      options: [
        { id: "A", text: "Amazon S3 Glacier." },
        { id: "B", text: "Amazon EFS." },
        { id: "C", text: "Amazon S3 Standard." },
        { id: "D", text: "Amazon EBS." }
      ],
      correctAnswer: "A",
      explanation: "S3 Glacier is designed for long-term, infrequently accessed data."
    },
    {
      id: 8,
      text: "Which AWS Service is used to manage user permissions?",
      options: [
        { id: "A", text: "Security Groups." },
        { id: "B", text: "Amazon ECS." },
        { id: "C", text: "AWS IAM." },
        { id: "D", text: "AWS Support." }
      ],
      correctAnswer: "C",
      explanation: "AWS IAM manages user permissions."
    },
    {
      id: 9,
      text: "Which AWS service allows you to run code without provisioning or managing servers?",
      options: [
        { id: "A", text: "Amazon EC2." },
        { id: "B", text: "AWS Lambda." },
        { id: "C", text: "Amazon S3." },
        { id: "D", text: "Amazon EBS." }
      ],
      correctAnswer: "B",
      explanation: "AWS Lambda is a serverless compute service."
    },
    {
      id: 10,
      text: "Which AWS service is specifically designed to help you migrate databases to AWS easily and securely?",
      options: [
        { id: "A", text: "AWS Database Migration Service (DMS)." },
        { id: "B", text: "AWS Data Pipeline." },
        { id: "C", text: "AWS Glue." },
        { id: "D", text: "AWS CloudFormation." }
      ],
      correctAnswer: "A",
      explanation: "AWS DMS is designed for database migration."
    },
    {
      id: 11,
      text: "Which AWS service provides a fully managed NoSQL database?",
      options: [
        { id: "A", text: "Amazon RDS." },
        { id: "B", text: "Amazon DynamoDB." },
        { id: "C", text: "Amazon Redshift." },
        { id: "D", text: "Amazon Aurora." }
      ],
      correctAnswer: "B",
      explanation: "DynamoDB is AWS's managed NoSQL database service."
    },
    {
      id: 12,
      text: "Which of the following AWS services allows you to run containerized applications?",
      options: [
        { id: "A", text: "Amazon ECS." },
        { id: "B", text: "Amazon S3." },
        { id: "C", text: "AWS Lambda." },
        { id: "D", text: "Amazon RDS." }
      ],
      correctAnswer: "A",
      explanation: "ECS is AWS's managed container orchestration service."
    },
    {
      id: 13,
      text: "Which AWS service automatically distributes incoming application traffic across multiple targets?",
      options: [
        { id: "A", text: "Amazon CloudFront." },
        { id: "B", text: "AWS ELB." },
        { id: "C", text: "Amazon Route 53." },
        { id: "D", text: "AWS Auto Scaling." }
      ],
      correctAnswer: "B",
      explanation: "ELB (Elastic Load Balancer) distributes traffic across targets."
    },
    {
      id: 14,
      text: "Which AWS service is used for object storage?",
      options: [
        { id: "A", text: "Amazon EBS." },
        { id: "B", text: "Amazon EFS." },
        { id: "C", text: "Amazon S3." },
        { id: "D", text: "Amazon RDS." }
      ],
      correctAnswer: "C",
      explanation: "S3 is AWS's object storage service."
    },
    {
      id: 15,
      text: "Which AWS service enables you to decouple microservices, distributed systems, and serverless applications?",
      options: [
        { id: "A", text: "Amazon SQS." },
        { id: "B", text: "Amazon RDS." },
        { id: "C", text: "Amazon EBS." },
        { id: "D", text: "Amazon EC2." }
      ],
      correctAnswer: "A",
      explanation: "SQS (Simple Queue Service) is used for decoupling components."
    },
    {
      id: 16,
      text: "Which AWS service is used for content delivery and caching?",
      options: [
        { id: "A", text: "Amazon Route 53." },
        { id: "B", text: "Amazon CloudFront." },
        { id: "C", text: "Amazon S3." },
        { id: "D", text: "AWS Lambda." }
      ],
      correctAnswer: "B",
      explanation: "CloudFront is AWS's content delivery network (CDN)."
    },
    {
      id: 17,
      text: "Which AWS service helps you monitor AWS resources and applications in real time?",
      options: [
        { id: "A", text: "AWS CloudTrail." },
        { id: "B", text: "Amazon CloudWatch." },
        { id: "C", text: "AWS Inspector." },
        { id: "D", text: "AWS Lambda." }
      ],
      correctAnswer: "B",
      explanation: "Amazon CloudWatch monitors resources and applications."
    },
    {
      id: 18,
      text: "Which AWS service is used for managing infrastructure as code?",
      options: [
        { id: "A", text: "AWS CloudFormation." },
        { id: "B", text: "Amazon EC2." },
        { id: "C", text: "AWS Glue." },
        { id: "D", text: "Amazon EMR." }
      ],
      correctAnswer: "A",
      explanation: "CloudFormation manages infrastructure as code."
    },
    {
      id: 19,
      text: "Which AWS service helps you analyze and visualize data?",
      options: [
        { id: "A", text: "Amazon Redshift." },
        { id: "B", text: "Amazon Athena." },
        { id: "C", text: "Amazon QuickSight." },
        { id: "D", text: "Amazon Glue." }
      ],
      correctAnswer: "C",
      explanation: "QuickSight is AWS's data visualization service."
    },
    {
      id: 20,
      text: "Which AWS service enables you to register a domain name?",
      options: [
        { id: "A", text: "Amazon CloudFront." },
        { id: "B", text: "Amazon Route 53." },
        { id: "C", text: "Amazon S3." },
        { id: "D", text: "AWS Lambda." }
      ],
      correctAnswer: "B",
      explanation: "Route 53 allows domain registration."
    },
    {
      id: 21,
      text: "Which AWS service is used to run Microsoft Windows applications in the cloud?",
      options: [
        { id: "A", text: "Amazon EC2." },
        { id: "B", text: "Amazon S3." },
        { id: "C", text: "Amazon RDS." },
        { id: "D", text: "AWS Lambda." }
      ],
      correctAnswer: "A",
      explanation: "EC2 can run Microsoft Windows server instances."
    },
    {
      id: 22,
      text: "Which AWS service helps you automate software deployments to a variety of compute services like Amazon EC2, AWS Lambda, and instances running on-premises?",
      options: [
        { id: "A", text: "AWS CodePipeline." },
        { id: "B", text: "AWS CodeDeploy." },
        { id: "C", text: "AWS CodeBuild." },
        { id: "D", text: "AWS CodeCommit." }
      ],
      correctAnswer: "B",
      explanation: "AWS CodeDeploy automates software deployments."
    },
    {
      id: 23,
      text: "Which AWS service enables you to track user activity and API usage?",
      options: [
        { id: "A", text: "AWS CloudTrail." },
        { id: "B", text: "Amazon CloudWatch." },
        { id: "C", text: "AWS Inspector." },
        { id: "D", text: "AWS Glue." }
      ],
      correctAnswer: "A",
      explanation: "CloudTrail tracks user activity and API usage."
    },
    {
      id: 24,
      text: "Which AWS service is designed to simplify setting up, operating, and scaling a relational database in the cloud?",
      options: [
        { id: "A", text: "Amazon RDS." },
        { id: "B", text: "Amazon DynamoDB." },
        { id: "C", text: "Amazon Redshift." },
        { id: "D", text: "Amazon S3." }
      ],
      correctAnswer: "A",
      explanation: "RDS is AWS's managed relational database service."
    },
    {
      id: 25,
      text: "Which AWS service is used to run queries on data stored in S3 using standard SQL?",
      options: [
        { id: "A", text: "Amazon Redshift." },
        { id: "B", text: "Amazon Athena." },
        { id: "C", text: "Amazon EMR." },
        { id: "D", text: "Amazon Kinesis." }
      ],
      correctAnswer: "B",
      explanation: "Athena lets you run SQL queries on S3 data."
    },
    {
      id: 26,
      text: "Which AWS service helps you protect your web applications from common web exploits?",
      options: [
        { id: "A", text: "AWS Shield." },
        { id: "B", text: "AWS Firewall Manager." },
        { id: "C", text: "AWS WAF." },
        { id: "D", text: "Amazon GuardDuty." }
      ],
      correctAnswer: "C",
      explanation: "AWS WAF is a web application firewall."
    },
    {
      id: 27,
      text: "Which AWS service provides a scalable file storage solution for use with Amazon EC2?",
      options: [
        { id: "A", text: "Amazon S3." },
        { id: "B", text: "Amazon EFS." },
        { id: "C", text: "Amazon Glacier." },
        { id: "D", text: "Amazon RDS." }
      ],
      correctAnswer: "B",
      explanation: "Amazon Elastic File System (EFS) is scalable file storage for EC2."
    },
    {
      id: 28,
      text: "Which AWS service is a managed distributed database that supports document and key-value store models?",
      options: [
        { id: "A", text: "Amazon RDS." },
        { id: "B", text: "Amazon DynamoDB." },
        { id: "C", text: "Amazon Redshift." },
        { id: "D", text: "Amazon ElastiCache." }
      ],
      correctAnswer: "B",
      explanation: "DynamoDB supports document and key-value models."
    },
    {
      id: 29,
      text: "Which AWS service can be used to automate the provisioning of AWS resources?",
      options: [
        { id: "A", text: "Amazon CloudWatch." },
        { id: "B", text: "AWS CloudFormation." },
        { id: "C", text: "Amazon S3." },
        { id: "D", text: "AWS Lambda." }
      ],
      correctAnswer: "B",
      explanation: "CloudFormation automates AWS resource provisioning."
    },
    {
      id: 30,
      text: "Which AWS service provides a fully managed extract, transform, and load (ETL) service?",
      options: [
        { id: "A", text: "AWS Glue." },
        { id: "B", text: "Amazon Athena." },
        { id: "C", text: "Amazon EMR." },
        { id: "D", text: "Amazon Redshift." }
      ],
      correctAnswer: "A",
      explanation: "AWS Glue is a managed ETL service."
    },
    {
      id: 31,
      text: "Which service lets you easily provision a variety of AWS resources, such as EC2 instances, RDS databases, and S3 buckets, using a web-based interface?",
      options: [
        { id: "A", text: "AWS Management Console." },
        { id: "B", text: "AWS CLI." },
        { id: "C", text: "AWS CloudFormation." },
        { id: "D", text: "AWS SDK." }
      ],
      correctAnswer: "A",
      explanation: "AWS Management Console is the web-based UI for resource provisioning."
    },
    {
      id: 32,
      text: "Which AWS service helps you identify security vulnerabilities in your AWS environment?",
      options: [
        { id: "A", text: "AWS Shield." },
        { id: "B", text: "Amazon Inspector." },
        { id: "C", text: "AWS WAF." },
        { id: "D", text: "AWS CloudTrail." }
      ],
      correctAnswer: "B",
      explanation: "Amazon Inspector scans for security vulnerabilities."
    },
    {
      id: 33,
      text: "Which AWS service is used to send notifications to subscribers?",
      options: [
        { id: "A", text: "Amazon SQS." },
        { id: "B", text: "Amazon SNS." },
        { id: "C", text: "AWS Lambda." },
        { id: "D", text: "Amazon EC2." }
      ],
      correctAnswer: "B",
      explanation: "SNS (Simple Notification Service) sends notifications to subscribers."
    },
    {
      id: 34,
      text: "What AWS service would you use to store and retrieve any amount of data at any time from anywhere on the web?",
      options: [
        { id: "A", text: "Amazon EFS." },
        { id: "B", text: "Amazon EBS." },
        { id: "C", text: "Amazon S3." },
        { id: "D", text: "Amazon RDS." }
      ],
      correctAnswer: "C",
      explanation: "S3 is designed for object storage and retrieval from anywhere."
    },
    {
      id: 35,
      text: "Which AWS service is designed to help you migrate large amounts of data into AWS using physical devices?",
      options: [
        { id: "A", text: "AWS Snowball." },
        { id: "B", text: "AWS DataSync." },
        { id: "C", text: "AWS DMS." },
        { id: "D", text: "AWS Glue." }
      ],
      correctAnswer: "A",
      explanation: "AWS Snowball uses physical devices for data transfer."
    },
    {
      id: 36,
      text: "Which AWS service is used to securely store and manage customer secrets such as database credentials and API keys?",
      options: [
        { id: "A", text: "AWS KMS." },
        { id: "B", text: "AWS Secrets Manager." },
        { id: "C", text: "Amazon CloudHSM." },
        { id: "D", text: "AWS IAM." }
      ],
      correctAnswer: "B",
      explanation: "Secrets Manager manages sensitive secrets."
    },
    {
      id: 37,
      text: "Which AWS service helps you monitor and manage your billing and usage?",
      options: [
        { id: "A", text: "AWS Budgets." },
        { id: "B", text: "AWS Cost Explorer." },
        { id: "C", text: "AWS CloudTrail." },
        { id: "D", text: "AWS Config." }
      ],
      correctAnswer: "B",
      explanation: "AWS Cost Explorer monitors billing and usage."
    },
    {
      id: 38,
      text: "Which AWS service enables you to establish a dedicated network connection from your premises to AWS?",
      options: [
        { id: "A", text: "AWS VPN." },
        { id: "B", text: "AWS Direct Connect." },
        { id: "C", text: "Amazon VPC." },
        { id: "D", text: "AWS Transit Gateway." }
      ],
      correctAnswer: "B",
      explanation: "Direct Connect establishes a dedicated network connection."
    },
    {
      id: 39,
      text: "Which AWS service provides a managed Hadoop framework to process vast amounts of data?",
      options: [
        { id: "A", text: "Amazon EMR." },
        { id: "B", text: "Amazon Athena." },
        { id: "C", text: "Amazon Redshift." },
        { id: "D", text: "AWS Glue." }
      ],
      correctAnswer: "A",
      explanation: "EMR is a managed Hadoop framework."
    },
    {
      id: 40,
      text: "Which AWS service would you use for serverless event-driven code execution?",
      options: [
        { id: "A", text: "Amazon EC2." },
        { id: "B", text: "AWS Lambda." },
        { id: "C", text: "Amazon ECS." },
        { id: "D", text: "AWS Batch." }
      ],
      correctAnswer: "B",
      explanation: "Lambda is for serverless event-driven code."
    },
    {
      id: 41,
      text: "Which AWS service allows you to easily provision, manage, and scale clusters of Elasticsearch?",
      options: [
        { id: "A", text: "Amazon Kinesis." },
        { id: "B", text: "Amazon Elasticsearch Service." },
        { id: "C", text: "Amazon EMR." },
        { id: "D", text: "Amazon Redshift." }
      ],
      correctAnswer: "B",
      explanation: "Amazon Elasticsearch Service provisions and manages Elasticsearch clusters."
    },
    {
      id: 42,
      text: "Which AWS service provides a managed message broker service for Apache ActiveMQ?",
      options: [
        { id: "A", text: "Amazon MQ." },
        { id: "B", text: "Amazon SQS." },
        { id: "C", text: "Amazon SNS." },
        { id: "D", text: "Amazon Kinesis." }
      ],
      correctAnswer: "A",
      explanation: "Amazon MQ is a managed message broker for ActiveMQ."
    },
    {
      id: 43,
      text: "Which AWS service helps you centralize and manage AWS accounts across your organization?",
      options: [
        { id: "A", text: "AWS IAM." },
        { id: "B", text: "AWS Organizations." },
        { id: "C", text: "AWS Directory Service." },
        { id: "D", text: "AWS Control Tower." }
      ],
      correctAnswer: "B",
      explanation: "AWS Organizations manages multiple AWS accounts."
    },
    {
      id: 44,
      text: "Which AWS service allows you to analyze VPC flow logs, CloudTrail logs, and other logs using SQL queries?",
      options: [
        { id: "A", text: "Amazon Athena." },
        { id: "B", text: "Amazon Redshift." },
        { id: "C", text: "Amazon QuickSight." },
        { id: "D", text: "AWS Glue." }
      ],
      correctAnswer: "A",
      explanation: "Athena lets you analyze logs using SQL queries."
    },
    {
      id: 45,
      text: "Which AWS service provides a way to set alarms and automate actions based on metrics?",
      options: [
        { id: "A", text: "Amazon CloudWatch." },
        { id: "B", text: "AWS CloudTrail." },
        { id: "C", text: "AWS Config." },
        { id: "D", text: "AWS Lambda." }
      ],
      correctAnswer: "A",
      explanation: "CloudWatch can set alarms and automate actions."
    },
    {
      id: 46,
      text: "Which AWS service provides automated security assessment of applications deployed on AWS?",
      options: [
        { id: "A", text: "AWS Shield." },
        { id: "B", text: "Amazon Inspector." },
        { id: "C", text: "AWS WAF." },
        { id: "D", text: "AWS CloudTrail." }
      ],
      correctAnswer: "B",
      explanation: "Inspector performs automated security assessments."
    },
    {
      id: 47,
      text: "Which AWS service allows you to quickly deploy and manage applications in the AWS Cloud without worrying about the underlying infrastructure?",
      options: [
        { id: "A", text: "AWS Lambda." },
        { id: "B", text: "AWS Elastic Beanstalk." },
        { id: "C", text: "Amazon ECS." },
        { id: "D", text: "Amazon EC2." }
      ],
      correctAnswer: "B",
      explanation: "Elastic Beanstalk manages deployment and infrastructure."
    },
    {
      id: 48,
      text: "Which AWS service is designed to help you implement multi-factor authentication (MFA)?",
      options: [
        { id: "A", text: "AWS CloudTrail." },
        { id: "B", text: "AWS IAM." },
        { id: "C", text: "AWS Config." },
        { id: "D", text: "AWS KMS." }
      ],
      correctAnswer: "B",
      explanation: "IAM allows you to implement MFA."
    },
    {
      id: 49,
      text: "Which AWS service lets you run SQL queries across data stored in relational, non-relational, object, and custom data sources?",
      options: [
        { id: "A", text: "Amazon Athena." },
        { id: "B", text: "Amazon Redshift." },
        { id: "C", text: "Amazon QuickSight." },
        { id: "D", text: "AWS Glue." }
      ],
      correctAnswer: "C",
      explanation: "QuickSight can query multiple data sources."
    },
    {
      id: 50,
      text: "Which AWS service enables you to automate the creation, deployment, and management of resources using templates?",
      options: [
        { id: "A", text: "AWS CloudFormation." },
        { id: "B", text: "AWS CodeDeploy." },
        { id: "C", text: "AWS Elastic Beanstalk." },
        { id: "D", text: "AWS OpsWorks." }
      ],
      correctAnswer: "A",
      explanation: "CloudFormation automates resource management with templates."
    }
  ]
};

export const awsCloudPractitionerQuiz5: Quiz = {
  id: "practice-exam-5",
  title: "Practice Exam 5",
  description: "Practice Exam 5 - Test your knowledge of AWS Cloud concepts, services, and the AWS global infrastructure.",
  timeLimit: 90,
  questions: [
    {
      id: 1,
      text: "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
      options: [
        { id: "A", text: "Least Privilege." },
        { id: "B", text: "Pilot Light." },
        { id: "C", text: "Fault Tolerance." },
        { id: "D", text: "Multi-threading." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 2,
      text: "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
      options: [
        { id: "A", text: "All up-front reservation." },
        { id: "B", text: "All reserved instance payment options provide the same discount level." },
        { id: "C", text: "Partial up-front reservation." },
        { id: "D", text: "No up-front reservation." },
      ],
      correctAnswer: "A",
      explanation: "No explanation provided."
    },
    {
      id: 3,
      text: "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
      options: [
        { id: "A", text: "Access control." },
        { id: "B", text: "Physical MFA devices." },
        { id: "C", text: "Data encryption." },
        { id: "D", text: "Unlimited storage." },
        { id: "E", text: "Load balancing." },
      ],
      correctAnswer: "A,C",
      explanation: "No explanation provided."
    },
    {
      id: 4,
      text: "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
      options: [
        { id: "A", text: "3 hours for the Linux instance and 5 hours for the CentOS instance." },
        { id: "B", text: "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance." },
        { id: "C", text: "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance." },
        { id: "D", text: "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance." },
      ],
      correctAnswer: "C",
      explanation: "Explanation: - Pricing is per instance-hour consumed for each instance, from the time an instance is launched until it is terminated or stopped. - Each partial instance-hour consumed will be billed per-second for Linux, Windows, Windows with SQL Enterprise, Windows with SQL Standard, and Windows with SQL Web Instances, and as a full hour for all other instance types."
    },
    {
      id: 5,
      text: "What is the AWS Support feature that allows customers to manage support cases programmatically?",
      options: [
        { id: "A", text: "AWS Trusted Advisor." },
        { id: "B", text: "AWS Operations Support." },
        { id: "C", text: "AWS Support API." },
        { id: "D", text: "AWS Personal Health Dashboard." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 6,
      text: "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
      options: [
        { id: "A", text: "AWS CLI." },
        { id: "B", text: "AWS Security Groups." },
        { id: "C", text: "AWS SDKs." },
        { id: "D", text: "AWS Network Access Control Lists." },
        { id: "E", text: "AWS CodeCommit." },
      ],
      correctAnswer: "A,C",
      explanation: "No explanation provided."
    },
    {
      id: 7,
      text: "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
      options: [
        { id: "A", text: "AWS Resource Groups." },
        { id: "B", text: "IAM Policies." },
        { id: "C", text: "IAM Roles." },
        { id: "D", text: "IAM Users." },
        { id: "E", text: "AWS Organizations." },
      ],
      correctAnswer: "C,D",
      explanation: "No explanation provided."
    },
    {
      id: 8,
      text: "Which of the following Amazon RDS features facilitates offloading of database read activity?",
      options: [
        { id: "A", text: "Database Snapshots." },
        { id: "B", text: "Multi-AZ Deployments." },
        { id: "C", text: "Automated Backups." },
        { id: "D", text: "Read Replicas." },
      ],
      correctAnswer: "D",
      explanation: "No explanation provided."
    },
    {
      id: 9,
      text: "How does AWS notify customers about security and privacy events pertaining to AWS services?",
      options: [
        { id: "A", text: "Using the AWS ACM service." },
        { id: "B", text: "Using Security Bulletins." },
        { id: "C", text: "Using the AWS Management Console." },
        { id: "D", text: "Using Compliance Resources." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 10,
      text: "Which IAM entity can best be used to grant temporary access to your AWS resources?",
      options: [
        { id: "A", text: "IAM Users." },
        { id: "B", text: "Key Pair." },
        { id: "C", text: "IAM Roles." },
        { id: "D", text: "IAM Groups." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 11,
      text: "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
      options: [
        { id: "A", text: "AWS Global Accelerator." },
        { id: "B", text: "AWS Application Load Balancer (ALB)." },
        { id: "C", text: "Amazon CloudFront." },
        { id: "D", text: "Transit VPC." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 12,
      text: "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
      options: [
        { id: "A", text: "Use Software test automation tools." },
        { id: "B", text: "Use AWS CodeDeploy to build and automate your AWS environment." },
        { id: "C", text: "Use code to provision and operate your AWS infrastructure." },
        { id: "D", text: "Migrate all of your applications to a dedicated host." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 13,
      text: "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
      options: [
        { id: "A", text: "Restrict any API call made through SDKs or CLI." },
        { id: "B", text: "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department." },
        { id: "C", text: "Require Multi-Factor Authentication (MFA) for all IAM User access." },
        { id: "D", text: "Set up two login passwords." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 14,
      text: "Which AWS Service offers volume discounts based on usage?",
      options: [
        { id: "A", text: "Amazon VPC." },
        { id: "B", text: "Amazon S3." },
        { id: "C", text: "Amazon Lightsail." },
        { id: "D", text: "AWS Cost Explorer." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 15,
      text: "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
      options: [
        { id: "A", text: "The AWS Region’s security level." },
        { id: "B", text: "Data sovereignty." },
        { id: "C", text: "Cost." },
        { id: "D", text: "The planned number of VPCs." },
        { id: "E", text: "Geographic proximity to the company's location." },
      ],
      correctAnswer: "B,C",
      explanation: "No explanation provided."
    },
    {
      id: 16,
      text: "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
      options: [
        { id: "A", text: "Amazon EFS." },
        { id: "B", text: "Amazon Neptune." },
        { id: "C", text: "Amazon ElastiCache." },
        { id: "D", text: "DAX." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 17,
      text: "What are the advantages of using Auto Scaling Groups for EC2 instances?",
      options: [
        { id: "A", text: "Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance." },
        { id: "B", text: "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance." },
        { id: "C", text: "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users." },
        { id: "D", text: "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 18,
      text: "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
      options: [
        { id: "A", text: "AWS helps customers invest more in capital expenditures." },
        { id: "B", text: "AWS automates all infrastructure operations, so customers save more on human resources costs." },
        { id: "C", text: "AWS continues to lower the cost of cloud computing for its customers." },
        { id: "D", text: "AWS secures AWS resources at no additional charge." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 19,
      text: "Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)",
      options: [
        { id: "A", text: "Building a schema for an application." },
        { id: "B", text: "Replacing physical hardware." },
        { id: "C", text: "Creating a new hypervisor." },
        { id: "D", text: "Patch management of the underlying infrastructure." },
        { id: "E", text: "File system encryption." },
      ],
      correctAnswer: "A,E",
      explanation: "No explanation provided."
    },
    {
      id: 20,
      text: "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
      options: [
        { id: "A", text: "AWS CloudHSM." },
        { id: "B", text: "U2F Security Key." },
        { id: "C", text: "AWS Access Keys." },
        { id: "D", text: "AWS Key Pair." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 21,
      text: "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
      options: [
        { id: "A", text: "Amazon SNS." },
        { id: "B", text: "AWS Elastic Beanstalk." },
        { id: "C", text: "AWS Systems Manager." },
        { id: "D", text: "AWS Trusted Advisor." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 22,
      text: "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
      options: [
        { id: "A", text: "The amount of time the instances will be running." },
        { id: "B", text: "Number of security groups." },
        { id: "C", text: "Allocated Elastic IP Addresses." },
        { id: "D", text: "Number of Hosted Zones." },
        { id: "E", text: "Number of instances." },
      ],
      correctAnswer: "B,D",
      explanation: "No explanation provided."
    },
    {
      id: 23,
      text: "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
      options: [
        { id: "A", text: "AWS Data Pipeline." },
        { id: "B", text: "AWS Storage Gateway." },
        { id: "C", text: "Amazon Aurora." },
        { id: "D", text: "Amazon EFS." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 24,
      text: "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
      options: [
        { id: "A", text: "Amazon Simple Storage Service." },
        { id: "B", text: "Amazon Elastic Block Store." },
        { id: "C", text: "Amazon Elastic Container Service." },
        { id: "D", text: "AWS Storage Gateway." },
      ],
      correctAnswer: "A",
      explanation: "No explanation provided."
    },
    {
      id: 25,
      text: "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
      options: [
        { id: "A", text: "EBS and S3 are accessible only to the root account owner." },
        { id: "B", text: "The systems administrator must contact AWS Support first to activate his new IAM account." },
        { id: "C", text: "There is not enough space in S3 to store the snapshots." },
        { id: "D", text: "There is a non-explicit deny to all new users." },
      ],
      correctAnswer: "D",
      explanation: "No explanation provided."
    },
    {
      id: 26,
      text: "An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?",
      options: [
        { id: "A", text: "AWS CloudTrail." },
        { id: "B", text: "Amazon CloudFront." },
        { id: "C", text: "AWS CloudFormation." },
        { id: "D", text: "Amazon CloudWatch." },
      ],
      correctAnswer: "A",
      explanation: "No explanation provided."
    },
    {
      id: 27,
      text: "Which of the below options is true of Amazon Cloud Directory?",
      options: [
        { id: "A", text: "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions." },
        { id: "B", text: "Amazon Cloud Directory enables the analysis of video and data streams in real time." },
        { id: "C", text: "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials." },
        { id: "D", text: "Amazon Cloud Directory allows for registration and management of domain names." },
      ],
      correctAnswer: "A",
      explanation: "No explanation provided."
    },
    {
      id: 28,
      text: "A user has opened a \"Production System Down\" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
      options: [
        { id: "A", text: "12 hours." },
        { id: "B", text: "15 minutes." },
        { id: "C", text: "24 hours." },
        { id: "D", text: "One hour." },
      ],
      correctAnswer: "D",
      explanation: "No explanation provided."
    },
    {
      id: 29,
      text: "Which of the below options is a best practice for making your application on AWS highly available?",
      options: [
        { id: "A", text: "Deploy the application to at least two Availability Zones." },
        { id: "B", text: "Use Elastic Load Balancing (ELB) across multiple AWS Regions." },
        { id: "C", text: "Deploy the application code on at least two servers in the same Availability Zone." },
        { id: "D", text: "Rewrite the application code to handle all incoming requests." },
      ],
      correctAnswer: "A",
      explanation: "No explanation provided."
    },
    {
      id: 30,
      text: "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
      options: [
        { id: "A", text: "Labor and IT costs." },
        { id: "B", text: "Cooling and power consumption." },
        { id: "C", text: "Amazon EBS computing power." },
        { id: "D", text: "Software architecture." },
        { id: "E", text: "Software compatibility." },
      ],
      correctAnswer: "A,B",
      explanation: "No explanation provided."
    },
    {
      id: 31,
      text: "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
      options: [
        { id: "A", text: "AWS Basic Support." },
        { id: "B", text: "AWS Developer Support." },
        { id: "C", text: "AWS Business Support." },
        { id: "D", text: "AWS Enterprise Support." },
      ],
      correctAnswer: "D",
      explanation: "No explanation provided."
    },
    {
      id: 32,
      text: "Which of the following AWS offerings are serverless services? (Choose TWO)",
      options: [
        { id: "A", text: "Amazon EC2." },
        { id: "B", text: "AWS Lambda." },
        { id: "C", text: "Amazon DynamoDB." },
        { id: "D", text: "Amazon EMR." },
        { id: "E", text: "Amazon RDS." },
      ],
      correctAnswer: "B,C",
      explanation: "No explanation provided."
    },
    {
      id: 33,
      text: "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
      options: [
        { id: "A", text: "Amazon GuardDuty." },
        { id: "B", text: "AWS ACM." },
        { id: "C", text: "Amazon Detective." },
        { id: "D", text: "AWS WAF." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 34,
      text: "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
      options: [
        { id: "A", text: "AWS Config." },
        { id: "B", text: "AWS OpsWorks." },
        { id: "C", text: "AutoScaling." },
        { id: "D", text: "AWS CloudFormation." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 35,
      text: "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
      options: [
        { id: "A", text: "Amazon EBS." },
        { id: "B", text: "Amazon EFS." },
        { id: "C", text: "Amazon S3." },
        { id: "D", text: "Amazon Instance Store." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 36,
      text: "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
      options: [
        { id: "A", text: "AWS WAF." },
        { id: "B", text: "Amazon CloudWatch." },
        { id: "C", text: "AWS Cloud9." },
        { id: "D", text: "AWS CloudTrail." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 37,
      text: "A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
      options: [
        { id: "A", text: "On-demand Instances." },
        { id: "B", text: "Dedicated Hosts." },
        { id: "C", text: "Spot Instances." },
        { id: "D", text: "Reserved Instances." },
      ],
      correctAnswer: "D",
      explanation: "No explanation provided."
    },
    {
      id: 38,
      text: "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
      options: [
        { id: "A", text: "Create an IAM role and attach a policy with Amazon DynamoDB access permissions." },
        { id: "B", text: "Create an IAM role and attach a policy with Administrator access permissions." },
        { id: "C", text: "Create an IAM user and attach a policy with Amazon DynamoDB access permissions." },
        { id: "D", text: "Create an IAM user and attach a policy with Administrator access permissions." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 39,
      text: "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
      options: [
        { id: "A", text: "Generate new IAM access keys every time you delegate permissions." },
        { id: "B", text: "Store the required AWS credentials directly within the application code." },
        { id: "C", text: "Use temporary security credentials (IAM roles) instead of long-term access keys." },
        { id: "D", text: "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources." },
      ],
      correctAnswer: "C",
      explanation: "No explanation provided."
    },
    {
      id: 40,
      text: "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
      options: [
        { id: "A", text: "Use servers instead of managed services." },
        { id: "B", text: "Use existing third-party software licenses on AWS." },
        { id: "C", text: "Migrate production workloads to AWS edge locations instead of AWS Regions." },
        { id: "D", text: "Use AWS Outposts to run all workloads in a cost-optimized environment." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 41,
      text: "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
      options: [
        { id: "A", text: "Amazon SQS." },
        { id: "B", text: "Virtual Private Gateway." },
        { id: "C", text: "AWS Artifact." },
        { id: "D", text: "Amazon CloudFront." },
      ],
      correctAnswer: "A",
      explanation: "No explanation provided."
    },
    {
      id: 42,
      text: "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
      options: [
        { id: "A", text: "Amazon Connect." },
        { id: "B", text: "AWS CLI." },
        { id: "C", text: "AWS Identity and Access Management (IAM)." },
        { id: "D", text: "Amazon SNS." },
        { id: "E", text: "Amazon Virtual Private Cloud." },
      ],
      correctAnswer: "B,C",
      explanation: "No explanation provided."
    },
    {
      id: 43,
      text: "According to best practices, which of the below options is best suited for processing a large number of binary files?",
      options: [
        { id: "A", text: "Vertically scaling EC2 instances." },
        { id: "B", text: "Running RDS instances in parallel." },
        { id: "C", text: "Vertically scaling RDS instances." },
        { id: "D", text: "Running EC2 instances in parallel." },
      ],
      correctAnswer: "D",
      explanation: "No explanation provided."
    },
    {
      id: 44,
      text: "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
      options: [
        { id: "A", text: "AWS Cost Explorer." },
        { id: "B", text: "AWS Pricing Calculator." },
        { id: "C", text: "AWS Budgets." },
        { id: "D", text: "AWS Cost & Usage Report." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 45,
      text: "What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)",
      options: [
        { id: "A", text: "Stop all running services and open an investigation." },
        { id: "B", text: "Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account." },
        { id: "C", text: "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources." },
        { id: "D", text: "Open an investigation and delete any potentially compromised IAM users." },
        { id: "E", text: "Change your AWS root account password and the passwords of any IAM users." },
      ],
      correctAnswer: "D,E",
      explanation: "No explanation provided."
    },
    {
      id: 46,
      text: "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
      options: [
        { id: "A", text: "Elastic coupling." },
        { id: "B", text: "Loosely coupling." },
        { id: "C", text: "Scalable coupling." },
        { id: "D", text: "Tightly coupling." },
      ],
      correctAnswer: "B",
      explanation: "No explanation provided."
    },
    {
      id: 47,
      text: "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
      options: [
        { id: "A", text: "Amazon Elastic File System." },
        { id: "B", text: "Amazon Simple Storage Service." },
        { id: "C", text: "Amazon Elastic Block Store." },
        { id: "D", text: "AWS Storage Gateway." },
      ],
      correctAnswer: "A",
      explanation: "No explanation provided."
    },
    {
      id: 48,
      text: "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
      options: [
        { id: "A", text: "Create private connection to your data center." },
        { id: "B", text: "Achieve global high availability." },
        { id: "C", text: "Automate the process of provisioning new compute resources." },
        { id: "D", text: "Make synchronous replication of your data possible." },
      ],
      correctAnswer: "D",
      explanation: "No explanation provided."
    },
    {
      id: 49,
      text: "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
      options: [
        { id: "A", text: "Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats." },
        { id: "B", text: "Lambda natively supports a number of programming languages such as Node.js, Python, and Java." },
        { id: "C", text: "Lambda is AWS’ proprietary programming language for microservices." },
        { id: "D", text: "Lambda doesn’t support programming languages; it is a serverless compute service." },
        { id: "E", text: "Lambda can support any programming language using an API." },
      ],
      correctAnswer: "B,E",
      explanation: "No explanation provided."
    },
    {
      id: 50,
      text: "What are the capabilities of AWS X-Ray? (Choose TWO)",
      options: [
        { id: "A", text: "Automatically decouples application components." },
        { id: "B", text: "Facilitates tracking of user requests to identify application issues." },
        { id: "C", text: "Helps improve application performance." },
        { id: "D", text: "Deploys applications to Amazon EC2 instances." },
        { id: "E", text: "Deploys applications to on-premises servers." },
      ],
      correctAnswer: "B,C",
      explanation: "No explanation provided."
    }
  ]
};



export const quizzes = [
  awsCloudPractitionerQuiz,
  awsCloudPractitionerQuiz2,
  awsCloudPractitionerQuiz3,
  awsCloudPractitionerQuiz4, 
  awsCloudPractitionerQuiz5// <-- add this line
];

//export const quizzes = [awsCloudPractitionerQuiz, awsCloudPractitionerQuiz2, awsCloudPractitionerQuiz3];

