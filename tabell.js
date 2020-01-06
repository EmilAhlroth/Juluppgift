
/* KÖR DEN HÄR FILEN EFTER DATABAS.js*/
/* Den hör filen skapar tabellen */
/* Efter den här filen kör läggIDatabas.js */

var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "JulData"
});

// Skapar en tabell som innehåller namn, julklappen och länken till den.
con.connect(function(err) {
if (err) throw err;
console.log("Anslutningen Lyckades!");
var sql = "CREATE TABLE julklapp (name VARCHAR(255), julklapp VARCHAR(255), länk VARCHAR(255))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table Skapades");
});
});
