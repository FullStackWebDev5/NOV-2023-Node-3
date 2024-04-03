const express = require('express')
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express()

app.set('view engine', 'ejs')

// Name of the model -> Singular and Pascal Case
// User -> users

const User = mongoose.model('User', {
  firstName: String,
  lastName: String,
  email: String
})

const Book = mongoose.model('Book', {
  authorName: String,
  bookName: String,
})

const Child = mongoose.model('Child', {
  name: String,
  parentName: String,
})

const Lady = mongoose.model('Lady', {
  name: String,
  spouseName: String,
})

app.get('/', (req, res) => {
  res.send('Our first Node Express Server :)')
})

app.listen(3000, () => {
  mongoose
    .connect('mongodb+srv://user:user123@cluster0.gbxvqva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Server is up :)'))
    .catch((error) => console.log(error))
})

















/*
  - Database (DB): Permanent Storage
      - Two types:
          - 1. SQL (Relational DB)
              - Table and Row format
              - Eg: MySQL, PostgreSQL, SQLite, etc
          - 2. NoSQL (Non-Relational DB)
              - Collection and Document format
              - Eg: MongoDB, AWS DynamoDB, etc

  - MongoDB
  - Mongoose: MongoDB Driver/ ODM (Object Data Modelling)
  - Schema/Models

  REST APIs: Representational State Transfer
  CRUD Opeartions:
      - GET (Read)
      - POST (Create)
      - PUT/PATCH (Update)
      - DELETE (Delete)

  E-Commerce:
  - Customers
      - GET /customers (Read)
      - POST /customers (Create)
      - PUT /customers/:id (Update)
      - DELETE /customers/:id (Delete)

  - Sellers
      - GET /sellers (Read)
      - POST /sellers (Create)
      - PUT /sellers/:id (Update)
      - DELETE /sellers/:id (Delete)
*/