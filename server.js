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

//category Routes

const categoryRoute = require('./routes/categoryRoutes')
app.use('/category', categoryRoute)

const PORT =process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
    routesReport.print()
})