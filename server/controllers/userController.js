const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user')

// register new user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  // check if all fields are filled
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please fill in all fields')
  }

  // check if user already exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // hash password
  const salt = await bcrypt.genSalt(20)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create new user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('User could not be created, Invalid credentials/data')
  }
})

// authenticate user
const authenticateUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Authenticate user' })
})

// get user's data
const getUserData = asyncHandler(async (req, res) => {
  res.json({ message: 'Get user Data' })
})

module.exports = {
  registerUser,
  authenticateUser,
  getUserData,
}
