#### Setup
Download and repository and run the following command

```bash
npm install && npm start
```

#### This is a simple API built with NodeJs and MongoDb. It allows users to do the following:

1. Register and create their account
2. Login to their account
3. Create job listings
4. Update job listings
5. Delete job listings
6. View a single job listing
7. View all jobs they've listed

#### The API has two route

- auth.js for user registration and login
- jobs.js for job listing management

#### User Authentication
This project uses the following packages for user authentication and security:
- BCrypt for password hashing
- Json Web Token for token generation and user authorization

#### Extra security packages used in this project are:

- Helmet for securing Express apps by setting various HTTP headers.
- CORS for providing a Connect/Express middleware that can be used to enable Cross-origin Resource Sharing with various options.
- XSS Clean, a Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params.
- Express Rate Limit is a package used to limit repeated requests to public APIs and other endpoints. In the case of malicious exploitation, this package increases security by restricting the number of requests a malicious user sends to an API in a giving time.

#### The documentation for this API was generated using Swagger UI

#### Project Result
The project is hosted on Heroku and at this link: 
https://jobzz-api.herokuapp.com/
```
