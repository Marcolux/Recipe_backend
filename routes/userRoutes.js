const express = require('express');
const userRoutes = express.Router()
const userController = require('../controllers/userController')

userRoutes.post('/', userController.createUser)
userRoutes.post('/checkEmail', userController.checkEmail)
userRoutes.post('/login', userController.login)
userRoutes.get('/verify', userController.verifyUser)

module.exports = userRoutes