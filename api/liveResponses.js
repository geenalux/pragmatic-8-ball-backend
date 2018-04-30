const router = require('express').Router()
const db = require('../db');
const LiveResponse = db.models.liveResponse;

// GET all responses
router.get('/', (req, res, next) => {
  LiveResponse.findAll()
  .then(liveResponses => res.json(liveResponses))
  .catch(next);
});

// GET a single eightBall by id
router.get('/:liveResponseId', (req, res, next) => {
  LiveResponse.findById(req.params.liveResponseId)
  .then(liveResponse => res.json(liveResponse))
  .catch(next)
})

router.post('/', (req, res, next) => {
  LiveResponse.create(req.body)
  .then(liveResponse =>  res.status(201).json(liveResponse))
  .catch(next);
});

module.exports = router;
