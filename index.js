'use strict'; 

const db = require('./db/models')
// const app = require('./server')
const PORT = 1337;

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
// .then(() => {
//   console.log('db synced')
//   app.listen(PORT, () => console.log(`meatily serving meaty meats on port ${PORT}`))
// });
//Move this^ down to the bottom

//
// ??
//


const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();

console.log("I should be meat Third!");
//logging middleware
app.use(volleyball);
console.log("HERE");
//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("THERE");

//static middleware
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api')); // include our routes!

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// }); // Send index.html for any other requests

console.log("MEAT");
//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
.then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`meatily serving meaty meats on port ${PORT}`))
});

module.exports = app;
//This was all copied from the senior enrichment project