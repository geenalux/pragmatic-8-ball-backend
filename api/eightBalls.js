const router = require('express').Router()
const db = require('../db');
const EightBall = db.models.eightBall
const Response = db.models.response

// GET all eight balls
router.get('/', (req, res, next) => {
    EightBall.findAll({include: [Response]})
    .then(eightBalls => res.json(eightBalls))
    .catch(next);
})

// GET a single eightBall by id
router.get('/:eightBallId', (req, res, next) => {
    EightBall.findById(req.params.eightBallId)
    .then(eightBall => res.json(eightBall))
    .catch(next)
})

module.exports = router
