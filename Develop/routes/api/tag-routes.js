const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [{ model: Product },],
  }).then(allTag => {
    res.json(allTag)
    console.log('Tags Found!')
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(tagFind => {
    res.json(tagFind)
    console.log('Tag Found!');
  }).catch(error => res.send(error).status(500));
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(tagCreate => {
      res.json(tagCreate)
      console.log('Tag Created SUCCESSFULLY')
    }).catch(error => res.send(error).status(500));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id
    },
  }).then(tagsUpdate => {
    res.json(tagsUpdate)
    console.log('Tag updated SUCCESSFULLY')
  }).catch(error => res.send(error).status(500));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    },
  }).then(tagsDelete => {
    res.json(tagsDelete)
    console.log('Deleted Tag SUCCESSFULLY')
  }).catch(error => res.send(error).status(500));
});

module.exports = router;
