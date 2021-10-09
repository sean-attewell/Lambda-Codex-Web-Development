
exports.seed = function(knex) {
  // Truncates ALL existing entries
  // Unlike delete, truncate will reset our IDs
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'diandra', website: 'www,diandrasite.com' },
        {username: 'amy'}
      ]);
    });
};
