# Recipe_backend
Packs needed to create this backend

1. cors (^2.8.5):
    Purpose: CORS (Cross-Origin Resource Sharing) is a middleware used in Express.js applications to enable or disable cross-origin requests. By default, web browsers block requests from different domains (or ports) for security reasons. The cors package allows you to specify which domains are allowed to access your server, making it possible for your frontend (running on a different domain or port) to interact with your backend.
    Usage:
        const cors = require('cors')
        app.use(cors({ origin: 'http://localhost:3000' }))
        


2. express (^4.17.2):
    Purpose: Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It allows you to handle routes, middleware, and HTTP requests easily, making it the backbone of many Node.js applications.

    Usage: Express simplifies the creation of server-side logic, routing, and handling of requests and responses.

        const express = require('express');
        const app = express();
        app.get('/', (req, res) => res.send('Hello World!'))
        app.listen(3000, () => console.log('Server running on port 3000'))



3. morgan (^1.10.0):
    Purpose: Morgan is an HTTP request logger middleware for Node.js. It logs details about incoming requests, such as the method, status code, and response time, to the console. This is useful for monitoring and debugging your server.
    Usage:
        const morgan = require('morgan')
        app.use(morgan('tiny'))



4. pg (^8.7.1):
    Purpose: pg is the official PostgreSQL client for Node.js. It allows your Node.js application to interact with a PostgreSQL database, executing queries and managing connections.
    Usage: Used in conjunction with ORM tools like Sequelize or directly to perform SQL queries.
        const { Client } = require('pg')
        const client = new Client()
        client.connect()
        client.query('SELECT * FROM users', (err, res) => {
        console.log(err ? err.stack : res.rows)
        client.end()
        })



5. rowdy-logger (^1.0.2):
    Purpose: rowdy-logger is a simple tool that logs the routes and HTTP methods of your Express application to the console. It’s helpful for quickly viewing the available routes in your application during development.
    Usage: Typically used to output a list of all routes at the start of your server.

        const rowdy = require('rowdy-logger')
        const routesReport = rowdy.begin(app)
        routesReport.print()



6. sequelize (^6.12.5):
    Purpose: Sequelize is a promise-based ORM (Object-Relational Mapper) for Node.js. It supports many SQL databases, including PostgreSQL, MySQL, SQLite, and MSSQL. Sequelize abstracts the underlying SQL operations and allows you to interact with your database using JavaScript objects rather than writing SQL queries.
    Usage: Sequelize is used to define models, set up associations, perform migrations, and query the database.

        const { Sequelize, DataTypes } = require('sequelize');
        const sequelize = new Sequelize('database', 'username', 'password', {
        host: 'localhost',
        dialect: 'postgres'
        })
        const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
        })



7. sequelize-cli (^6.3.0):
    Purpose: sequelize-cli is the command-line interface for Sequelize. It provides commands for managing your Sequelize project, such as generating models, running migrations, and creating seed files.
    Usage: Used for generating and running migrations, creating models, and handling other database-related tasks from the command line.
        npx sequelize-cli init
        npx sequelize-cli model:generate --name User --attributes username:string,password:string
        npx sequelize-cli db:migrate



Summary:
Express is the core web framework.
Sequelize and pg handle database operations.
Morgan logs HTTP requests.
CORS manages cross-origin requests.
rowdy-logger helps visualize routes.
sequelize-cli assists with ORM tasks via the command line.