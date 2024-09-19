const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
 res.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
 res.end(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, () => {
 console.log('Server is running on localhost port 3000');
});
