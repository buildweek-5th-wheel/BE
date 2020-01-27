const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routes
const authRouter = require('./routes/authRouter')
const listingRouter = require('./routes/listingRouter')
const userRouter = require('./routes/userRouter')

// Setup Server
const server = express();

// Adds security to the http headers
server.use(helmet());
// Expect server to receive Json
server.use(express.json());
// Cross origin resource sharing
// Is to secure the exchange of data from origins outside current server
server.use(cors());

server.get('/', (req,res)=>{
    res.status(200).send('<h1>5th Wheel BE</h1><a href="https://documenter.getpostman.com/view/8573861/SVfMTWGg">Link to the API docs</a>')
})

// Declaring the routes, and what file they can be found in
server.use('/auth', authRouter)
server.use('/listings', listingRouter)
server.use('/users', userRouter)


// Exporting server to be used in index.js
module.exports = server;

