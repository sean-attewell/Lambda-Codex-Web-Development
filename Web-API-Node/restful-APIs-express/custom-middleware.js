// takes in req res and next
// If you don't run the next() function, your browser will just spin loading rather than move on to the next middleware

// Any middleware can stop the request and send a response back to the client.
// when that happens, the rest of the middleware including the route handlers will not be executed


// Remebember if you server.use(logger), that's called global or application wide middleware
// Accessing any route should display the message in our console

// What if you want auth middleware to only fire when a specific route is requested?
// Plug it into the get!

// server.get('/mellon', auth, (req, res) => {
//   console.log('Gate opening...');
//   console.log('Inside and safe');
//   res.send('Welcome Traveler!');
// });

// The next within the auth middleware causes the next middleware to fire...
// Which in this case is the anonymous function straight after it in the sme 'server.get'!
// the one that console logs gate opening, inside and safe then sends welcome traveller.


// We'll write middleware that logs information about every request that comes into our server

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );

  next();
}

// Any middleware in the queue CAN modify both the request and response objects, but it's NOT required. So, in this case, we are not making changes to either.

// Any middleware in the queue can stop the request and send a response back to the client. 
// When that happens, the rest of the middleware, including the route handlers, will not work

// Calling the next() function signals to Express that the middleware has finished, and it should call the next middleware function. 
// If next() is not called and a response is not sent back to the client, the request will hang, and clients will get a timeout error. 
// So, make sure always to call next() or use one of the methods that send a response back like res.send() or res.json().

// Now let's add our shiny middleware to the queue! Right after server.use(express.json()); add the following line.
// server.use(logger);
// Hitting any of our endpoints will display some information about the request in the console.

// Congratulations, you know how to write custom middleware for Express!


// LOTR video example

// Start by defining a function that shows our current predicament at the console as the application loads.

function atGate(req, res, next) {
  console.log('At the gate, about to be eaten');

  next();
}

// Then add it as the first middleware in the queue.
server.use(atGate);

// This middleware is what's called global or application-wide middleware. 
// It applies to every endpoint in our server. Therefore, accessing any route in our server should display the message on the console.

// Now let's add the authentication middleware that only grants access if we hit the correct route; picking any other route is futile, so be careful!

function auth(req, res, next) {
  if (req.url === '/mellon') {
    next();
  } else {
    res.send('You shall not pass!');
  }
}

// Now let's add a route handler that leads to safety:

server.get('/mellon', auth, (req, res) => {
  console.log('Gate opening...');
  console.log('Inside and safe');
  res.send('Welcome Traveler!');
});

// What's new here is that we are adding our middleware as the second parameter and the route handler as the third. 
// Using middleware this way is what we call local middleware or route middleware. 
// It just means we are using middleware locally and only applies to the endpoint where it's added

// Yes this example is silly because the server.get only fires on the /mellon endpoint anyway, so no need to auth that the req.url says mellon

