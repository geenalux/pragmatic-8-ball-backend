'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../package.json');

console.log(chalk.yellow("Opening database connection"));
const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// create the database instance that can be used in other database files
module.exports = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false
  }
)
// don't forget to run our models files and make all associations for our Sequelize objects (if you do it here consider circular references)
