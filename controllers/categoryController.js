const models = require('../models')
const categoryController = {}

categoryController.createToUser = async (req, res) => {
    
    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.userId
            }
        })
        const categoryUser = await user.createCategory({
            name: req.body.name
        })
        res.json({categoryUser})


    }

    catch(err){
    res.json(err)
    console.log(`can't create category`)
    }
}

categoryController.getAllCategories = async (req,res)=>{
    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.userId
            }
        })

        const categories = await user.getCategories()
        res.json(categories)
    }
    catch(err){
        res.json(err)
        console.log(`can't find the categories`)
    }
}


categoryController.getOneCategory = async (req,res)=>{
    try{
       
        const category = await models.category.findOne({
            where:{
                id:req.params.categoryId
            }
        })
        res.json(category)
    }
    catch(err){
        res.json(err)
        console.log(`can't find that category`)
    }
}
module.exports =categoryController