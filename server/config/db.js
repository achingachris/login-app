const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log(
      `MongoDB connected: ${connection.connection.host}`.green.bold.underline
    )
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err.message}`.red.bold)
    process.exit(1)
  }
}

module.exports = connectDB
