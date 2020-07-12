const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
  burger.getAllBurgers().then((burgers) => {
    res.render('index', { burgers });
  });
});

router.post('/api/burgers', (req, res) => {
  burger.insertBurger(req.body.burgerName).then((data) => {
    if (data) {
      res.redirect('/');
    }
  });
});

router.put('/api/burgers/:id', (req, res) => {
  burger.eatBurger(req.params.id).then((data) => {
    if (data) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  });
});

router.delete('/api/burgers/:id', (req, res) => {
  burger.removeBurger(req.params.id).then((data) => {
    if (data) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  });
});

module.exports = router;
