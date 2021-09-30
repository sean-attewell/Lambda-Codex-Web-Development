// takes in req res and next
// If you don't run the next() function, your browser will just spin loading rather than move on to the next middleware

const { Server } = require('http');

// Any middleware can stop the request and send a response back to the client.
// when that happens, the rest of the middleware including the route handlers will not be executed


// Remebember if you server.use(logger), that's called global or application wide middleware
// Accessing any route should dsiplay the message in our console

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