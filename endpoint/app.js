const express = require('express');

// create an instance of express application
const app = express();

const port = 80; 

const message = "My name is Sloane."

// define a route that returns a message with a timestamp.
app.get('/', (req, res) => {

  // dynamically generate a Unix style timestamp
  const timestamp = Date.now();

  const response = {
    message: message,
    timestamp: timestamp,
    test: 'Recent version'
  }
  res.send(response);
});

// start the server;
// express application will listen for incoming http requests on the given port
// no hostname specified, so accept requests on all available network interfaces -- 
// TODO: Any change required to accommodate github action test? 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
