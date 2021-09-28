// The express router module is built in middle ware that ships with express out of the box
// Used to organise web API code
// Growing resources and routes mean it's worth splitting into sub-applications to make it modular and easier to maintain/reason about

// mkdir creatures
// cd creatures
// npm init --y
// yarn add express
// ls should show package.json node_modules yarn.lock
// yarn add --dev nodemon
// (npm install -D nodemon)
// touch index.js
// code .

// in the package.json under scripts include a start command for yarn start
// "start": "nodemon index.js"



// An Express Router behaves like a mini Express application. 
// It can have its own Routing and Middleware, but it needs to exist inside an Express application. 
// Think of routers as a way of organizing Express applications–you write separate pieces that can later be composed together.

// index.js (main server file)
const express = require('express');

const server = express();

server.use('/', (req, res) => res.send('API up and running!'));

server.listen(8000, () => console.log('API running on port 8000'));

// Imagine that this application needs endpoints to see a list of users, get details for a single user, add users, modify existing users, and inactivate users.
// That is at least five endpoints for the user's resource alone.

// Let's rewrite it to separate the main server file from the file handling the routes for users

// /users/userRoutes.js
const express = require('express');

const router = express.Router(); // notice the Uppercase R

// this file will only be used when the route begins with "/users"
// so we can remove that from the URLs, so "/users" becomes simply "/"
router.get('/', (req, res) => {
  res.status(200).send('hello from the GET /users endpoint');
});

router.get('/:id', (req, res) => {
  res.status(200).send('hello from the GET /users/:id endpoint');
});

router.post('/', (req, res) => {
  res.status(200).send('hello from the POST /users endpoint');
});

// after the route has been fully configured, we then export it to be required where needed
module.exports = router; 


// How can we use it in our main file? Like so:

// index.js
const express = require('express');

const userRoutes = require('./users/userRoutes');
const productRoutes = require('./products/productRoutes');
const clientRoutes = require('./clients/clientRoutes');

const server = express();

server.use('/users', userRoutes);
server.use('/products', productRoutes);
server.use('/clients', clientRoutes);

server.listen(8000, () => console.log('API running on port 8000'));

// Much cleaner, we added three sets of endpoints to our server, where each needs only two lines of easy-to-read code.


// Another way to set it up would be to have a central router representing our API and import the routes. 
// This logic cleans up our main server file even more.

// /api/apiRoutes.js
const express = require('express');

// if the other routers are not nested inside /api then the paths would change
const userRoutes = require('./users/userRoutes');
const productRoutes = require('./products/productRoutes');
const clientRoutes = require('./clients/clientRoutes');

const router = express.Router(); // notice the Uppercase R

// this file will only be used when the route begins with "/api"
// so we can remove that from the URLs, so "/api/users" becomes simply "/users"
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/clients', clientRoutes);

// after the route has been fully configured, we then export it so it can be required where needed
module.exports = router; 

// As you can see, routers can use other routers.
// The userRoutes, productRoutes, and clientRoutes remain unchanged (other than relocating them inside the API folder).


// index.js
const express = require('express');

const apiRoutes = require('./api/apiRoutes');

const server = express();

server.use('/api', userRoutes);

server.listen(8000, () => console.log('API running on port 8000'));


// Video example

// raceRoutes.js
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const races = ['human', 'elf', 'hobbit', 'wizard', 'dwarf', 'orc'];

  res.status(200).json(races);
});

module.exports = router;


// index.js
const express = require('express');

const raceRoutes = require('./races/raceRoutes');

const server = express();

server.use('/races', raceRoutes);

server.use('/', (req, res) => res.send('API up and running!'));

server.listen(9000, () => console.log('API running on port 9000'));

