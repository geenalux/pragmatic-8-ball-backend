'use strict';

const db = require('./db/models')
const PORT = process.env.PORT || 8080;

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();
const socketio = require('socket.io')

const server = app.listen(PORT, () => console.log(`Pragmatic 8 ball awaits on port ${PORT}`))

  // set up our socket control center
const io = socketio(server)
require('./socket')(io)

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static middleware

app.use('/api', require('./api')); // include our routes!

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
.then(() => {
  console.log('db synced')
});

module.exports = app;
//This was all copied from the senior enrichment project
