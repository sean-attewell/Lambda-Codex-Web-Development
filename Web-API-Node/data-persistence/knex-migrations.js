// *** Might need to update my globally installed knex as some commands didn't work.
// *** Can use npx knex [insert command here] instead which works fine

// Knex provides a schema builder, which allows us to write code to design our database schema. 
// However, beyond thinking about columns and constraints, we must also consider updates.

// When a schema needs to be updated, a developer must feel confident that the changes go into effect everywhere. 
// This means schema updates on the developer's local machine, on any testing or staging versions, on the production database, and then on any other developer's local machines. 
// This is where migrations come into play.

// A database migration describes changes made to the structure of a database. 
// Migrations include things like adding new objects, adding new tables, and modifying existing objects or tables

// Migration files are like snapshots in time - you wouldn't edit the migration file (stored in the migrations table)
// If you need to change the schema down the road you'd want to generate a new migration file to do that

// They're designed for easy rollback (that's why we write our down function)
// So if we ever decided the migration change to our database was not a good idea, we could run knex migrate:rollback

// FOLLOW ALONG

// mkdir knex_migration_example
// cd knex_migration_example
// npm init -y

// Knex Cli
// To use migrations (and to make Knex setup easier), we need to use knex cli. 
// Install knex globally with npm install -g knex.

// This allows you to use Knex commands within any repo that has Knex as a local dependency. 
// *** If you have any issues with this global install, you can use the npx knex command instead.

// Initializing Knex
// To start, add the knex and sqlite3 libraries to your repository.

// npm install knex sqlite3
// aliases for nmp install: npm i, npm add

// We've seen how to use manually create a config object to get started with Knex, but the best practice is to use the following command:

// knex init

// Or, if Knex isn't globally installed:
// npx knex init

// This command will generate a file in your root folder called knexfile.js. 
// It will be auto populated with three config objects, based on different environments. 
// We can delete all except for the development object.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  }
};


// We'll need to update the location (or desired location) of the database as well as add the useNullAsDefault option. 
// The latter option prevents crashes when working with sqlite3.

module.exports = {

  development: {
    // our DBMS driver
    client: 'sqlite3',
    // the location of our db
    connection: {
      filename: './data/database_file.db3',
    },
    // necessary when using sqlite3
    useNullAsDefault: true
  }
};

// Now, wherever we configure our database, we may use the following syntax instead of hardcoding in a config object.

const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

// export for use in codebase
module.exports = db;

// Knex Migrations
// Once our knexfile is set up, we can begin creating migrations. 
// Though it's not required, we are going to add an addition option to the config object to specify a directory for the migration files.

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
      }
    }
}
// We can generate a new migration with the following command:

// knex migrate:make [migration-name]

// If we needed to create an accounts table, we might run:

// knex migrate:make create-accounts

// Note that inside data/migrations/ a new file has appeared. 
// Migrations have a timestamp in their filenames automatically. 
// Whether you like this or not, do not edit migration names.

// The migration file should have both an up and a down function.
// Within the up function, we write the intnended database changes. 
// Within the down function, we write the code to undo the up functions. 
// This allows us to undo any changes made to the schema if necessary.

exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema.createTable('accounts', tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl.text('name', 128).unique().notNullable();
    // creates a numeric field called budget which is required
    tbl.decimal('budget').notNullable();
  });
};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema.dropTableIfExists('accounts');
};

// References for these methods are found in the schema builder section of the Knex docs.
// At this point, the table is not yet created. To run this (and any other) migrations, use the command:

// knex migrate:latest

// Note if the database does not exist, this command will auto-generate one. 
// We can use SQLite Studio to confirm that the accounts table has been created.


// Changes and Rollbacks
// If we realize you need to update your schema later down the road, you shouldn't edit the migration file. 
// Instead, you will want to create a new migration with the command:

// knex migrate:make accounts-schema-update

// Once we've written our updates into this file, we save and close with:

// knex migrate:latest

// If we migrate our database and then quickly realize something isn't right, we can edit the migration file.
// However, first, we need to rollback (or undo) our last migration with:

// knex migrate:rollback

// Finally, we are free to rerun that file with knex migrate latest.

// Note: A rollback should not be used to edit an old migration file once that file has been accepted into a main branch. 
// However, an entire team may use a rollback to return to a previous version of a database.

