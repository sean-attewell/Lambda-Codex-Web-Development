// The Knex query builder library also allows us to create multi-table schemas that include foreign keys. 
// However, when designing a multi-table schema, there are a few extra things to keep in mind, 
// such as using the correct order when creating tables, dropping tables, seeding data, and removing data.


// *** See knex-foreign-keys folder ***

// navigate into folder

// npm init -y

// npm i knex sqlite3

// npx knex init

// Foreign Key Setup
// In Knex, foreign key restrictions don't automatically work. 
// Whenever using foreign keys in your schema, add the following code to your knexfile. 
// This will prevent users from entering bad data into a foreign key column.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/database.db3',
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },
}

// Migrations
// Let's look at how we might track our farms and ranchers using Knex. 
// In our migration file's up function, we would want to create two tables:

// knex migrate:make create-tables

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('farms', tbl => {
      tbl.increments();
      tbl.string('farm_name', 128)
        .notNullable();
    })
    // we can chain together createTable
    .createTable('ranchers', tbl => {
      tbl.increments();
      tbl.string('rancher_name', 128);
      tbl.integer('farm_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('farms')
    })
};

// Note that the foreign key can only be created after the reference table.

// In the down function, the opposite is true. We always want to drop a table with a foreign key before dropping the table it references.

exports.down = function(knex, Promise) {
  // drop in the opposite order
  return knex.schema
    .dropTableIfExists('ranchers')
    .dropTableIfExists('farms')
};

// npx knex migrate:latest


// In the case of a many-to-many relationship, the syntax for creating an intermediary table is identical, except for one additional piece. We need a way to make sure our combination of foreign keys is unique.

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('farm_animals', tbl => {
      tbl.integer('farm_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('farms')
      tbl.integer('animal_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('animals')

      // the combination of the two keys becomes our primary key
      // will enforce unique combinations of ids
      tbl.primary(['farm_id', 'animal_id']);
    });
}


// Seeds
// Order is also a concern when seeding. 
// We want to create seeds in the same order we created our tables. 
// In other words, don't create a seed with a foreign key until that reference record exists.

// In our example, make sure to write the 01-farms seed file and then the 02-ranchers seed file.

// However, we run into a problem with truncating our seeds, because we want to truncate 02-ranchers before 01-farms. 
// A library called knex-cleaner provides an easy solution for us.

// Run knex seed:make 00-cleanup and npm install knex-cleaner. Inside the cleanup seed, use the following code.

const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate', // resets ids
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  });
};

// This removes all tables (excluding the two tables that track migrations) in the correct order before any seed files run.


// Cascading
// If a user attempt to delete a record that is referenced by another record (such as attempting to delete Morton Ranch when entries in our ranchers table reference that record), by default, the database will block the action. The same thing can happen when updating a record when a foreign key reference.

// If we want that to override this default, we can delete or update with cascade. With cascade, deleting a record also deletes all referencing records, we can set that up in our schema.

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('ranchers', tbl => {
        tbl.increments();
        tbl.string('rancher_name', 128);
        tbl.integer('farm_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('farms')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
}