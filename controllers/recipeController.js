const models = require('../models')
const recipeController = {}


//creating a recipe from the info (req.body) passed by the frontend:

 recipeController.createRecipeToUser = async (req, res) => {
    
    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.userId
            }
        })
        const recipeUser = await user.createRecipe({

            apiId: req.body.apiId,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            picture: req.body.picture,
            name: req.body.name,
            diets: req.body.diets
        })
        res.json({recipeUser})
        


    }

    catch(err){
    res.json(err)
    }
}

// GET ALL THE RECIPES 

recipeController.getAllRecipes = async (req,res)=>{
    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.userId
            }
        })

        const recipes = await user.getRecipes()
        res.json(recipes)
    }
    catch(err){
        res.json(err)
    }
}
// GET 1 RECIPE FROM PARAM ID :

recipeController.getOneRecipe = async (req,res)=>{
    try{
      
        const recipe = await models.recipe.findOne({
            where:{
                id:req.params.recipeId
            }
        })
        res.json(recipe)
    }
    catch(err){
        res.json(err)
    }
}

// MODIFY ONE RECIPE AFTER IDENTIFING IT:

recipeController.modifyRecipe = async(req,res)=>{
    try{
        const recipe = await models.recipe.findOne({
            where:{
                id:req.params.recipeId
            }
        })
        const updateRecipe = await recipe.update({
            name:req.body.name,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            picture: req.body.picture
        })

        res.json(updateRecipe)
    }
    catch(err){
        res.json(err)
    }

}

// DELETE A RECIPE :


recipeController.deleteRecipe = async(req,res)=>{
    try{
        const recipe = await models.recipe.findOne({
            where:{
                id: req.params.recipeId
            }
        })
        await recipe.destroy() 

        res.json(recipe)
    }   
    catch(err){
        res.json(err)
    } 
} 
 module.exports = recipeController

