/* eslint-disable no-console */
// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
const controller = require('./controller.js');
const cors = require('cors');


// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 3007;


app.use(cors());
app.use(morgan('dev'));

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

// Serve static files. Any requests for specific files will be served if they exist
// in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products/:id', controller.getProduct);


// Start the server on the provided port
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
