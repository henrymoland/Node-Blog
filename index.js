const express = require('express');
const userdb = require('./data/helpers/userDb');
const postdb = require('./data/helpers/postDb');
const server = express();
const PORT = 5000;

// Middleware
server.use(express.json());



//Route handlers
server.get('/', (req, res) => {
    res.status(200).json ({message: 'Request recieved!'});
});

server.get('/users', (req, res) => {
    userdb.get()
        .then((users) => {
            res.json(users)
        })
        .catch(err => {
        res.status(400)
        .json({message: 'Could not get user'})
    });
});

// Server listening
server.listen(PORT, err => {
    console.log(`Server is listening on port ${PORT}`)
});