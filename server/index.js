'use strict';

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Client DB: openned"); 
});

var userSchema = mongoose.Schema({
    login: String,
    password: String,
    firstName: String,
    lastName: String
});

mongoose.connect('mongodb://admin:admin@ds021751.mlab.com:21751/planetakino', function(){
  console.log("Client DB: connected"); 
});

var User = mongoose.model('user', userSchema);
var newUser = new User({ 
    firstName: 'Oleg',
    lastName: 'Chopyk',
    password: '1997',
    login: 'lyffi'
 });



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

app.get('/', function (req, res) {
 // res.send('Hello World')
  res.sendFile(__dirname + '/index.html');
})


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
