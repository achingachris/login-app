// register new user
const registerUser = (req, res) => {
  res.json({ message: 'Registering user' })
}

// authenticate user
const authenticateUser = (req, res) => {
  res.json({ message: 'Authenticate user' })
}

// get user's data
const getUserData = (req, res) => {
  res.json({ message: 'Get user Data' })
}

module.exports = {
  registerUser,
  authenticateUser,
  getUserData,
}
