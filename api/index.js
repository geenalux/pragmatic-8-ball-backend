'use strict'
const apiRouter = require('express').Router();
const db = require('../db');

// console.log("DB: ", db);
// console.log("db.models ", db.models);
// console.log("db.models.meal ", db.models.meal);

apiRouter.use('/meals', require('./meals'));

module.exports = apiRouter;