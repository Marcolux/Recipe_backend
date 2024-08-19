const express = require('express');
const recipeRoutes = express.Router()
const recipeController = require('../controllers/recipeController')

recipeRoutes.post('/:userId',recipeController.createRecipeToUser)
recipeRoutes.get('/all/:userId',recipeController.getAllRecipes)
recipeRoutes.get('/:recipeId',recipeController.getOneRecipe)
recipeRoutes.put('/:recipeId',recipeController.modifyRecipe)
recipeRoutes.delete('/:recipeId',recipeController.deleteRecipe)

module.exports = recipeRoutes