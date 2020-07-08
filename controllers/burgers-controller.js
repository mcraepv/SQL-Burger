const express = require('express');
const burger = require('../models/burger');

const app = express();

const PORT = process.env.PORT || 3000;

const router = {
  homePage: async function () {
    try {
      const data = await burger.getAllBurgers();

      app.get('*', (req, res) => {
        // res.render('index', { burgers: data });
        console.log(data);
      });
    } catch (err) {
      if (err) throw err;
    }
  },
  postBurger: async function (burgerName) {
    app.post('/api/burgers', (req, res) => {});
  },
};

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});

router.postBurger('Cheeseburger');
router.homePage();
