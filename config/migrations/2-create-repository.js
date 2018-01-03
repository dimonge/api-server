'use strict';

const tableName = 'repository';

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

