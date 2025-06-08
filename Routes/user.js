const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/user')


router.post('/signUp',UserController.SignUp)
router.post('/login',UserController.SignIn)
router.post('/logout',UserController.logout)

module.exports = router