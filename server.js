/**
 * handling request with record count mongo from mongo database
 */
const { checkSchema } = require('express-validator');
const express = require('express');
const { recordCount } = require('./query/record-count');
require('./dao/mongoose');
const { validateResult } = require('./validation/result-validator');
const { validator } = require('./validation/count-request-scheme');
const app = express();
app.use(express.json());
app.post('/', [checkSchema(validator()), validateResult], recordCount);
module.exports = app;
