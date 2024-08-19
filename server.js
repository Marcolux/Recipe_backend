const express = require('express')
const app = express()

const routesReport = require('rowdy-logger').begin(app)

app.use(require('morgan')('tiny'))
app.use(require('cors')({ origin: 'http://localhost:3000' }));
// app.use(require('cors')())
app.use(express.json())


// Routes

app.get('/test', (req, res) => {
    res.send('Server is working!');
})

// User Routes
const userRoute = require('./routes/userRoutes')
app.use('/user', userRoute)

// Recipe Routes
const recipeRoute = require('./routes/recipeRoutes')
app.use('/recipe', recipeRoute)

// Category Routes
const categoryRoute = require('./routes/categoryRoutes')
app.use('/category', categoryRoute)

const PORT = process.env.PORT || 3002
app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`)
    routesReport.print()
})