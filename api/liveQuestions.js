const router = require('express').Router();
const db = require('../db');
const LiveQuestion = db.models.liveQuestion
const LiveResponse = db.models.liveResponse

// GET all questions
router.get('/', (req, res, next) => {
  LiveQuestion.findAll({include: [LiveResponse]})
  .then(liveQuestions => res.json(liveQuestions))
  .catch(next);
});

// GET a single question by id
router.get('/:liveQuestionId', (req, res, next) => {
  LiveQuestion.findById(req.params.liveQuestionId, {include: [LiveResponse]})
  .then(liveQuestion => {
    console.log(liveQuestion)
    res.json(liveQuestion)})
  .catch(next)
})

// POST a new question
router.post('/', (req, res, next) => {
  LiveQuestion.create(req.body)
  .then(question =>  res.status(201).json(question))
  .catch(next);
});

module.exports = router;

