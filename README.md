# Seer Sign Up API

Application was built using NodeJS, Express and Mongoose to interface with MongoDB. 
MongoDB is hosted via Mongo atlas. 

client can be found [here](https://github.com/bsl333/seer-sign-up-client)

### Getting Started

run `npm i` to intall dependencies

### Running The Application

For development, run `npm run dev`; will kick off server with nodemon

Otherwise, run `npm start`

#### API Routes

Can import postman api docs from postman folder

### Samples 


##### create a user:
POST /users
sample req body:
```
{
  "firstName": "test",
  "lastName": "user,
  "username": "testUser",
  "email": "testUser@aol.com",
  "password": "testUserPassword"
}
// if email/username don't exists, response: 
{
  status: 201,
  body: {  
    "firstName": "test",
    "lastName": "user,
    "username": "testUser",
    "email": "testUser@aol.com"
  }
}
```

##### check if an email exists in the DB
GET /users/check/email/:email
```
// response:
{
  status: 200,
  available: <true | false>
}
```
##### check if username exists in DB
GET /users/check/username/:username
```
// response:
{
  status: 200,
  available: <true | false>
}
```

