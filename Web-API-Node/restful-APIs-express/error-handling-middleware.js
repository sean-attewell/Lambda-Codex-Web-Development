// Express knows that when next() is passed an error, it should find the middleware that is handling your errors
// It then passes along the err supplied to next, into the middleware 
// Error handling middleware has a fourth argument 'err' (err, req, res, next) where the passed along err can be found


// When our application encounters an error in the middle of executing middleware code, we can choose to hand over control to error handling middleware by calling next() with one argument. 
// It is a standard convention to make that argument be an error object like this: next(new Error("error message")).

// This middleware type takes four arguments: error, req, res, and next. 
// We pass the first argument when calling next(new Error('error message here')). 
// When the error handling code is finished, we can choose to end the request or call next without arguments to continue to the next regular middleware.

// Error handling middleware can be placed anywhere in the stack, but it makes the most sense to put it at the end. 
// Suppose the intention is for middleware to handle errors that may occur elsewhere in the queue.
// In that case, it needs to run after the rest of the middleware has run.


// let's write an endpoint that sends a file to the client in response to a GET request to the /download endpoint.

const express = require('express');
const path = require('path');

const server = express();

server.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

server.listen(5000);


// If we run our server and make a GET request to /download, the server will crash since there is no index.html file to send. 
// We need to rewrite our endpoint and take advantage of the fact that res.sendFile supports passing a callback function as a second argument.
// This callback function will run after the file is sent. 
// It will also run if there is an error in the process of sending the file.

// note we added the third parameter here: next
server.get('/download', (req, res, next) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath, err => {
    // if there is an error the callback function will get an error as it's first argument
    if (err) {
      // we could handle the error here or pass it down to error-handling middleware like so:
      next(err); // call the next error-handling middleware in the queue
    } else {
      console.log('File sent successfully');
    }
  });
});


// Now let's add error-handling middleware to our server. 
// We can create the middleware function and then use it like any other middleware or do it inline. Below an example of using it inline.

server.use((err, req, res, next) => {
  console.error(err);

  res
    .status(500)
    .json({ message: 'There was an error performing the required operation' });
});

// This middleware will only get called if any other middleware or route handler that comes before it has called next() with an argument like in the /download endpoint above.


// The complete code for our server now look like so:

const express = require('express');
const path = require('path');

const server = express();

server.get('/download', (req, res, next) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath, err => {
    // if there is an error the callback function will get an error as it's first argument
    if (err) {
      // we could handle the error here or pass it down to error-handling middleware like so:
      next(err); // call the next error-handling middleware in the queue
    } else {
      console.log('File sent successfully');
    }
  });
});

server.use((err, req, res, next) => {
  console.error(err);

  res
    .status(500)
    .json({ message: 'There was an error performing the required operation' });
});

server.listen(5000);

// Open your browser and visit http://localhost:5000/download, and the error message coming from our error-handling middleware should display.