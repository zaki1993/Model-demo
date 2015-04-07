var express  = require('express');
var app      = express();
var http = require('http');
var port     = process.env.PORT || 1234;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
//var configDB = require('./scripts/config/database.js');
//mongoose.connect(configDB.url); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms


// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.set('view engine', 'ejs'); // set up ejs for templating
app.get('/', function(req, res){
    res.render('index', {
        title: 'Home'
    });
});

app.get('/profile', function(req, res){
    res.render('profile', {
        title: 'Profile'
    });
});

app.get('/signup', function(req, res){
    res.render('signup', {
        title: 'SignUp'
    });
});
// launch ======================================================================
app.listen(port);
console.log('The server is running on port: ' + port);