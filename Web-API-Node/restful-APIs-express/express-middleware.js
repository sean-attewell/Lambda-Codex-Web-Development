// Middleware is just a set of functions that extend software
// Adds features to Express
// Most code we write, including route handlers, is middleware

// Connect is a web application framework for Node.js that only provides the middleware layer
// Connect has been around a long time and has a rich ecosystem
// Express middleware is compatible with connect middleware

// There are different types of middleware; for our purposes, we'll group them into three different categories:

// Built-in middleware
// Third-party middleware
// Custom middleware

// Built-in Middleware
// Built-in middleware is included with Express but not added to the application automatically. 
// Like the other types, we need to opt-in to using it in our application.

// We saw an example of built-in middleware when we added support for parsing JSON content out of the request body using server.use(express.json());.

// Every type of middleware works in the same way. 
// We tell Express about the middleware we want to turn on for our application by making a call to .use() on our server and passing .use() the piece of middleware we want to apply. 
// This line must come after the server has been created by calling express().

// Third-party Middleware
// Third-party middleware are npm modules that we can install and then import into our applications using require(). 
// There are thousands of middleware modules we can use. There is no need to write our own in most cases.

// Some popular middleware modules are:

// morgan.
// cors.
// helmet.

// Custom Middleware
// Custom middleware is functions we write to perform specific tasks.


// One thing that is not immediately obvious is that route handlers are middleware. Let's see this in action.

// Suppose a client visits a non-existent endpoint in our current implementation. 
// In that case, they will get a default message when a resource is not found on the server. In the case of a browser, it's Cannot Get /urlWeTriedToAccess. 
// This default message makes for a poor user experience.
// So please code along as we write a request handler that responds with a custom message for invalid URLs.

// function(req, res) {
//   res.status(404).send("Ain't nobody got time for that!");
// };

// This code is not complete yet, but you can see that it is, in fact, a request handler function. We know because the homies (req and res) are there.
// Now let's just use it as if it was middleware:

server.use(function(req, res) {
  res.status(404).send("Ain't nobody got time for that!");
});

// Almost there! The last step is adding this status after each route handler.
// That way, if the preceding middleware or route handlers do not respond to the request, this will become our catch-all and respond with the correct HTTP status code and a helpful message.
// Now, requests to non-existent endpoints will result in a better experience for our clients.





