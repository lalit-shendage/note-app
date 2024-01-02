# Note taking app

This is a simple RESTful API built with Express.js and MongoDB that allows performing CRUD operations on a collection of items.






## Tech Stack

**Server:** Node, Express, mongoose

**API-Test:** POSTMAN

**External libraries:** bcrypt, JWT, validator


## Getting Started

### Installation

1. Clone this repository to your local machine.

```bash
  https://github.com/lalit-shendage/note-app
```
2. Install the dependencies.

```bash
 npm install
```

```
### Running the API

1. Start the application.

```bash
npm start
```

2. The API will be available at http://localhost:3000.


    
## API Reference


#### Register User

```http
  POST /auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User's name |
| `email` | `string` | **Required**. User's email |
| `password` | `string` | **Required**. User's name |


####  User login

```http
  POST /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. User's email |
| `password` | `string` | **Required**. User's name |



#### POST note

```http
  POST /notes
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `auth-token`      | `string` | **Required**. auth-token |
| `Content-Type`      | `application/json` | **Required**. |
| `Title`      | `string` | **Required**. min 3 characters |
| `Content`      | `string` | **Required**. min 6 characters |


#### Get all notes

```http
  GET /notes
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Content-Type`      | `application/json` | **Required**. |
| `auth-token`      | `string` | **Required**. auth-token |


#### Get note by id

```http
  GET /notes/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Content-Type`      | `application/json` | **Required**. |
| `auth-token`      | `string` | **Required**. auth-token |




#### update note
```http
  PUT /notes/update/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `auth-token`      | `string` | **Required**. auth-token |
| `Content-Type`      | `application/json` | **Required**. |
| `Title`      | `string` |  min 3 characters |
| `Content`      | `string` |  min 6 characters |


#### get result
```http
  DELETE /notes/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `auth-token`      | `string` | **Required**. auth-token |
| `Content-Type`      | `application/json` | **Required**. |



## Additional Features


```
### Validation

1. Data is properly validated using express-validator before performing database operations.

2. The API returns appropriate error messages for validation failures.


### Authentication 

1. Authentication/Authorization: Authentication and authorization mechanisms have been implemented to protect the endpoints. Users need to authenticate and provide a valid token in the request headers to access the protected endpoints.

### Test

#### Manual test using postman

1. Start the application
2. Open Postman and import the provided collection file
3. The collection includes pre-configured requests for each API endpoint. You can send requests to the corresponding endpoints and examine the responses.

**Note**: Make sure to update the request URLs and data as needed based on your local environment and specific API configurations.
## Authors

- [Lalit Shendage](https://github.com/lalit-shendage)