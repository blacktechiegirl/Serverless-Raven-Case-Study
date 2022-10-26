# The-Serverless-Raven-Case-Study
On the 3rd of october in year 2000, the serverless community in the central city of New jersey held a serverless meetup where they discussed several pressing serverless issues.
One of their major concerns was having a centralized platform where they could have all discussions pertaining to serverless and all its services.They came to a conclusion to build a serverless social media platform using 100% serverless services. The community was excited for this new project.

Tom Jefferson, the serverless community lead reached out to serverless architect Toyosi for her expertise in building reliable, secure and well architected serverless applications.

# The-Serverless-Raven-Challenge
Tom Jefferson highlighted the challenges in this project.
1. Each User should be able to create,update, read and delete their profile.
2. Each user should be able to create, read, update and delete their posts.
3. Each user should be able to create, read and delete their comments on any post.
4. Each serverless service should have its own page for discussions.

# The-Serverless-Raven-Solution
Toyosi needs to build a highly reliable serverless platform.
Her proposed solution is to build 
- A serverless Application with javascript (React in Frontend, Node for Backend)
- A REST API with AWS API Gateway which supports CRUD functionality 
- 8-10 lambdas that includes the following CRUD functionality (Create, Read, Update, Delete) and integrates with API Gateway
- A dynamo Database that stores users posts and comment data.
- A cognito user pool for user authentication.
- An S3 bucket for serving static content.
- A cloudfront edge network for distributed content.
- An automated infrastructure with Infrastructure as code using Serverless Framework.
- A CI/CD pipeline using github actions.


# The-Serverless-Raven Technologies and Services
- React
- Nodejs
- API Gateway
- Lambda Function
- Amazon Dynamo DB
- AWS S3 Bucket
- CloudFront
- Amazon Cognito
- Cloud Watch
- IAM
- Cloud Formation
- Serverless Framework
- Github Actions


# The-Serverless-Raven-Architecture
This architecture highights the AWS serverless services used, the communication between the services and the flow of data within the application.

![alt text](https://github.com/blacktechiegirl/The-Serverless-Raven-Case-Study/blob/main/assets/serverless-raven.png)


# The-Serverless-Raven-Application
A very big congratulations to the serverless community !
The serverless Raven is live ...............

Get started on https://d3rmglbssclayt.cloudfront.net/