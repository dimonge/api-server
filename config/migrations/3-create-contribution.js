'use strict';

const tableName = 'contribution';
function up(knex) {
  return knex.schema.createTable(tableName, (table) => {

  });
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName);
}

module.exports = {
  up,
  down,
};
