// load .env into process.env
require('dotenv').config()

// Minimalist web framework
// hello class
const express = require('express')

// body parsing middleware
const bodyParserer = require('body-parser')

// HTTP request logger middleware
const morgan = require('morgan')

// OS path module (part of Node)
const path = require('path')

// load PORT if it is specified otherwise use 8080
const port = process.env.PORT || 8080

// create the express app
const app = express()

// initialise morgan
app.use(morgan('dev'))

// initialise body parsing for json
app.use(bodyParserer.json())
app.use(bodyParserer.urlencoded({ extended: true }))

// GET / -> sends src/welcome.html
app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../public/welcome.html')
  )
})

// start the server
app.listen(port, () => {
  console.log('Server started on port:', port)
})
