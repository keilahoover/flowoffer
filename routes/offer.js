var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET all offers. */
router.get('/', function(req, res, next) {
  knex('offer')
    .select('id', 'name')
    .then(rows => res.json(rows))
});

// GET a single offer
router.get('/:id', function (req, res, next) {
  const { id } = req.params
  knex('offer')
    .select('id', 'name')
    .where('id', id)
    .then(rows => res.json(rows))
})

//POST a new offer
router.post('/', function (req, res, next) {
  res.send('POST a new offer')
})

// DELETE an offer
router.delete('/:id', function (req, res, next) {
  res.send('DELETE an offer')
})

// UPDATE an offer
router.patch('/:id', function (req, res, next) {
  res.send('UPDATE an offer')
})

module.exports = router;
