var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var users = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use('/', express.static(__dirname + '/../dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/users', function (req, res) {
  users.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/create', function (req, res) {
  
});

app.patch('/update', function (req, res) {
  
});

app.listen(3005, function() {
  console.log('listening on port 3005!');
});

