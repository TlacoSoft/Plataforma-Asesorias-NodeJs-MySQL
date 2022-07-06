const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asesorias'
  // host: process.env.HOST,
  // user: process.env.MYSQL_USER,
  // password: process.env.PASSWORD,
  // database: process.env.DATABASE,
  // port: 3306,
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("Database is connected");
  }
});

module.exports = mysqlConnection;
