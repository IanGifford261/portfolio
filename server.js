'use strict';
// load dotenv to manage variables
require('dotenv').config();

// load express to do the heavy lifting of the server
const express = require('express');
const app = express();

// establich the PORT number
const PORT = process.env.PORT || 3000;

// tells express where to load our "html" files from
app.use(express.static('./public'));

// creates routes (paths) that the user can access the server from.
app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }

  response.status(200).json(airplanes);
});

app.get('/', (request, response) => {
  response.status(200).redirect('index.html');
});

// adds a catch all the get routes that don't exist
app.use('*', (request, response) => response.send(`Sorry, that route does not exist`));

// turn the server on

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

