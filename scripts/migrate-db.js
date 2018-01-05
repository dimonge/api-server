'use strict'
const dbConfig = require('../config');
const knex = require('knex');

const args = process.argv.slice(2);

if (args.includes('--local') || args.includes('-L')) {
  const user = dbConfig.PG_USER || 'petertest';
  const db = process.env.DB_NAME || 'git_stack';
  process.env.PORT = 3000;
  process.env.NODE_ENV = 'development';
  process.env.PG_URI = `postgresql://${user}:${user}@localhost:5432/${db}`;
}

const config = require('../config/db-config');

knex(config).migrate.latest()
  .then(() => {
    console.log('Database sync successfully');
    process.exit(0);
  }).catch(err => {
    console.log(`Error ${err}`);
    process.exit(1);
  });
