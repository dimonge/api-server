'use strict';
const Koa = require('koa');
const config = require('../config');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const query = require('./query');

router.get('/hello', (ctx) => {
  ctx.body = 'Hello Nodejs';
});
router.get('/q?:lang', query.searchRepositories);

app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
