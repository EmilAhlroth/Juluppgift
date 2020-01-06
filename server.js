
/* Kör den här filen Sist, efter tabell.js, LäggIDatabas.js och selectData.js */
/* Om du gjort det korrekt borde det fungera */

const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const data = require('./selectData.js')

const app = express();

app.use('/static', express.static ('public'));

/* Index.ejs anslutes till servern och blir indexsidan */
app.get("/",function(req, res){
  res.render(__dirname + "/index.ejs",{
   /* Här exporteras alla värden till index.ejs så att de enkelt kan sättas in i tabellen  */
   result: data.result
  });
});

/* Renderar den andra sidan som visar vilken julklapp man får */
app.get("/DinJulklapp.ejs",function(req, res){
  res.render(__dirname + "/DinJulklapp.ejs",{
    /* Här exporteras alla värden till DinJulklapp.ejs */
    result: data.result,
    /* Tar fram ett slumpat nummer mellan 0-9*/
    x: x = Math.floor(Math.random() * 10)

  });
});

/* Servern körs på localhost 3000 */
app.listen(3000);
