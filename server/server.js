const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5500
const enviroment = process.env.NODE_ENV || 'development'

// CONNECT TO DB
connectDB()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SAMPLE API ROUTE
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Test API response working' })
})

// API ROUTE FOR  GOALS
app.use('/api/goals', require('./routes/goals'))

// API ROUTE FOR  USERS
app.use('/api/users', require('./routes/users'))

// ERROR MIDDLEWARE
app.use(errorHandler)

// dotenv.config()
app.listen(port, () =>
  console.log(`SERVER RUNNING ON PORT ${port} in ${enviroment} mode`)
)
