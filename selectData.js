
/* KÖR DEN HÄR FILEN EFTER läggIDatabas.js
   Den här filen tar alla värden i tabellen och gör så att de går att använda i server.js
*/
var mysql = require('mysql');
var fs = require('fs');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "julData"
});

con.connect(function(err) {
if (err) throw err;
  con.query("SELECT * from julklapp", function (err, result, fields) {
    if(err)throw err;

/* Här är alla värden som finns i tabellen, varje värden exporteras till server.js så att de går att avnända i index.ejs */

    module.exports.result = result;

  });
})
