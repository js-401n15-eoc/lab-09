'use strict';

const express = require('express');
const router = express.Router();

// const model = require('../models/products/products-collection.js');
// let model;
const handlers = require('./handlers.js');

router.param('model', findTheModel);

function findTheModel(req, res, next) {
  let modelName = req.params.model;
  // if (modelName === 'products') {
  //   req.model = model;
  // }
  req.model = require(`../models/${modelName}/${modelName}-collection.js`);
  next();
}
router.get('/:model', handlers.getAll);
router.get('/:model/:id', handlers.getOne);
router.post('/:model', handlers.createRecord);
router.put('/:model/:id', handlers.updateRecord);
router.delete('/:model/:id', handlers.deleteRecord);

module.exports = router;