

/* KÖR DEN HÄR FLEN EFTER TABELL.JS ANNARS FUNGERAR DET INTE   */
/* Kör selectData.js efter den här filen */

var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "julData"
});

/* Lägger in alla värden i tabellen på phpMyAdmin */
con.connect(function(err) {
if (err) throw err;
console.log("Anslutningen Lyckades!");
var sql = "INSERT INTO julklapp (name, julklapp, länk) VALUES ?";
var values = [
  ['Mobillådan', './static/mlåda.jpg', 'https://www.netonnet.se/Search?query=mobill%C3%A5da'],
  ['Återvunna plagget', './static/bild1.jpg', 'https://www.dn.se/ekonomi/arets-julklapp-presenteras-1/'],
  ['Elcykel', './static/bild2.jpg', 'https://www.elcykelpunkten.se/'],
  ['VR-glasögon', './static/bild3.jpg','https://www.elgiganten.se/catalog/wearables-och-traning/se-vr-mobil/vr-for-mobil'],
  ['Robotdammsugare','./static/bild4.jpg','https://www.robotexperten.se/produkt/irobot-roomba-966-robotdammsugare/'],
  ['Träningsarmband','./static/bild5.jpg', 'https://www.elgiganten.se/cms/fitbit-eller-polar/fitbit-eller-polar-vilket-traningsarmband-ska-man-valja/'],
  ['Råsaftcentrifug','./static/bild6.jpg', 'https://www.mediamarkt.se/sv/category/_r%C3%A5saftcentrifug-510721.html'],
  ['Hörlurar', './static/bild7.jpg', 'https://www.elgiganten.se/catalog/ljud-hifi/se-horlurar/horlurar'],
  ['Färdigpackad matkasse', './static/bild8.jpg','https://matkassarna.com/'],
  ['Surfplatta', './static/bild9.jpg','https://www.netonnet.se/art/dator-surfplatta/surfplattor']
];
con.query(sql, [values], function (err, result) {
if (err) throw err;
console.log("Number of records inserted: " + result.affectedRows);
});

});
