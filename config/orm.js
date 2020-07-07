const connection = require('./connection');

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected as id ' + connection.threadId);
});

const orm = {
  selectAll: function () {
    const query = `SELECT * FROM burgers;`;

    return connection.query(query, (err, res) => {
      if (err) throw err;
      return res;
    });
  },

  insertOne: function (burgerName) {
    const query = `INSERT INTO burgers (burger_name, eaten) VALUES (?, false)`;

    return connection.query(query, burgerName, (err, res) => {
      if (err) throw err;

      return console.log(`${burgerName} successfully added.`);
    });
  },

  updateOne: function (eaten, burgerName) {
    const query = `
    UPDATE burgers
    SET eaten = ?
    WHERE burger_name = ?
    `;

    return connection.query(query, [eaten, burgerName], (err, res) => {
      if (err) throw err;

      return console.log(`${burgerName} successfully updated.`);
    });
  },
};

module.exports = orm;
