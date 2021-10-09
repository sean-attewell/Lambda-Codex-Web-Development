// VIDEO NOTES

// To make sure things are upto date, run knex migrate latest.
// If you are already upto date it will just tell you that.

// $ npx knex migrate:latest
// Using environment: development
// Already up to date


// seed database with data
// primarily used for putting in test data to play with
// you want one seed file per table

// knex seed:make 01-users
// unlike migrations no timestamp is generated, order might matter so a good habit to put 01

// edit seed file

// npx knex seed:run

// check on SQLite and see they've both been added.

// if you add another user and npx knex seed:run again,
// then it won't duplciate entries because you're truncating first before adding them
// Might just get an error if you tried because of violating a 'unique' constraint of a field


// NON-VIDEO NOTES

// Often we want to pre-populate our database with sample data for testing. 
// Seeds allow us to add and reset sample data easily.

// FOLLOW ALONG
// The Knex command-line tool offers a way to seed our database; in other words, pre-populate our tables.

// Similarly to migrations, we want to customize where our seed files are generated using our knexfile

module.exports = {
  development: {
      client: 'sqlite3',
      connection: {
        filename: './data/produce.db3',
      },
      useNullAsDefault: true,
      // generates migration files in a data/migrations/ folder
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      }
    }
}

// To create a seed run: knex seed:make 001-seedName

// Numbering is a good idea because Knex doesn't attach a timestamp to the name like migrate does. 
// By adding numbers to the file name, we can control the order in which they run.

// We want to create seeds for our accounts table:

// knex seed:make 001-accounts

// A file will appear in the designated seed folder.

exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('accounts').truncate()
    .then(function () {
      // add data into insert
      return knex('accounts').insert([
        { name: 'Stephenson', budget: 10000 },
        { name: 'Gordon & Gale', budget: 40400 },
      ]);
    });
};


// Run the seed files by typing:

// knex seed:run

// You can now use SQLite Studio to confirm that the accounts table has two entries.


