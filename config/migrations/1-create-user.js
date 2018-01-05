'use strict'

const tableName = 'users';

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    // login: varchar(255)
    table.string('login');
    // avatar_url: varchar(255)
    table.string('avatar_url');
    // html_url: varchar(255)
    table.string('html_url');
    // type: varchar(255)
    table.string('type');
  });
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName);
}

module.exports = {
  up,
  down,
};
