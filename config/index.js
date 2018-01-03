'use strict';
let config = {};
if (process.env.NODE_ENV === 'development' && process.env.PROCESS_TYPE === 'web') {
  config = require('./env');
}
module.exports = config;
