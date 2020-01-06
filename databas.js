
/* KÖR DEN HÄR FILEN FÖRST AV ALLA DEN SKAPAR DATABASEN SOM ANVÄNDS
   Efter den här filen kör tabell.js
*/
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: ""
});


// Skapar en databas som heter JulData. Den ska innehålla alla julklappar, namn och länkar.
con.connect(function(err) {
if (err) throw err;
console.log("Lyckades!");
con.query("CREATE DATABASE JulData", function (err, result) {
if (err) throw err;
console.log("Database Skapades");
});
});
