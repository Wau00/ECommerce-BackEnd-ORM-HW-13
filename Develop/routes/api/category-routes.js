const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product]
  }).then(cat => {
    res.json(cat)
    console.log('found all');
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(cat => {
    res.json(cat)
    console.log('found one');
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(cat => {
    res.json(cat)
    console.log('found one');
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(cat => {
    res.json(cat)
    console.log('updated one');
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(cat => {
    res.json(cat)
    console.log('deleted one');
  })
});

module.exports = router;
