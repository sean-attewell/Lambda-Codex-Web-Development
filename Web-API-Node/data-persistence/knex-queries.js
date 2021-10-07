// Raw SQL is a critical baseline skill. 
// However, Node developers generally use an Object Relational Mapper (ORM) or query builder to write database commands in a backend codebase. 
// Both ORMs and query builders are JavaScript libraries that allow us to interface with the database using a JavaScript version of the SQL language.

// For example, instead of a raw SQL SELECT:
// SELECT * FROM users;

// We could use a query builder to write the same logic in JavaScript:
db.select('*').from('users');

// Query builders are lightweight and easy to get off the ground, whereas ORMs use an object-oriented model and provide more heavy lifting within their rigid structure.

// We will use a query builder called knex.js.


// Knex Setup (see knex_example folder for it setup)
// To use Knex in a repository, we'll need to add two libraries:

// npm install knex sqlite3

// knex is our query builder library, and sqlite3 allows us to interface with a sqlite database. 
// We'll learn more about sqlite and other database management systems in the following module. For now, know that you need both libraries.

// Next, we use Knex to set up a config file:

const knex = require('knex');

const config = {
  client: 'sqlite3',
  connection: {
    filename: './data/posts.db3',
  },
  useNullAsDefault: true,
};

module.exports = knex(config);


// We need to call Knex and pass in a config object to use the query builder elsewhere in our code. 
// We'll be discussing knex configuration more in a future module. 
// Still, we only need the client, connection, and useNullAsDefault keys, as shown above. 
// The filename should point towards the pre-existing database file, which the .db3 extension can recognize.

// GOTCHA: The file path to the database should be with respect to the root of the repo, not the configuration file itself.

// Once Knex is configured, we can import the above config file anywhere in our codebase to access the database.

const db = require('../data/db-config.js');
// The db object provides methods that allow us to begin building queries.

// In Knex, the equivalent of SELECT * FROM users is:

db.select('*').from('users');
// There's a simpler way to write the same command:

db('users');
// Using this, we could write a GET endpoint.

router.get('/api/users', (req, res) => {
  db('users')
  .then(users => {
    res.json(users);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});
// NOTE: All Knex queries return promises.

// Knex also allows for a where clause. In Knex, we could write SELECT * FROM users WHERE id=1 as

db('users').where({ id: 1 });
// This method will resolve to an array containing a single entry like so: [{ id: 1, name: 'bill' }].

// Using this, we might add a GET endpoint where a specific user:

server.get('api/users/:id', (req, res) => {
  const { id } = req.params;

  db('users').where({ id })
  .then(users => {
    // we must check the length to find our if our user exists
    if (users.length) {
      res.json(users);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
  }})
  .catch (err => {
    res.status(500).json({ message: 'Failed to get user' });
  });
});

// INSERT using Knex
// In Knex, the equivalent of INSERT INTO users (name, age) VALUES ('Eva', 32) is:
db('users').insert({ name: 'Eva', age: 32 });
// The insert method in Knex will resolve to an array containing the newly created id for that user like so: [3].

// UPDATE using Knex
// In knex, the equivalent of UPDATE users SET name='Ava', age=33 WHERE id=3; is:
db('users').where({ id: 3 })
.update({name: 'Ava', age: 33 });
// Note that the where method comes before update, unlike in SQL.
// Update will resolve to a count of rows updated.

// DELETE using Knex
// In Knex, the equivalent of DELETE FROM users WHERE age=33; is:
db('users').where({ age: 33}).del();
// Once again, the where must come before the del. This method will resolve to a count of records removed.

