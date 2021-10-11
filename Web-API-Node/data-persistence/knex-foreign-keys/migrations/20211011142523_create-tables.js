
exports.up = function(knex) {
  // One farm has many ranchers
  return knex.schema.createTable('farms', tbl => {
    tbl.increments();
    tbl.string('farm_name', 128).notNullable();;
  })
  .createTable('ranchers', tbl => {
    tbl.increments();
    tbl.string('rancher_name', 128);
    // Foreign key that points to the farms table
    tbl.integer('farm_id')
    .unsigned() // integer must be positive
    .notNullable()
    .references('id')
    .inTable('farms');
  });
};

exports.down = function(knex) {
  // Have to drop tables in the opposite order you created them because of the foreign key
  // Think of shoes and socks...
  return knex.schema
    .dropTableIfExists('ranchers')
    .dropTableIfExists('farms');
};
