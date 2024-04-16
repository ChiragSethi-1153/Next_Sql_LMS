const { authController } = require('../controller')

const router = require('express').Router()

router.post("/auth/signup", authController.signup)
router.post("/auth/login", authController.login)

module.exports = router 