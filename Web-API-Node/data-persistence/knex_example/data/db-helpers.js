const db = require('./db-config.js')

db.select('*').from('users')

// shortcut of above
db('users')
// resolves to an array of users (all methods on db object are promises)

db('users').where({id : 3});
// resolves to an array containing any users that match the where

db('users').insert({name: 'amanda', age: 76})
db('users').insert({name: 'Lama', age: 8})
// resolve to an array contaiing the id of the new user

db('users').where({id: 5}).update({age: 77});
// *** where comes before the update in KNEX unlike SQL
// resolve to the count of records updated


// Don't write delete without a where or you will delete all records from a table.

