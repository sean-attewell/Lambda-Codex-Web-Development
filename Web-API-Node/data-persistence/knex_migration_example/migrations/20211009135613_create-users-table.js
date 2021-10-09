
exports.up = function(knex) {
  // the change we want to make to our schema
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.text('username', 128)
      .unique()
      .notNullable();
    tbl.text('website');
  })
};

exports.down = function(knex) {
  // undoing that change
  return knex.schema.dropTableIfExists('users');
};
