// Update with your config settings.

module.exports = {

  development: {
    // the driver is different depending on dbms we are using. 
    // We need a third party library as bridge between knex and dbms we are using.
    // That's why we always install sqlite3 when we install knex.
    client: 'sqlite3', 
    connection: {
      filename: './users.db3'
    },
    useNullAsDefault: true
  },

};
