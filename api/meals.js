const router = require('express').Router();
const db = require('../db');
const Meal = db.models.meal;

// GET all meals
router.get('/', (req, res, next) => {
    Meal.findAll()
    .then(meals => res.json(meals))
    .catch(next);
});

// GET a single meal by id
router.get('/:mealId', (req, res, next) => {
    Meal.findById(req.params.mealId)
    .then(meal => res.json(meal))
    .catch(next);
});

// POST a new meal
router.post('/', (req, res, next) => {
    Meal.create(req.body)
    .then(meal =>  res.status(201).json(meal))
    .catch(next);
});

// PUT a meal - update
router.put('/:mealId', (req, res, next) => {
    Meal.findById(req.params.mealId)
    .then(meal => meal.update(req.body))
    .then(updated => res.status(201).json(updated))
    .catch(next);
});

// DELETE a meal
router.delete('/:mealId', (req, res, next) => {
    const id = req.params.id;
    Meal.findById({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;