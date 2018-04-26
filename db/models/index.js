'use strict';

const db = require('../index');
const Sequelize = require('sequelize');

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations
console.log("I should be second");

// const Student = require('./student');
// const Campus = require('./campus');

//Associations?? Associations!!
// Student.belongsTo(Campus);
// Campus.hasMany(Student);

const Meal = db.define('meal', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ingredients: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.campbellsmeat.com/images/products/verylarge/1456938477wagyusirloinprod.jpg'
    },
    restaurant: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    }
});

module.exports = db