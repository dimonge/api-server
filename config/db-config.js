// Edit the config and specify the migrations field in the knex initialization Object, for example:
const path = require('path');

module.exports = {
  client: 'pg',
  connection: process.env.PG_URI,
  migrations: {
    directory: path.join(__dirname, './migrations'),
  },
};
