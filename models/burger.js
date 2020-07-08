const orm = require('../config/orm');
const connection = require('../config/connection');

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected as id ' + connection.threadId);
});

const burger = {
  getAllBurgers: async function () {
    try {
      const burgers = await orm.selectAll();
      return burgers;
    } catch (err) {
      if (err) return err;
    }
  },

  insertBurger: async function (burgerName) {
    try {
      if (typeof burgerName != 'string') return 'Please enter a valid string';
      const response = await orm.insertOne(burgerName);
      if (response.affectedRows) {
        return 'Insert Successful';
      }
    } catch (err) {
      if (err) return err;
    }
  },

  eatBurger: async function (burgerName) {
    try {
      if (typeof burgerName != 'string') return 'Please enter a valid string';
      const response = await orm.updateOne(burgerName);
      if (response.affectedRows) {
        return 'Update Successful';
      }
    } catch (err) {
      if (err) return err;
    }
  },
};

module.exports = burger;
