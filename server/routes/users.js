const express = require('express')
const router = express.Router()
const {
  registerUser,
  authenticateUser,
  getUserData,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', authenticateUser)
router.get('/me', protect, getUserData)

module.exports = router
