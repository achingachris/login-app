import express from 'express'
import dotenv from 'dotenv'

const port = process.env.PORT || 5000
const app = express()

dotenv.config()

app.listen(port, () => console.log(`SERVER RUNNING ON PORT ${port}`))
