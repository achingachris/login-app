const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

const port = process.env.PORT || 5500
const enviroment = process.env.NODE_ENV || 'development'

// SAMPLE API ROUTE
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Test API response working' })
})

// dotenv.config()
app.listen(port, () =>
  console.log(`SERVER RUNNING ON PORT ${port} in ${enviroment} mode`)
)
