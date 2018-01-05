/*
const expect = require('chai').expect;
const config = require('../../config/db-config');
const knex = require('knex')(config);

describe('Inserting', () => {  
  it ('should insert new user', () => {
    const user = {
      login: 'test',
      avatar_url: 'https://tes.td',
      html_url: 'http://urs.co',
      type: 'face',
    };
    const db = 'users';
    knex(db).insert(user);
    expect(knex(db).select('login').from(db)).to.eql('test');
  });
});*/
