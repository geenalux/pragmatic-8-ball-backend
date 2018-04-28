'use strict'

const db = require('../index')
const Sequelize = require('sequelize')

const EightBall = db.define('eightBall', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

const Response = db.define('response', {
    content: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

const Question = db.define('question', {
    input: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    responseContent: {
        type: Sequelize.STRING
    }
})

const LiveResponse = db.define('liveResponses', {
    content: {
        type: Sequelize.STRING,
    }
})

EightBall.hasMany(Response)
Response.belongsTo(EightBall)
EightBall.hasMany(Question)
Question.belongsTo(EightBall)

Question.hasMany(LiveResponse)
LiveResponse.belongsTo(Question)

module.exports = db
