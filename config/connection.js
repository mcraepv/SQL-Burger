const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: 'macDATAbase!6799',
  database: 'burgers_db',
});

module.exports = connection;
