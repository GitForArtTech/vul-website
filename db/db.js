var mysql = require("mysql");
//datebase config
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "db_Password",
  database: "db_Name",
  waitForConnections: true,
  multipleStatements: true,
});

module.exports = pool;
