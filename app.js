var express = require('express');
var connect = require('connect');
var app = express();
var port = process.env.PORT || 8080;


//Configuration
app.use(express.static(__dirname + '/images'));
app.use(connect.cookieParser());
app.use(connect.logger('dev'));
app.use(connect.bodyParser());

app.use(connect.json());
app.use(connect.urlencoded());


// Routes
require('./routes/routes.js')(app);

// Listen
app.listen(port);
console.log('The app is running on: ' + port);