const tableName = 'contributions';

function insert(knex, params) {
  knex(tableName).insert(params);
}

function insertOrReplace(knex, params) {
  if (params.repository && params.user && params.line_count) {
    knex.raw(`Update repositories SET line_count WHERE repository=${params.repository} and user=${params.user}`);    
  }
}
/**
 *  Validate the parameters
 *
 *  The function parameter should be an Object, it should contain either 
 *  a user, either a repository field or both of them.
 *
 *  If only the user is provided, then all the contributions of 
 *  that user will be resolved. If only the repository is provided, than all the 
 *  users who contributed to that repository will be resolved. If both are provided, 
 *  then it will match the contribution of a particular user to a particular repo.
 *
 *  The functions resolves to an Array of contributions (when
 *  both a user and a repository identifier is passed, it will only have 1 element)
 *  Return the repository and user as well as an object (This requirement is just for the 
 *  sake of making up a problem, when you actually need this function, you will most likely 
 *  have the user or the repository Object in a whole)
 *  {
 *    line_count: 10,
 *    user: { id: 1, login: 'coconut', ... },
 *    repository: { id: 1, full_name: 'risingstack/repo', ... }
 *  }
 *  Use a single SQL query
 *  When you join the tables, there will be conflicting column names (id, html_url). 
 * Use the as keyword when selecting columns (eg. repository.id as repository_id) to avoid this
 */
// Contribution.read({ user: { id, login }, repository: { id, full_name } })
/**
 * Notes:
 * user is a reserved keyword in PG, use double quotes where you reference the table in a raw query
 * You can get the columns of a table by querying information_schema.columns, which can
 * be useful to select fields dinamically when joining tables, eg.:
 * SELECT column_name FROM information_schema.columns WHERE table_name='contribution';
 */
function read(knex, params, callback) {
  const repositories = knex.raw(``);
  callback(repositories);
}
module.exports = {
  insert,
  insertOrReplace,
  read
}