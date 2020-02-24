const mysql = require("mysql");

let connectionRisk = require("./connectDatabase").connectionRisk;

function makeDBConnection() {
  let connection = mysql.createConnection(connectionRisk);
  connection.connect(function(err) {
    if (!!err) {
      console.log("error: " + err.message);
    } else {
      console.log("connect");
    }
  });

  return connection;
}
module.exports.makeDBConnection = makeDBConnection;
