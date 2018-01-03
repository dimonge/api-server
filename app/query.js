const rq = require('request-promise-native');
const urlString = require('../config/url');
const {
  url,
  searchRepositoriesUrl,
} = urlString.github;
module.exports = {
  searchRepositories: (search = {}) => { // GET /search/repositories?q=
    const options = {
      url: url + searchRepositoriesUrl,
      qs: search,
      json: true,
      headers: {
        host: url,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'localhost:3000',
      },
    };
    return rq(options);
  },
  getContributors: (repositories, query) => { // GET /repos/:owner/:repo/stats/contributors
    const options = {
      url: url + '/repos' + repositories + 'stats/contributors',
      qs: query,
      json: true,
      headers: {
        host: url,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'localhost:3000',
      },
    };
    return rq(options);
  },
};
