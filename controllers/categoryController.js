const models = require('../models')
const categoryController = {}


// CREATE A CATEGORY FOR USER
categoryController.createToUser = async (req, res) => { 
    try {
        const user = await models.user.findOne({
            where:{
                id:req.params.userId
            }
        })
        const categoryUser = await user.createCategory({
            name: req.body.categoryName
        })
        res.json({categoryUser})

    } catch(err) {
        res.json(err)
    }
}

// GET ALL THE CATEGORIES ASSOCIATED TO ONE USER
categoryController.getAllCategories = async (req,res)=>{
    try {
        const user = await models.user.findOne({
            where:{
                id:req.params.userId
            }
        })
        const categories = await user.getCategories()
        res.json(categories)

    } catch(err) {
        res.json(err)
    }
}

// GET ONE SPECIFIC CATEGORY :
categoryController.getOneCategory = async (req,res)=>{
    try {      
        const category = await models.category.findOne({
            where:{
                id:req.params.categoryId
            }
        })
        res.json(category)

    } catch(err) {
        res.json(err)
    }
}

// CREATE THE ASSOCIATIONS BETWEEN THE CATEGORY AND THE RECIPES:
categoryController.recipeInCategory = async (req,res)=>{
    
    try {     
        const category = await models.category.findOne({
            where:{
                id:req.params.categoryId
            }
        })
        const recipe = await models.recipe.findOne({
            where:{
                id:req.params.recipeId
            }
        })
        const addRecipeToCategory = await category.addRecipes(recipe)
        res.json(addRecipeToCategory)

    } catch(err) {
        res.json(err)
    }
}

// GET ALL THE RECIPES ASSOCIATED TO A SPECIFIC CATEGORY:
categoryController.allRecipeInCategory = async (req,res)=>{
    try {
        const category = await models.category.findOne({
            where:{
                id:req.params.categoryId,
                userId:req.params.userId
            }
        })
        const recipiesFromCategory = await category.getRecipes()
        res.json(recipiesFromCategory)

    } catch(err) {
        res.json(err)
    }
}

// REMOVE A RECIPE FROM A CATEGORY:
categoryController.removeRecipeInCategory = async (req,res)=>{
    try {
        const category = await models.category.findOne({
            where:{
                id:req.params.categoryId
            }
        })
        const recipe = await models.recipe.findOne({
            where:{
                id:req.params.recipeId
            }
        })
        await category.removeRecipe(recipe)
        res.json(recipe)

    } catch(err) {
        res.json(err)
    }
}


// COMPLETELY REMOVE A CATEGORY AND THE ASSOCIATIONS FOR THAT SPECIFIC CATEGORY IN THE JOIN TABLE :
categoryController.removeCategory = async (req,res) => {
    try {
        const category = await models.category.findOne({
            where:{
                id:req.params.categoryId
            }
        })
        await models.categoryRecipe.destroy({
            where:{
                categoryId:req.params.categoryId
            }
        })
            
        await category.destroy()
        res.json(category)

    } catch(err) {
        res.json(err)
    }
}
module.exports = categoryController