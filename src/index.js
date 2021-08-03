const express = require('express');
require('dotenv').config();

// Express App
const app = express()

// Connect to MongoDB
const {dbConnection} = require('./database/config');
dbConnection();

// Read and parse body responses
app.use(express.json());

// Routes
app.use('/api', require('./routes/routes'));

// Create server
const server = require('http').createServer(app);

server.listen(process.env.PORT, (err) => {
    if(err) throw new Error(err);

    console.log('Server running on port', process.env.PORT);
});