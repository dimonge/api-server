const expect = require('chai').expect;
const request = require('super-request');
const nock = require('nock');
const server = require('./index');
const github = require('./query');
const urlString = require('../config/url');

describe('GET /', () => {
  it('should return Hello world', async () => {
    const { body } = await request(server.listen())
      .get('/hello').expect(200).end();
    expect(body).to.eql('Hello Nodejs');
  });
});
/*
describe('Search gihub', () => {
  it ('should return a default object', () => {
    expect(github.searchRepositories()).to.eql({});
  });

  it ('should return programming language query', () => {
    expect(github.searchRepositories({q: 'language:javascript'})).to.eql({q: 'language:javascript'});
  });
});
*/
describe('GET github query', () => {
  it('should return an object', async () => {    
    const githubAPI = nock('https://api.github.com', {
      reqheaders: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': 'localhost:3000',
      },
    })
      .get('/search/repositories')
      .query({ q: 'language:javascript' })
      .reply(200, { items: [] });
    const result = await github.searchRepositories({ q: 'language:javascript' });
    //expect(githubAPI.isDone()).to.eql(true);
    expect(result).to.eql({ items: [] });
  });
});
// GET /repos/:owner/:repo/stats/contributors
describe('GET github contributors', () => {
  it('should return the contributor object', async () => {
    const githubAPI = nock(urlString.github.url, {
      reqheaders: {
        accept: 'application/vnd.github.v3+json',
        'user-Agent': 'localhost:3000',
      },
    })
      .get('/repos/dimonge/awesome-react/stats/contributors')
      .reply(200, {});

    const result = await github.getContributors('/dimonge/awesome-react/', {});
    //expect(githubAPI.isDone()).to.eql(true);
    expect(result).to.eql({});
  })
})
