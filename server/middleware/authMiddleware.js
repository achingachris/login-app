const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user')

// token stored starts with 'Bearer '
// to get the token, we need to remove the 'Bearer ' part.
// turning it to an array and removing the first element, token is the second element, so access it with [1]
const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // get token from header
      // split at the space and get the second element
      token = req.headers.authorization.split(' ')[1]

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // get user from token
      // the token has user id in it(as the payload)
      // dont get the password and other sensitive data
      const user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  // if token is not present
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, No token provided')
  }
})

module.exports = {
  protect,
}
