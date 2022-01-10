const models = require('../models')
const userController = {}


//  function to create a user from body in frontend

userController.createUser = async (req, res) => {
    try{
        const newUser = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({newUser})
    }catch (err) {
        res.json({err})
    }
}

//  function to create a login from body in frontend

userController.login = async (req, res) => {
    try{
        const user = await models.user.findOne({
            where: { email: req.body.email }
        })
        if(user.password === req.body.password) {
            res.json({user})
        } 
    }catch (err) {
        alert(err,'user password or email incorrect')
    }
}


userController.verifyUser = async (req, res) => {
    try{
        const user = await models.user.findOne({
            where: { id: req.headers.authorization }
          })
        if (user) {
            res.json({user})
        }
    }catch (err) {
        res.json({err})
    }
}


module.exports = userController