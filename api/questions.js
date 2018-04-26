const router = require('express').Router();
const db = require('../db');
const Question = db.models.question;

// GET all questions
router.get('/', (req, res, next) => {
  Question.findAll()
  .then(questions => res.json(questions))
  .catch(next);
});

// POST a new question
router.post('/', (req, res, next) => {
  Question.create(req.body)
  .then(question =>  res.status(201).json(question))
  .catch(next);
});

module.exports = router;

