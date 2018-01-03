"use strict";

const joi = require('joi');
const path = require('path');

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .required(),
  PORT: joi.string().required(),
  GITHUB: joi.string(),
}).unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  gihub_url: envVars.GITHUB,
  knexDBParams,
};

module.exports = config;
