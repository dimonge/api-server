const tableName = 'repositories';

function insert(knex, params) {
  knex(tableName).insert(params);
}

function read(knex, params, callback) {
  if (params.id && params.full_name) {
    const repositories = knex.select('id', 'full_name')
      .from(tableName)
      .leftJoin('users', 'owners', 'users.id')
      .where({
        id: params.id,
        full_name: params.full_name,
      });
    callback(repositories);
  }
}

module.exports = {
  insert,
  read,
};
