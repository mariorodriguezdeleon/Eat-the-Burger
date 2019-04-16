const mysql = require('mysql');


let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "db_burgers"
  });
  
// let connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else{
//     mysql.createConnection({
//       host: process.env.DB_HOST,
//       port: 3306,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASS,
//       database: "db_burgers"
//   });
// };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;