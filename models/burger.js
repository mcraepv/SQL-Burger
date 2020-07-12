const orm = require('../config/orm');
const connection = require('../config/connection');

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected as id ' + connection.threadId);
});

const burger = {
  getAllBurgers: async function () {
    try {
      const burgers = await orm.selectAll('burgers');
      return burgers;
    } catch (err) {
      if (err) return err;
    }
  },

  insertBurger: async function (burgerName) {
    try {
      if (typeof burgerName != 'string') return 'Please enter a valid string';
      const response = await orm.insertOne(
        'burgers',
        ['burger_name', 'eaten'],
        [burgerName, 0]
      );
      if (response.affectedRows) {
        return 'Insert Successful';
      }
    } catch (err) {
      if (err) return err;
    }
  },

  eatBurger: async function (id) {
    try {
      const response = await orm.updateOne('burgers', 'eaten', 1, 'id', id);
      if (response) {
        return 'Update Successful';
      }
    } catch (err) {
      if (err) return err;
    }
  },

  removeBurger: async function (id) {
    try {
      //add args after fn creation
      const response = await orm.deleteOne('burgers', 'id', id);
      if (response) {
        return 'Update Successful';
      }
    } catch (err) {
      if (err) return err;
    }
  },
};

module.exports = burger;
