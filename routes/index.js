//import express
const express = require('express');
const router = express.Router();

//member /index route
router.get('/', (request, response) => {
    response.send('Welcome to the Member Only Page')
});

//member/signin route
router.get('/signin', (request, response) => {
    response.send('Please SignIn with your Members Credentials')
});

//member/contact/VAR/VAR route
router.get('/contact/:number/:member', (request, response) => {
    response.send('Thanks ' + request.params.member + "! We will contact you shortly at " + request.params.number)
});

module.exports = router;