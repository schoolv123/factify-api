const mysql = require("mysql");

const pool = mysql.createPool({
  host: "sql209.epizy.com",
  user: "epiz_29151775",
  password: "bCeXVv7izz",
  database: "epiz_29151775_factify",
  connectionLimit: 10
});

module.exports = pool;
