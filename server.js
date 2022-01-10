const express =require('express')
const app = express()

const routesReport = require('rowdy-logger').begin(app)

app.use(require('morgan')('tiny'))
app.use(require('cors')())
app.use(express.json())


// Routes

// user Routes

const userRoute = require('./routes/userRoutes')
app.use('/user', userRoute)

//recipe Routes
const recipeRoute = require('./routes/recipeRoutes')
app.use('/recipe', recipeRoute)


app.listen(3001, ()=>{
    routesReport.print()
})