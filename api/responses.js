const router = require('express').Router()
const db = require('../db');
const Response = db.models.response;

// GET all responses
router.get('/', (req, res, next) => {
  Response.findAll()
  .then(responses => res.json(responses))
  .catch(next);
})

// GET a single eightBall by id
router.get('/:responseId', (req, res, next) => {
  Response.findById(req.params.responseId)
  .then(response => res.json(response))
  .catch(next)
})

module.exports = router;
