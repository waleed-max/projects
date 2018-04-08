var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Bear     = require('./app/models/bear');//make it reuire after you make it available for bear.js
var router = express.Router();
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());/*taking the information and convert it to javascript object*/

var port = process.env.PORT || 8080;/*choose the website root or 8080 if not availble*/

var router = express.Router();/*express object*/

router.use(function(req, res, next) {//next a function mean go to the nest one
    
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({message: 'hooray! welcome to our api!'});   
});

app.use('/api', router);/* everything will start by /api */

app.listen(port);/*the rout should start with api */
console.log('Magic happens on port ' + port);


/* we start to use the database*/









