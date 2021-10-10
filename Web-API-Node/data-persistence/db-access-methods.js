// FROM THE VID

// A good rule of thumb is that you want anything that deals directly with the database to be in a seperate file with separate methods.
// For example in a 'db-helpers' file.
// only access the db here
// db logic shouldn't be scattered around
// Better for testing - can test the endpoint logic and the db access helpers separately
// const db = require('./db-config.js')


// FROM THE NOTES

// While we can write database code directly into our endpoints, best practices dictate that all database logic exists in separate, modular methods. 
// These files containing database access helpers are often called models.

// To handle CRUD operations for a single resource, we would want to create a model (or database access file) containing the following methods:

function find() {
}

function findById(id) {
}

function add(user) {
}

function update(changes, id) {
}

function remove(id) {
}

// Each of these functions would use Knex logic to perform the necessary database operation.


function find() {
  return db('users');
}

// For each method, we can choose what value to return. For example, we may prefer findById() to return a single user object rather than an array.

function findById(id) {
// first() returns the first entry in the db matching the query
  return db('users').where({ id }).first();
}

// We can also use existing methods like findById() to help add() return the new user (instead of just the id).

function add(user) {
  db('users').insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}

// Once all methods are written as desired, we can export them like so:

module.exports = {
  find,
  findById,
  add,
  update,
}

// …and use the helpers in our endpoints

const User = require('./user-model.js');

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {});
});

// There should not be knex code in the endpoints themselves.



