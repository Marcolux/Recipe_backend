const express = require('express');
const categoryRoutes = express.Router()

const categoryController = require('../controllers/categoryController')

categoryRoutes.post('/:userId',categoryController.createToUser)
categoryRoutes.get('/all/:userId',categoryController.getAllCategories)
categoryRoutes.get('/:categoryId',categoryController.getOneCategory)
// categoryRoutes.put('/:categoryId/:recipeId',categoryController)
// categoryRoutes.delete('/:categoryId',categoryController)

module.exports = categoryRoutes