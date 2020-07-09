const connection = require('./connection');
const util = require('util');

const promiseQuery = util.promisify(connection.query).bind(connection);

const orm = {
  selectAll: async function () {
    try {
      const query = `SELECT * FROM burgers;`;

      const response = promiseQuery(query);
      return response;
    } catch (err) {
      if (err) throw err;
    }
  },

  insertOne: async function (burgerName) {
    try {
      const query = `INSERT INTO burgers (burger_name, eaten) VALUES (?, false)`;

      const response = await promiseQuery(query, burgerName);
      if (response.affectedRows === 1) {
        return `${burgerName} successfully added.`;
      }
    } catch (err) {
      if (err) throw err;
    }
  },

  updateOne: async function (eaten, burgerName) {
    try {
      const query = `
    UPDATE burgers
    SET eaten = ?
    WHERE burger_name = ?
    `;

      const response = await promiseQuery(query, [eaten, burgerName]);
      if (response.affectedRows === 1) {
        return `${burgerName} successfully added.`;
      }
    } catch (err) {
      if (err) throw err;
    }
  },
};

module.exports = orm;

orm.insertOne('Cheeseburger');
