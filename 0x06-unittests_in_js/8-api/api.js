const express = require('express');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
 response.send('Welcome to the payment system');
});

app.listen(port, () => {
   console.log("Server is running on localhost port 3000");
});

module.exports = app;
