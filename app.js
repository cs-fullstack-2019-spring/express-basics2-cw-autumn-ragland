//import express
const express = require('express');
const app = express();
//import routes
const member = require('./routes/member');
const guest = require('./routes/guest');

//mount routes
app.use('/member', member);
app.use('/guest', guest);

//root message
app.get('/', (request, response) => {
    response.send('Route to Member or Guest')
});

//run at port 8000
app.listen(8000, () => {
    console.log('local host 8000')
});