const router = require('express').Router()
module.exports = router

router.use('/eightBalls', require('./eightBalls'))
router.use('/responses', require('./responses'))
router.use('/questions', require('./questions'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
