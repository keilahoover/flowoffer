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
    .then(rows => {
      if (rows.length > 0) {
        res.json(rows)
      } else {
        res.sendStatus(404)
      }
    })
})

// POST a new offer
router.post('/', function (req, res, next) {
  const { name } = req.body

  knex('offer')
    .insert([
      { name: name }
    ])
    .returning('id')
    .then(result => res.json(result))
})

// DELETE an offer
router.delete('/:id', function (req, res, next) {
  const { id } = req.params

  knex('offer')
  .del('id', id)
  .then(result => res.json(result))
})

// UPDATE an offer
router.patch('/:id', function (req, res, next) {
  const { id } = req.params
  const { name } = req.body

  knex('offer')
    .update({ name: name })
    .where('id', id)
    .returning('id')
    .then(result => res.json(result))
})

module.exports = router;
