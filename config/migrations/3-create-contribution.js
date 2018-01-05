'use strict';

const tableName = 'contributions';
function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.integer('user')
      .references('id')
      .inTable('users');
    table.integer('respository')
      .references('id')
      .inTable('repositories');
    table.integer('line_count');
  });
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName);
}

module.exports = {
  up,
  down,
};
