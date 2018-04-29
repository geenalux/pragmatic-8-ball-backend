const router = require('express').Router();
const db = require('../db');
const Question = db.models.question
const LiveResponse = db.models.liveResponse

// GET all questions
router.get('/', (req, res, next) => {
  Question.findAll()
  .then(questions => res.json(questions))
  .catch(next);
});

// GET a single question by id
router.get('/:questionId', (req, res, next) => {
  Question.findById(req.params.questionId, {include: [LiveResponse]})
  .then(question => res.json(question))
  .catch(next)
})

// POST a new question
router.post('/', (req, res, next) => {
  console.log(req.body)
  Question.create(req.body)
  .then(question =>  res.status(201).json(question))
  .catch(next);
});

module.exports = router;

