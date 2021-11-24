// To test the data access, we'll write end to end tests. 
// These types of tests run slower because they perform operations and run queries against an actual database that is similar to the one used in production.

// To avoid polluting the development database, we'll use a separate database for testing. 
// One advantage of using a dedicated testing database is that we can add and remove records without affecting the data in the development or staging databases.

// Next, we'll walk through setting up our API to switch to the testing database based on an environment variable, 
// including setting a different value for that environment value only when running tests.


// Using cross-env
// Setting and using environment variables is different for Windows and POSIX (Mac, Linux, Unix) Operating Systems. 
// We can use cross-env (https://www.npmjs.com/package/cross-env). 
// This npm module deals with the OS inconsistencies and provides a uniform setting environment variables across all platforms.

// Open package.json and look at the test script. 
// It uses cross-env to set an environment variable with the key DB_ENV and the value: testing.

// "test": "cross-env DB_ENV=testing jest --watch"

// This environment variable is available to the API as process.env.DB_ENV. 
// The sample code provided uses it inside ./data/dbConfig.js to choose which configuration object to use for the knex connection.

// ./data/dbConfig.js
const knex = require('knex');

const config = require('../knexfile.js');

// if the environment variable is not set, default to 'development'
// this variable is only set when running the "test" npm script using npm run test
const dbEnv = process.env.DB_ENV || 'development';

// the value of dbEnv will be either 'development' or 'testing'
// we pass it within brackets to select the corresponding configuration
// from knexfile.js
module.exports = knex(config[dbEnv]);

// To make this work, knexfile.js has a dedicated configuration key for testing.


// ./knexfile.js
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/hobbits.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};


// Using Different Environments for Knex Migrations and Seeding

// Different databases have different configuration objects defined within knexfile.js. 
// To specify which environment to target during migrations and seeding use the --env command-line argument.

// To run migrations against the testing database, use the following command.

// npx knex migrate:latest --env=testing

// To run seeds against the testing database, use the following command.

// npx knex seed:run --env=testing


// Write End to End Tests that Involve the Database

// To test the data access code, execute the data access and verify that the database was updated correctly.
// In this example, the data access code has an .insert() method. Let's see how to test it.


// our connection to the database
const db = require('../data/dbConfig.js');

// the data access file we are testing
const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () => {
  describe('insert()', () => {
    it('should insert the provided hobbits into the db', async () => {
      // this code expects that the table is empty, we'll handle that below
      // add data to the test database using the data access file
      await Hobbits.insert({ name: 'gaffer' });
      await Hobbits.insert({ name: 'sam' });

      // read data from the table
      const hobbits = await db('hobbits');

      // verify that there are now two records inserted
      expect(hobbits).toHaveLength(2);
    });
  });
});

// To guarantee that the tables are cleared before running each test, add the following code before the test cases.

beforeEach(async () => {
  // this function executes and clears out the table before each test
  await db('hobbits').truncate();
});


// Implement code to make the tests pass (test driven development).

// ./hobbits/hobbitsModel.js
async function insert(hobbit) {
  // the second parameter here is of other databases, SQLite returns the id by default
  const [id] = await db('hobbits').insert(hobbit, 'id');

  return db('hobbits')
    .where({ id })
    .first();
}


// This test checks that two records are added to the table, even if those records were there at the beginning.
// Let's add another test to make sure that the record is making it to the database and that the .insert() method returns the newly inserted hobbit.

// note we're checking one hobbit at a time
it('should insert the provided hobbit into the db', async () => {
  
  let hobbit = await Hobbits.insert({ name: 'gaffer' });
  expect(hobbit.name).toBe('gaffer');

  // note how we're reusing the hobbit variable
  hobbit = await Hobbits.insert({ name: 'sam' });
  expect(hobbit.name).toBe('sam');
});
