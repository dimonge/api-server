'use strict';

const tableName = 'repositories';

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    // foreign keys to user table
    table.integer('owner')
      .references('id')
      .inTable('users');
    table.string('full_name');
    table.string('description');
    table.string('html_url');
    table.string('language');
    table.integer('stargazers_count');
  });
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName);
}

module.exports = {
  up,
  down,
};

