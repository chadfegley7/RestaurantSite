var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(8000, function(){
  console.log('Game Reviews is Up and Running')
});
