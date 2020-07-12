const connection = require('./connection');
const util = require('util');

const promiseQuery = util.promisify(connection.query).bind(connection);

const orm = {
  selectAll: async function (table) {
    try {
      const query = `SELECT * FROM ??;`;
      const response = await promiseQuery(query, table);
      return response;
    } catch (err) {
      if (err) throw err;
    }
  },

  insertOne: async function (table, [...cols], [...values]) {
    try {
      const query = `INSERT INTO ?? (??, ??) VALUES (?, ?)`;
      const queryArgs = [table];

      cols.forEach((col) => {
        queryArgs.push(col);
      });
      values.forEach((val) => {
        queryArgs.push(val);
      });

      const response = await promiseQuery(query, queryArgs);
      if (response.affectedRows === 1) {
        return `${burgerName} successfully added.`;
      }
    } catch (err) {
      if (err) throw err;
    }
  },

  updateOne: async function (
    table,
    colToChange,
    newValue,
    conditionCol,
    conditionVal
  ) {
    try {
      const query = `
    UPDATE ??
    SET ?? = ?
    WHERE ?? = ?
    `;
      const queryArgs = [
        table,
        colToChange,
        newValue,
        conditionCol,
        conditionVal,
      ];

      const response = await promiseQuery(query, queryArgs);
      if (response.affectedRows) {
        return `Update successful`;
      }
    } catch (err) {
      if (err) throw err;
    }
  },

  deleteOne: async function (table, conditionCol, conditionVal) {
    try {
      const query = `
      DELETE FROM ??
      WHERE ?? = ?`;

      const response = await promiseQuery(query, [
        table,
        conditionCol,
        conditionVal,
      ]);
      if (response.affectedRows) {
        return `Delete successful`;
      }
    } catch (err) {
      if (err) throw err;
    }
  },
};

module.exports = orm;
