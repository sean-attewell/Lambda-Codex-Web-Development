const knex = require('knex');

// NOT BEST PRACTICE 
const config = {
  client: 'sqlite3',
  connection: {
    filename: './data/users.db3'
  },
  useNullAsDefault: true
}

const db = knex(config);

module.exports = db;