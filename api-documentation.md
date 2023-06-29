# API Documentation

This document provides information about the APIs available in the Student Aid platform.

## Sign Up API

**Endpoint:** `POST /auth/signup`

Sign up a new user.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "DummyPassword123///"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "id": "123456789",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

## Sign In API

**Endpoint:** `POST /auth/signin`

Sign in an existing user.

**Request Body:**

```json
{
  "email": "johndoe@example.com",
  "password": "DummyPassword123///"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "id": "123456789",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

## User Information Update API

**Endpoint:** `PUT /auth/update-info/:id`

Update user information.

**Request Parameters:**

- `id`: User ID

**Request Body:**

```json
{
  "name": "John Doe",
  "varsity": "HSTU",
  "phone": "1234567890",
  "archive": "value",
  "fund_collection": "value"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "id": "123456789",
  "name": "John Doe",
  "varsity": "HSTU",
  "phone": "1234567890",
  "archive": "value",
  "fund_collection": "value"
}
```

## Update Donate API

**Endpoint:** `PUT /auth/update-donate/:id`

Update donate information for a user.

**Request Parameters:**

- `id`: User ID

**Request Body:**

```json
{
  "donate": {
    "post_id": "63427a4539b1e21edecc7f02",
    "donate_id": "currentDonateId",
    "amount": 100
  }
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Donate updated successfully"
}
```

## Update Receive API

**Endpoint:** `PUT /auth/update-receive/:id`

Update receive information for a user.

**Request Parameters:**

- `id`: User ID

**Request Body:**

```json
{
  "post_id": "63427a4539b1e21edecc7f02",
  "collected_amount": "currentCollectedAmountId",
  "total_amount": "5000"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Receive updated successfully"
}
```

## Update Post API

**Endpoint:** `PUT /auth/update-post/:id`

Update post information for a user.

**Request Parameters:**

- `id`: User ID

**Request Body:**

```json
{
  "post_id": "63427a4539b1e21edecc7f02"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Post updated successfully"
}
```

## Update User Password API

**Endpoint:** `PUT /auth/update-pass/:id`

Update user password.

**Request Parameters:**

- `id`: User ID

**Request Body:**

```json
{
  "password": "NewPassword123///"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Password updated successfully"
}
```

## Update User Email API

**Endpoint:** `PUT /auth/update-email/:id`

Update user email.

**Request Parameters:**

- `id`: User ID

**Request Body:**

```json
{
  "email": "newemail@example.com"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Email updated successfully"
}
```

## Update User Avatar API

**Endpoint:** `PUT /auth/update-avatar/:id`

Update user avatar by uploading a file.

**Request Parameters:**

- `id`: User ID

**Request Body:**

- Form Data: `avatar` (file)

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Avatar updated successfully"
}
```

## Update User Documents API

**Endpoint:** `PUT /auth/update-documents/:id`

Update user documents by uploading multiple files.

**Request Parameters:**

- `id`: User ID

**Request Body:**

- Form Data: `documents` (array of files)

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Documents updated successfully"
}
```

## Create Help Post API

**Endpoint:** `POST http://localhost:5000/help/post`

Create a help post.

**Request Body:**

```json
{
  "title": "demo title with user id 2",
  "description": "demo description",
  "amount": "34",
  "tags": ["2", "345"],
  "user": "<user_id>",
  "donate": "<donate_id>"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Help post created successfully"
}
```

## Update Help Post API

**Endpoint:** `PUT http://localhost:5000/help/post/update/<post_id>`

Update a help post.

**Request Parameters:**

- `post_id`: ID of the post to be updated

**Request Body:**

```json
{
  "title": "hi",
  "description": "hlw",
  "amount": "345",
  "tags": ["tag1", "tag3"],
  "status": "accepted",
  "user": "<user_id>"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Help post updated successfully"
}
```

## Get User API

**Endpoint:** `GET http://localhost:5000/auth/user/<id>`

Get user information.

**Request Parameters:**

- `id`: User ID

**Response:**

- Status: 200 OK
- Body:

```json
{
  // User information
}
```

## Get All Posts API

**Endpoint:** `GET http://localhost:5000/help/post/<page_no>`

Get all help posts (10 posts per page).

**Request Parameters:**

- `page_no`: Page number

**Response:**

- Status: 200 OK
- Body:

```json
{
  // List of help posts
}
```

## Get Specific Post API

**Endpoint:** `GET http://localhost:5000/help/spost/:id`

Get a specific help post.

**Request Parameters:**

- `id`: ID of the post

**Response:**

- Status: 200 OK
- Body:

```json
{
  // Help post information
}
```

## Create Donate API

**Endpoint:** `POST http://localhost:5000/donate/init`

Create a donation.

**Request Body:**

```json
{
  "collected": "300",
  "need": "300",
  "total_amount": "5000",
  "donors": {
    "donar_id": "634275d339b1e21edecc7ef1",
    "weight": "360"
  },
  "owner": "633c4f54d2da05165640d74d"
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  "message": "Donation created successfully"
}
```

## Update Donate API

**Endpoint:** `PUT http://localhost:5000/donate/update/<donate_id>`

Update a donation.

**Request Parameters:**

- `donate_id`: ID of the donation

**Request Body:**

```json
{
  "collected": "400",
  "need": "4600",
  "total_amount": "5000",
  "donors": {
    "donar_id": "634277ea39b1e21edecc7efb",
    "weight": "560"
  }
}
```

\*\*Response:

\*\*

- Status: 200 OK
- Body:

```json
{
  "message": "Donation updated successfully"
}
```

## Payment Request API

**Endpoint:** `POST http://localhost:5000/payment/payment-request`

Initiate a payment request.

**Request Body:**

```json
{
  // Payment request data
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  // Payment response data
}
```

## Payment Notification API

**Endpoint:** `POST http://localhost:5000/payment/payment-notification`

Receive payment notification.

**Request Body:**

```json
{
  // Payment notification data
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  // Response data
}
```

## Payment Success API

**Endpoint:** `POST http://localhost:5000/payment/payment-success`

Handle successful payment.

**Request Body:**

```json
{
  // Success payment data
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  // Response data
}
```

## Payment Fail API

**Endpoint:** `POST http://localhost:5000/payment/payment-fail`

Handle failed payment.

**Request Body:**

```json
{
  // Failed payment data
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  // Response data
}
```

## Payment Cancel API

**Endpoint:** `POST http://localhost:5000/payment/payment-cancel`

Handle payment cancellation.

**Request Body:**

```json
{
  // Payment cancellation data
}
```

**Response:**

- Status: 200 OK
- Body:

```json
{
  // Response data
}
```

## Get All Users API

**Endpoint:** `GET http://localhost:5000/auth/users`

Get information about all users.

**Response:**

- Status: 200 OK
- Body:

```json
{
  // List of user information
}
```
