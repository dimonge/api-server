'use strict';
require('babel-register');

const app = require('./app');

app.listen(config.port, err => {
  if (err) throw Error(err);
  console.log('Listening to port', config.port)
});
