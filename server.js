const express = require('express');
const axios = require('axios');

// INITIALIZE EXPRESS
const app = express();

// GRAB DATA
let customers = [];
axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(res => (customers = res.data))
  .catch(error => console.log(error));

// ROUTES
app.get('/api/customers', (req, res) => {
  res.send(customers);
});

// PORT
const port = 5000;

// START SERVER
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
