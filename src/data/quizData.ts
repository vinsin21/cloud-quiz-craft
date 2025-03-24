
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
    // Adding more questions to reach total of 50
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
    // Adding the remaining questions from 21-50
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
        { id: "D", text: "Setting password complexity rules." },
        { id: "E", text: "Configuring network access rules." }
      ],
      correctAnswer: "D,E",
      explanation: "Setting password complexity (D) and configuring network access rules (E) are customer responsibilities in the shared model."
    },
    {
      id: 49,
      text: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
      options: [
        { id: "A", text: "Amazon Aurora." },
        { id: "B", text: "Amazon CloudWatch." },
        { id: "C", text: "AWS Quick Start reference deployments." },
        { id: "D", text: "AWS OpsWorks." }
      ],
      correctAnswer: "C",
      explanation: "AWS Quick Start reference deployments help deploy popular technologies on AWS with automated reference implementations."
    },
    {
      id: 50,
      text: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
      options: [
        { id: "A", text: "Elastic RI." },
        { id: "B", text: "Premium RI." },
        { id: "C", text: "Standard RI." },
        { id: "D", text: "Convertible RI." }
      ],
      correctAnswer: "D",
      explanation: "Convertible RIs allow you to exchange them for other Convertible RIs with different instance attributes."
    }
  ]
};

export const awsCloudPractitionerQuiz2: Quiz = {
  id: "aws-ccp-2",
  title: "AWS Certified Cloud Practitioner",
  description: "Practice Exam 2 - Further test your AWS knowledge with additional questions covering key AWS concepts and services.",
  timeLimit: 90,
  questions: [
    {
      id: 1,
      text: "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
      options: [
        { id: "A", text: "AWS Organizations." },
        { id: "B", text: "AWS Trusted Advisor." },
        { id: "C", text: "IAM User Groups." },
        { id: "D", text: "AWS Config." }
      ],
      correctAnswer: "A",
      explanation: "AWS Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources."
    },
    {
      id: 2,
      text: "Which service provides object-level storage in AWS?",
      options: [
        { id: "A", text: "Amazon EBS." },
        { id: "B", text: "Amazon Instance Store." },
        { id: "C", text: "Amazon EFS." },
        { id: "D", text: "Amazon S3." }
      ],
      correctAnswer: "D",
      explanation: "Amazon S3 (Simple Storage Service) provides object-level storage, allowing you to store and retrieve any amount of data."
    },
    {
      id: 3,
      text: "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
      options: [
        { id: "A", text: "AWS Elastic Load Balancer." },
        { id: "B", text: "AWS Budgets." },
        { id: "C", text: "AWS Auto Scaling." },
        { id: "D", text: "AWS Cost Explorer." }
      ],
      correctAnswer: "C",
      explanation: "AWS Auto Scaling automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost."
    },
    {
      id: 4,
      text: "Which S3 storage class is best for data with unpredictable access patterns?",
      options: [
        { id: "A", text: "Amazon S3 Intelligent-Tiering." },
        { id: "B", text: "Amazon S3 Glacier Flexible Retrieval." },
        { id: "C", text: "Amazon S3 Standard." },
        { id: "D", text: "Amazon S3 Standard-Infrequent Access." }
      ],
      correctAnswer: "A",
      explanation: "S3 Intelligent-Tiering automatically moves data between two access tiers based on changing access patterns."
    },
    {
      id: 5,
      text: "What is the AWS database service that allows you to upload data structured in key-value format?",
      options: [
        { id: "A", text: "Amazon DynamoDB." },
        { id: "B", text: "Amazon Aurora." },
        { id: "C", text: "Amazon Redshift." },
        { id: "D", text: "Amazon RDS." }
      ],
      correctAnswer: "A",
      explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale."
    },
    {
      id: 6,
      text: "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
      options: [
        { id: "A", text: "You have to pay a start-up fee when launching a new instance for the first time." },
        { id: "B", text: "The on-demand instances follow the AWS pay-as-you-go pricing model." },
        { id: "C", text: "With on-demand instances, no longer-term commitments or upfront payments are needed." },
        { id: "D", text: "When using on-demand Linux instances, you are charged per second based on an hourly rate." }
      ],
      correctAnswer: "A",
      explanation: "There is no start-up fee when launching EC2 On-demand instances. You only pay for compute capacity used."
    },
    {
      id: 7,
      text: "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
      options: [
        { id: "A", text: "AWS Trusted Advisor." },
        { id: "B", text: "Amazon Inspector." },
        { id: "C", text: "Amazon SNS." },
        { id: "D", text: "Amazon CloudWatch." },
        { id: "E", text: "Concierge Support Team." }
      ],
      correctAnswer: "A,B",
      explanation: "AWS Trusted Advisor provides recommendations to help follow AWS best practices, and Amazon Inspector automatically assesses applications for vulnerabilities."
    },
    {
      id: 8,
      text: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
      options: [
        { id: "A", text: "Encrypted keys." },
        { id: "B", text: "Email verification." },
        { id: "C", text: "AWS KMS." },
        { id: "D", text: "AWS MFA." }
      ],
      correctAnswer: "D",
      explanation: "Multi-Factor Authentication (MFA) adds an extra layer of protection on top of your username and password."
    },
    {
      id: 9,
      text: "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
      options: [
        { id: "A", text: "AWS Knowledge Center." },
        { id: "B", text: "AWS Health Dashboard." },
        { id: "C", text: "Infrastructure Event Management." },
        { id: "D", text: "AWS Support Concierge Service." }
      ],
      correctAnswer: "C",
      explanation: "Infrastructure Event Management is part of the Enterprise Support plan, providing architectural and scaling guidance for specific events."
    },
    {
      id: 10,
      text: "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
      options: [
        { id: "A", text: "Amazon RDS." },
        { id: "B", text: "Amazon Redshift." },
        { id: "C", text: "Amazon DynamoDB." },
        { id: "D", text: "Amazon CloudWatch." }
      ],
      correctAnswer: "A",
      explanation: "Amazon RDS automates time-consuming administration tasks like hardware provisioning, database setup, patching, and backups."
    },
    {
      id: 11,
      text: "Which of the below is a best-practice when designing solutions on AWS?",
      options: [
        { id: "A", text: "Invest heavily in architecting your environment, as it is not easy to change your design later." },
        { id: "B", text: "Use AWS reservations to reduce costs when testing your production environment." },
        { id: "C", text: "Automate wherever possible to make architectural experimentation easier." },
        { id: "D", text: "Provision a large compute capacity to handle any spikes in load" }
      ],
      correctAnswer: "C",
      explanation: "Automation allows for easier experimentation, testing, and evolution of your architecture."
    },
    {
      id: 12,
      text: "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
      options: [
        { id: "A", text: "Penetration testing is not allowed in AWS." },
        { id: "B", text: "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure." },
        { id: "C", text: "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS." },
        { id: "D", text: "The AWS customers are only allowed to perform penetration testing on services managed by AWS." }
      ],
      correctAnswer: "C",
      explanation: "Customers can perform penetration testing on their own EC2 instances without prior authorization from AWS."
    },
    {
      id: 13,
      text: "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
      options: [
        { id: "A", text: "Amazon SQS." },
        { id: "B", text: "Amazon SES." },
        { id: "C", text: "AWS Direct Connect." },
        { id: "D", text: "Amazon Connect." }
      ],
      correctAnswer: "A",
      explanation: "Amazon SQS (Simple Queue Service) provides a queue for storing messages, ensuring they're not lost if components fail."
    },
    {
      id: 14,
      text: "The principle \"design for failure and nothing will fail\" is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
      options: [
        { id: "A", text: "Multi-factor authentication." },
        { id: "B", text: "Availability Zones." },
        { id: "C", text: "Elastic Load Balancing." },
        { id: "D", text: "Penetration testing." },
        { id: "E", text: "Vertical Scaling." }
      ],
      correctAnswer: "B,C",
      explanation: "Availability Zones (B) provide redundancy across different physical locations, and Elastic Load Balancing (C) distributes traffic to healthy instances."
    },
    {
      id: 15,
      text: "What is the AWS service that provides a virtual network dedicated to your AWS account?",
      options: [
        { id: "A", text: "AWS VPN." },
        { id: "B", text: "AWS Subnets." },
        { id: "C", text: "AWS Dedicated Hosts." },
        { id: "D", text: "Amazon VPC." }
      ],
      correctAnswer: "D",
      explanation: "Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch resources."
    },
    {
      id: 16,
      text: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
      options: [
        { id: "A", text: "Managing environmental events of AWS data centers." },
        { id: "B", text: "Protecting the confidentiality of data in transit in Amazon S3." },
        { id: "C", text: "Controlling physical access to AWS Regions." },
        { id: "D", text: "Ensuring that the underlying EC2 host is configured properly." },
        { id: "E", text: "Patching applications installed on Amazon EC2." }
      ],
      correctAnswer: "B,E",
      explanation: "Under the shared responsibility model, customers are responsible for protecting data in transit (B) and patching applications they install (E)."
    },
    {
      id: 17,
      text: "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
      options: [
        { id: "A", text: "Amazon VPC." },
        { id: "B", text: "Amazon CloudWatch." },
        { id: "C", text: "Amazon S3." },
        { id: "D", text: "Amazon EC2." },
        { id: "E", text: "AWS Lambda." }
      ],
      correctAnswer: "D,E",
      explanation: "Amazon EC2 (D) provides virtual servers for compute capacity, and AWS Lambda (E) lets you run code without provisioning servers."
    },
    {
      id: 18,
      text: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
      options: [
        { id: "A", text: "Amazon EBS." },
        { id: "B", text: "Amazon SQS." },
        { id: "C", text: "Amazon S3." },
        { id: "D", text: "Amazon Instance store." }
      ],
      correctAnswer: "C",
      explanation: "Amazon S3 is designed for storing and retrieving any amount of data, making it ideal for photos and videos."
    },
    {
      id: 19,
      text: "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
      options: [
        { id: "A", text: "Instance Password." },
        { id: "B", text: "Key pairs." },
        { id: "C", text: "Access Keys." },
        { id: "D", text: "MFA." }
      ],
      correctAnswer: "C",
      explanation: "Access keys are long-term credentials used for programmatic requests to AWS services."
    },
    {
      id: 20,
      text: "What does Amazon ElastiCache provide?",
      options: [
        { id: "A", text: "In-memory caching for read-heavy applications." },
        { id: "B", text: "An Ehcache compatible in-memory data store." },
        { id: "C", text: "An online software store that allows Customers to launch pre-configured software with just few clicks." },
        { id: "D", text: "A domain name system in the cloud." }
      ],
      correctAnswer: "A",
      explanation: "Amazon ElastiCache improves application performance by providing in-memory caching for frequently accessed data."
    },
    {
      id: 21,
      text: "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
      options: [
        { id: "A", text: "AWS WAF." },
        { id: "B", text: "AWS Trusted Advisor." },
        { id: "C", text: "AWS Organizations." },
        { id: "D", text: "Amazon Config." }
      ],
      correctAnswer: "C",
      explanation: "AWS Organizations helps you centrally manage and govern multiple AWS accounts from a single location."
    },
    {
      id: 22,
      text: "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
      options: [
        { id: "A", text: "Dedicated Instances." },
        { id: "B", text: "Dedicated Hosts." },
        { id: "C", text: "On-demand Instances." },
        { id: "D", text: "Reserved Instances." }
      ],
      correctAnswer: "B",
      explanation: "Dedicated Hosts provide you with visibility and control over server-bound software licenses, supporting BYOL scenarios."
    },
    {
      id: 23,
      text: "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
      options: [
        { id: "A", text: "Free support for all enterprise customers." },
        { id: "B", text: "Automatic data protection." },
        { id: "C", text: "Reduced Capital Expenditure (CapEx)." },
        { id: "D", text: "AWS holds responsibility for managing customer applications." }
      ],
      correctAnswer: "C",
      explanation: "Moving to AWS shifts costs from capital expenditure (buying hardware) to operational expenditure (paying for services)."
    },
    {
      id: 24,
      text: "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
      options: [
        { id: "A", text: "Always use Global Services in your architecture rather than Regional Services." },
        { id: "B", text: "Always choose to pay as you go." },
        { id: "C", text: "Treat servers as fixed resources." },
        { id: "D", text: "Automate wherever possible." },
        { id: "E", text: "Remove single points of failure." }
      ],
      correctAnswer: "D,E",
      explanation: "Automation (D) improves reliability and efficiency, and removing single points of failure (E) increases system resilience."
    },
    {
      id: 25,
      text: "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
      options: [
        { id: "A", text: "AWS Direct Connect." },
        { id: "B", text: "Amazon CloudFront." },
        { id: "C", text: "AWS Snowball." },
        { id: "D", text: "Amazon Route 53." }
      ],
      correctAnswer: "A",
      explanation: "AWS Direct Connect provides a dedicated network connection between your premises and AWS."
    },
    {
      id: 26,
      text: "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
      options: [
        { id: "A", text: "Internet gateways." },
        { id: "B", text: "Virtual Private Cloud." },
        { id: "C", text: "Security Groups." },
        { id: "D", text: "Amazon CloudFront." }
      ],
      correctAnswer: "B",
      explanation: "Virtual Private Cloud (VPC) enables you to create logically isolated sections of the AWS Cloud with separate network configurations."
    },
    {
      id: 27,
      text: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
      options: [
        { id: "A", text: "Amazon Cognito." },
        { id: "B", text: "AWS IAM." },
        { id: "C", text: "Amazon Aurora." },
        { id: "D", text: "AWS WAF." }
      ],
      correctAnswer: "D",
      explanation: "AWS WAF (Web Application Firewall) helps protect web applications from common exploits like SQL injection."
    },
    {
      id: 28,
      text: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
      options: [
        { id: "A", text: "Amazon EMR." },
        { id: "B", text: "Amazon MQ." },
        { id: "C", text: "Amazon SNS." },
        { id: "D", text: "Amazon SQS." }
      ],
      correctAnswer: "A",
      explanation: "Amazon EMR (Elastic MapReduce) provides a managed Hadoop framework for processing and analyzing large data sets."
    },
    {
      id: 29,
      text: "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
      options: [
        { id: "A", text: "Monitoring network performance." },
        { id: "B", text: "Installing software on EC2 instances." },
        { id: "C", text: "Creating hypervisors." },
        { id: "D", text: "Configuring Access Control Lists (ACLs)." },
        { id: "E", text: "Hardware maintenance." }
      ],
      correctAnswer: "C,E",
      explanation: "AWS is responsible for the hypervisor layer (C) and maintaining the physical hardware (E) in their data centers."
    },
    {
      id: 30,
      text: "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
      options: [
        { id: "A", text: "Amazon Redshift." },
        { id: "B", text: "Amazon DynamoDB." },
        { id: "C", text: "Amazon EC2." },
        { id: "D", text: "Amazon RDS." }
      ],
      correctAnswer: "C",
      explanation: "Amazon EC2 gives you complete control over your computing resources, including the operating system and configuration."
    },
    {
      id: 31,
      text: "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
      options: [
        { id: "A", text: "MFA." },
        { id: "B", text: "Security tokens." },
        { id: "C", text: "A user name and password." },
        { id: "D", text: "Access keys." }
      ],
      correctAnswer: "C",
      explanation: "A username and password are the default credentials for accessing the AWS Management Console as an IAM user."
    },
    {
      id: 32,
      text: "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
      options: [
        { id: "A", text: "IAM." },
        { id: "B", text: "An internet gateway." },
        { id: "C", text: "EBS Snapshot." },
        { id: "D", text: "AMI." }
      ],
      correctAnswer: "D",
      explanation: "An Amazon Machine Image (AMI) provides the information required to launch an instance, similar to a virtual server template."
    },
    {
      id: 33,
      text: "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
      options: [
        { id: "A", text: "Reserved Compute capacity." },
        { id: "B", text: "Eliminating Single Points of Failure (SPOFs)." },
        { id: "C", text: "Distributed infrastructure." },
        { id: "D", text: "Virtualized compute resources." },
        { id: "E", text: "Dedicated hosting." }
      ],
      correctAnswer: "B,C",
      explanation: "Cloud computing helps eliminate single points of failure (B) through its distributed infrastructure (C)."
    },
    {
      id: 34,
      text: "Which of the following aspects of security are managed by AWS? (Choose TWO)",
      options: [
        { id: "A", text: "Encryption of EBS volumes." },
        { id: "B", text: "VPC security." },
        { id: "C", text: "Access permissions." },
        { id: "D", text: "Hardware patching." },
        { id: "E", text: "Securing global physical infrastructure." }
      ],
      correctAnswer: "D,E",
      explanation: "AWS manages hardware patching (D) and physical infrastructure security (E) as part of their responsibility."
    },
    {
      id: 35,
      text: "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
      options: [
        { id: "A", text: "The ability of a system to recover gracefully from failure." },
        { id: "B", text: "The efficient use of computing resources to meet requirements." },
        { id: "C", text: "The ability to monitor systems and improve supporting processes and procedures." },
        { id: "D", text: "The ability to manage datacenter operations more efficiently." }
      ],
      correctAnswer: "C",
      explanation: "Operational excellence focuses on running and monitoring systems to deliver business value and continually improving processes."
    },
    {
      id: 36,
      text: "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
      options: [
        { id: "A", text: "Edge locations are used by CloudFront to cache the most recent responses." },
        { id: "B", text: "Edge locations are used by CloudFront to improve your end users' experience when uploading files." },
        { id: "C", text: "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency." },
        { id: "D", text: "Edge locations are used by CloudFront to distribute content to global users with low latency." }
      ],
      correctAnswer: "C",
      explanation: "Edge locations don't distribute traffic across instances (that's what ELB does); they cache content closer to users to reduce latency."
    },
    {
      id: 37,
      text: "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
      options: [
        { id: "A", text: "AWS CloudTrail." },
        { id: "B", text: "Amazon Comprehend." },
        { id: "C", text: "AWS Transit Gateway." },
        { id: "D", text: "AWS X-Ray." },
        { id: "E", text: "AWS Config." }
      ],
      correctAnswer: "A,E",
      explanation: "AWS CloudTrail (A) logs API activity, and AWS Config (E) provides a detailed inventory of resources and configuration changes."
    },
    {
      id: 38,
      text: "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
      options: [
        { id: "A", text: "Amazon ECS." },
        { id: "B", text: "AWS Data Pipeline." },
        { id: "C", text: "AWS Cloud9." },
        { id: "D", text: "AWS Personal Health Dashboard." }
      ],
      correctAnswer: "A",
      explanation: "Amazon ECS (Elastic Container Service) is a highly scalable, fast container management service for running Docker containers."
    },
    {
      id: 39,
      text: "Which of the following services will help businesses ensure compliance in AWS?",
      options: [
        { id: "A", text: "CloudFront." },
        { id: "B", text: "CloudEndure Migration." },
        { id: "C", text: "CloudWatch." },
        { id: "D", text: "CloudTrail." }
      ],
      correctAnswer: "D",
      explanation: "AWS CloudTrail helps with compliance by providing a history of AWS API calls, useful for security analysis and operational troubleshooting."
    },
    {
      id: 40,
      text: "Which of the following procedures will help reduce your Amazon S3 costs?",
      options: [
        { id: "A", text: "Use the Import/Export feature to move old files automatically to Amazon Glacier." },
        { id: "B", text: "Use the right combination of storage classes based on different use cases." },
        { id: "C", text: "Pick the right Availability Zone for your S3 bucket." },
        { id: "D", text: "Move all the data stored in S3 standard to EBS." }
      ],
      correctAnswer: "B",
      explanation: "Using the appropriate storage classes (like Standard, Infrequent Access, Glacier) for different data usage patterns reduces S3 costs."
    },
    {
      id: 41,
      text: "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
      options: [
        { id: "A", text: "AWS Direct Connect." },
        { id: "B", text: "Amazon EC2 Auto Scaling." },
        { id: "C", text: "Elastic Load Balancer." },
        { id: "D", text: "CloudFormation." },
        { id: "E", text: "Network ACLs." }
      ],
      correctAnswer: "B,C",
      explanation: "EC2 Auto Scaling (B) adds/removes capacity as needed, and Elastic Load Balancer (C) distributes traffic across multiple targets."
    },
    {
      id: 42,
      text: "Which of the following activities may help reduce your AWS monthly costs?",
      options: [
        { id: "A", text: "Enabling Amazon EC2 Auto Scaling for all of your workloads." },
        { id: "B", text: "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests." },
        { id: "C", text: "Removing all of your Cost Allocation Tags." },
        { id: "D", text: "Deploying your AWS resources across multiple Availability Zones." }
      ],
      correctAnswer: "A",
      explanation: "EC2 Auto Scaling helps reduce costs by automatically scaling capacity up or down based on demand."
    },
    {
      id: 43,
      text: "What is the AWS service/feature that takes advantage of Amazon CloudFront's globally distributed edge locations to transfer files to S3 with higher upload speeds?",
      options: [
        { id: "A", text: "S3 Transfer Acceleration." },
        { id: "B", text: "AWS WAF." },
        { id: "C", text: "AWS Snowmobile." },
        { id: "D", text: "AWS Snowball." }
      ],
      correctAnswer: "A",
      explanation: "S3 Transfer Acceleration uses CloudFront's globally distributed edge locations to accelerate S3 uploads over long distances."
    },
    {
      id: 44,
      text: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
      options: [
        { id: "A", text: "AWS X-Ray." },
        { id: "B", text: "Network ACL." },
        { id: "C", text: "Security Groups." },
        { id: "D", text: "VPC Flow logs." }
      ],
      correctAnswer: "C",
      explanation: "Security Groups act as a virtual firewall for EC2 instances to control inbound and outbound traffic."
    },
    {
      id: 45,
      text: "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
      options: [
        { id: "A", text: "AWS KMS." },
        { id: "B", text: "AWS Global accelerator." },
        { id: "C", text: "AWS Direct Connect." },
        { id: "D", text: "AWS Glue." },
        { id: "E", text: "Amazon CloudFront." }
      ],
      correctAnswer: "B,E",
      explanation: "AWS Global Accelerator (B) improves availability and performance using the AWS global network, and CloudFront (E) reduces latency by caching content."
    },
    {
      id: 46,
      text: "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
      options: [
        { id: "A", text: "Building the relational database schema." },
        { id: "B", text: "Performing backups." },
        { id: "C", text: "Managing the database settings." },
        { id: "D", text: "Patching the database software." },
        { id: "E", text: "Installing the database software." }
      ],
      correctAnswer: "A,C",
      explanation: "Customers are responsible for database schema design (A) and configuring database settings (C) in Amazon RDS."
    },
    {
      id: 47,
      text: "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
      options: [
        { id: "A", text: "Amazon DynamoDB." },
        { id: "B", text: "Amazon SNS." },
        { id: "C", text: "Amazon RDS." },
        { id: "D", text: "Amazon ElastiCache." }
      ],
      correctAnswer: "C",
      explanation: "Amazon RDS is designed for structured data and relational databases, making it suitable for migrating structured data."
    },
    {
      id: 48,
      text: "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
      options: [
        { id: "A", text: "APN Consulting Partners." },
        { id: "B", text: "AWS TAM." },
        { id: "C", text: "APN Technology Partners." },
        { id: "D", text: "AWS Professional Services." }
      ],
      correctAnswer: "A",
      explanation: "APN Consulting Partners help customers design, architect, build, migrate, and manage their workloads on AWS."
    },
    {
      id: 49,
      text: "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
      options: [
        { id: "A", text: "Amazon LightSail." },
        { id: "B", text: "AWS Lambda." },
        { id: "C", text: "Amazon RDS instances." },
        { id: "D", text: "Amazon EC2 instances." }
      ],
      correctAnswer: "B",
      explanation: "AWS Lambda is a serverless compute service that runs your code without provisioning or managing servers."
    },
    {
      id: 50,
      text: "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
      options: [
        { id: "A", text: "She has properly built an elastic system." },
        { id: "B", text: "She has properly built a fault tolerant system." },
        { id: "C", text: "She has properly built an encrypted system." },
        { id: "D", text: "She has properly built a scalable system." }
      ],
      correctAnswer: "B",
      explanation: "A fault-tolerant system can continue operating properly even when some components fail, which is what happened in this scenario."
    }
  ]
};

export const quizzes = [awsCloudPractitionerQuiz, awsCloudPractitionerQuiz2];
