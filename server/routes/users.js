const express = require('express')
const router = express.Router()
const {
  registerUser,
  authenticateUser,
  getUserData,
} = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', authenticateUser)
router.get('/me', getUserData)

module.exports = router
