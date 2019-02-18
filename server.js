'usestrict';
//load dotenv to manage variables
require('dotenv').config();

//load express to do the heavy lifting of the server
const express = require('express');
const app = express();

//establishes port number
const PORT = process.env.PORT || 3000;

//tells express where to load our "html" files from
app.use(express.static('./public'));

//creats the routes (paths) that the user can access the server from
app.get('./hello', (request, response) => {
  response.status(200).send('Hello')
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

//adds catch-all to get routes that dont exist.
app.use('*', (request, response) => response.send(`Sorry, that route does not exist`));

//turn server on
app.listen(PORT, () => console.log(`listening on ${PORT}`));
