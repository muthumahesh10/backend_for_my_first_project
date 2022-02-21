var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var wsps = require('./routes/wsps');
var port = process.env.PORT || 8000;

var app = express();



// body parser mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', wsps);

app.listen(port, function(){
    console.log('Server started on port '+port);
})