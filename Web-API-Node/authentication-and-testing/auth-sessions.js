// Sessions provide a way to persist data across requests. 
// For example, we'll use them to save authentication information, so there is no need to re-enter credentials on every new request the client makes to the server.

// When using sessions, each client will have a unique session stored on the server.

// Now that we have a solution for keeping authentication information, we need to transmit that information between the client and server. 
// For that, we'll use cookies.

// AUTHENTICATION WORKFLOW FOR SESSIONS
// The basic workflow when using a combination of cookies and sessions for authentication is:

// Client sends credentials
// Server verifies credentials
// Server creates a session for the client
// Server produces and sends back a cookie
// Client stores the cookie
// Client sends the cookie on every request
// Server verifies that the cookie is valid
// Server provides access to resource

// To understand how cookies are transmitted and stored in the browser, we need to look at the basic structure of an HTTP message. 
// Every HTTP message, be it a request or a response, has two main parts: the headers and the body.

// The headers are a set of key/value stores that include information about the request. 
// There are several standard headers, but we can add our own if needed.

// To send cookies, the server adds the Set-Cookie header to the response like so: "Set-Cookie": "session=12345". 
// Notice how the value of a header is just a string. 
// The browser will read the header and save a cookie called session with the value 12345 in this example. 
// We will use a library that takes care of creating and sending the cookie.

// The body contains the data portion of the message.

// The browser will add the "Cookie": "session=12345" header on every subsequent request and the server.

// Cookies are not accessible from JavaScript or anywhere because they are cryptographically signed and very secure.

// There are sever libraries for handling sessions in Node.js, below are two examples:

// client-sessions
// express-session

// We will use the latter.


// Common Ways to Store Session Data on the Server:
// Memory
// Memory cache (like Redis and Memcached)
// Database

// Cookies
// Automatically included on every request
// Unique to each domain + device pair
// Cannot be sent to a different domain
// Sent in the cookie header
// Has a body that can have extra identifying information
// Max size around 4KB

// Storing Session Data in Memory
// Data stored in memory is wiped when the server restarts.
// Causes memory leaks as more memory is used as the application continues to store data in session for different clients
// Good for development due to its simplicity


// Using cookies to transfer session data.
// Advantages when using cookies:
// A cookie is a small key/value pair data structure passed back and forth between client and server and stored in the browser
// The server uses it to store information about a particular client/user

// Workflow for using cookies as session storage:
// The server issues a cookie with an expiration time and sends it with the response
// Browsers automatically store the cookie and send it on every request to the same domain
// The server can read the information contained in the cookie (like the username)
// The server can make changes to the cookie before sending it back on the response
// Rinse and repeat

// Express-session uses cookies for session management.

// Drawbacks when using cookies:
// Small size, around 4KB
// Send in every request, increasing the request size if too much information is stored in them
// If an attacker gets a hold of the private key used to encrypt the cookie, they could read the cookie data


// Storing Session Data in Memory Cache (Preferred Way of Storing Sessions in Production Applications)
// Stored as key-value pair data in a separate server
// The server still uses a cookie, but it only contains the session id
// The memory cache server uses that session id to find the session data

// Advantages:
// Quick lookups
// Decoupled from the API server
// A single memory cache server can serve many applications
// Automatically remove old session data

// Drawbacks:
// Another server to set up and manage
// Extra complexity for small applications
// Hard to reset the cache without losing all session data

// Storing Session Data In a Database
// Similar to storing data in a memory store
// The session cookie still holds the session id
// The server uses the session id to find the session data in the database
// Retrieving data from a database is slower than reading from a memory cache
// It causes chatter between the server and the database
// Need to manage/remove old sessions manually, or the database will be filled with unused session data. Most libraries now manage this for you.

// Here is a list of express-session compatible stores
// https://github.com/expressjs/session#compatible-session-stores

// FOLLOW ALONG (vid on this actually good)
// Let's add session support to our Web API:

const { Router } = require('express');
const session = require('express-session');

// configure express-session middleware
server.use(
  session({
    name: 'notsession', // default is connect.sid
    secret: 'nobody tosses a dwarf!',
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: true, // only set cookies over https. Server will not send back a cookie over http.
    }, // 1 day in milliseconds
    httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    resave: false,
    saveUninitialized: false,
  })
);

// The resave option forces the session to be saved back to the session store, even if the session wasn't modified during the request.

// The saveUninitialized flag, forces a session that is "uninitialized" to be saved to the store. 
// A session is uninitialized when it is new but not modified. 
// Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie.

// Now we can store session data in one route handler and read it in another.

app.get('/', (req, res) => {
  req.session.name = 'Frodo';
  res.send('got it');
});

app.get('/greet', (req, res) => {
  const name = req.session.name;
  res.send(`hello ${req.session.name}`);
});

// The server sends back a session id with every response, and the client then sends back that session id on every request.

// express-session uses in-memory storage by default.

// Note how we generalize the session cookie's name, to make it harder for attackers to know which library we're using to manage our sessions. 
// This is akin to using a helmet to hide the X-Powered-By=Express header.


// In the vid they set a session only after verifying the password with bcrypt
// They then check for req.session.user in restrited middleware, continuing with next() only if it's present. (see blow logout)

const router = require('express').Router()
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

Router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({
          message: `Welcome ${user.username}!`,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' })
      }
    })
    .catch( error => {
      res.status(500).json(error);
    });
});




// LOGOUT

// From vid:
// If you restart the server when logged in, you won't be logged in anymore 
// This is because the session is stored in memory, so the session information is lost


// Sessions remain active until they reach the expiration time configured when they were created, 
// but we need to invalidate the session immediately when a user logs out.

// We can do this by removing the session from our session store. Each library does it differently.

// FOLLOW ALONG
// Add the following code for the logout endpoint:

server.get('/api/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send('error logging out');
      } else {
        res.send('good bye');
      }
    });
  }
});


// Protecting endpoints with local middleware

// Restricting access to endpoints is a two-step process:

// We write middleware to check that there is a session for the client.
// We place that middleware in front of the endpoints we want to restrict.

// FOLLOW ALONG
// We'll start by writing a piece of middleware we can use locally to restrict access to protected routes.

function protected(req, res, next) {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).json({ message: 'you shall not pass!!' });
  }
}

// This middleware verifies that we have a session and that the userId is set. 
// Remember we're only setting the session userId if the password matches with bcrypt
// We could use username or any other value to verify access to a resource.

// Then, we add that middleware to the endpoints we'd like to protect.

server.get('/api/users', protected, (req, res) => {
  db('users')
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// The /api/users endpoint is only accessible when the client is logged in.

