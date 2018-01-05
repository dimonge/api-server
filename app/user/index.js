// const config = require('../../config/db-config');
// const knex = require('knex')(config);

const tableName = 'users';
// User.insert({ id, login, avatar_url, html_url, type })
function insert(knex, params) {
  knex(tableName).insert(params);
}

// User.read({ id, login })
function read(knex, params, callback) {
  if (params.id && params.login) {
    const user = knex.select('id', 'login')
      .from(tableName)
      .where({
        id: params.id,
        login: params.login,
      });
    callback(user);
  }
}

module.exports = {
  insert,
  read,
};
