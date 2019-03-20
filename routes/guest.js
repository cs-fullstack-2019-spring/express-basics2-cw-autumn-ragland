//import express
const express = require('express');
const router = express.Router();

//guest/index route
router.get('/', (request, response) => {
    response.send('Welcome to the Guest Support Page')
});

//guest/register route
router.get('/register', (request, response) => {
    response.send('Thank you for wanting to register for this site!')
});

//guest/contact/VAR route
router.get('/contact/:number', (request, response) => {
    response.send('We will contact you at ' + request.params.number + " Guest")
});


module.exports = router;