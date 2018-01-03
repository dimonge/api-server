'use strict'

const tableName = 'user';

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
