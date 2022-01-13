const express = require('express');
const categoryRoutes = express.Router()

const categoryController = require('../controllers/categoryController')

categoryRoutes.post('/:userId',categoryController.createToUser)
categoryRoutes.get('/all/:userId',categoryController.getAllCategories)
categoryRoutes.get('/:categoryId',categoryController.getOneCategory)
categoryRoutes.get('/:userId/:categoryId/recipes',categoryController.allRecipeInCategory)
categoryRoutes.put('/:categoryId/:recipeId',categoryController.recipeInCategory)
categoryRoutes.delete('/:categoryId/:recipeId',categoryController.removeRecipeInCategory)
categoryRoutes.delete('/:categoryId',categoryController.removeCategory)

module.exports = categoryRoutes