var express = require('express');

var config = require('./config.js');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect(config.databaseConnection, { useNewUrlParser: true });

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded(
    {
        limit: '5mb',
        extended: true
    }    
));

var routes = require('./routes/service-routes.js')(app);
var routes = require('./routes/customer-routes.js')(app);

var server = app.listen(config.port, function() {
    console.log(config.name + ' API running at http://127.0.0.1:' + config.port);
});