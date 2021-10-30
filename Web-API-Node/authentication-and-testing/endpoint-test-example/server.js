const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

module.exports = server;


// Notice we are not starting the server with server.listen(port), This is a common pattern. 
// We separate the server implementation from the code that runs the server