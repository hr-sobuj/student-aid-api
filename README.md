# Student Aid Backend

This is the backend component of the Fundraising Platform, a platform built using Node.js, Express.js, and MongoDB to assist financially disadvantaged students in fundraising for education. The backend integrates a Student Verification System and a secure Payment Gateway using SSLCOMMERZ.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [API Documentation](#api-documentation)
- [License](#license)

## Installation

To install and run the backend of the Fundraising Platform, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/hr-sobuj/student-aid-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd student-aid-api
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables:

   - Create a `.env` file in the project root directory.
   - Add the following variables to the `.env` file:

     ```bash
         APP_NAME=MyApp
         PORT=3000
         MONGODB_CONNECTION_STRING_PRODUCTION=your-production-mongodb-connection-uri
         MONGODB_CONNECTION_STRING_LOCAL=your-local-mongodb-connection-uri
         MONGODB_USERNAME=your-mongodb-username
         MONGODB_PASSWORD=your-mongodb-password
         JWT_SECRET=your-jwt-secret
         JWT_EXPIRE_TOKEN=3600
         COOKIE_NAME=my-cookie
         COOKIE_SECRET=your-cookie-secret
         STORE_ID=your-store-id
         STORE_PASSWORD=your-store-password
         ROOT=your-api-root

     ```

     Replace `your-mongodb-connection-uri` with the URI for your MongoDB database, `your-store-id` with your SSLCOMMERZ Store ID, and `your-store-password` with your SSLCOMMERZ Store Password.

5. Start the development server:

   ```bash
   npm start
   ```

   The backend server will be accessible at `http://localhost:3000`.

## Features

- **Fundraising Assistance**: The platform helps financially disadvantaged students in fundraising for education.
- **Student Verification System**: A system is implemented to verify student profiles and ensure the authenticity of fundraising campaigns.
- **Secure Payment Gateway**: The backend integrates SSLCOMMERZ, a secure Payment Gateway, to handle donation transactions securely.
- **Database Integration**: MongoDB with Mongoose is used as the database to store student profiles, campaigns, and donation information.

## API Documentation

The API documentation for the Fundraising Platform Backend can be found at the following link:

[API Documentation](api-documentation.md)

The documentation provides detailed information about the available endpoints, request/response formats, and authentication requirements.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.
