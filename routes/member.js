//import express
const express = require('express');
const router = express.Router();
const payment = require('../payment');

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

//member/getBalance route with return of function in payment.js
router.get('/getBalance', (request, response) => {
    response.send('Get Balance: ' + payment.getBalance())
});

//member/payBalance route with return of function in payment.js
router.get('/payBalance', (request, response) => {
    response.send('Pay Balance: ' + payment.payBalance())
});

//charge balance post request
router.post('/chargebalance', (request, response) => {
    response.send('charge balance post request')
});

//pay balance post request
router.post('/paybalance', (request, response) => {
    response.send('pay balance post request')
});

module.exports = router;