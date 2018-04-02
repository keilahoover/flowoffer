var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET all offers. */
router.get('/', function(req, res, next) {
  // res.send('GET all offers');
  knex('offer')
    .select('name')
    .then(rows => res.json(rows))
});

// GET a single offer
router.get('/:id', function (req, res, next) {
  res.send('GET a single offer')
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
