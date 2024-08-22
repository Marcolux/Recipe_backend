const models = require('../models')
const userController = {}

// ===== Check if Email is already taken ===== \\
userController.checkEmail = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: { email: req.body.email }
        })

        if (user) {
            return res.status(200).json({ exists: true, message: "Email address already in use!" })
        } else {
            return res.status(200).json({ exists: false, message: "Email is available." })
        }

    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error', details: err });        
    }
}
// ===== Create a user from body in frontend ===== \\
userController.createUser = async (req, res) => {
    try {
        const newUser = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({newUser})
    } catch (err) {
        console.error("Error creating user:", err)       
    }
}

//===== Create a login from body in frontend ===== \\
userController.login = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: { email: req.body.email }
        })

        if (user.password === req.body.password) {
            res.json({user})
        } else { res.json({err}) }

    } catch (err) {
        res.json({err})
    }
}

userController.verifyUser = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: { id: req.headers.authorization }
        })
        if (user) {
            res.json({user})
        }
    } catch (err) {
        res.json({err})
    }
}


module.exports = userController