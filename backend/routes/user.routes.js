const {userController} = require('../controller')
const { verifyToken } = require('../middleware/auth')

const router = require('express').Router()

// router.post('/users', verifyToken, issueController.createIssue)
router.get('/users',  userController.getAllUsers)
router.get('/users/:userId', verifyToken, userController.getUser)


module.exports = router