
/**
 * Module dependencies.
 */

var express = require('express'),
  gzip = require('connect-gzip'),
  assetManager = require('connect-assetmanager')

var app = module.exports = express.createServer(
  gzip.gzip({ flags: '--best' })
);
var port = 80;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  port = 3000;
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', { });
});

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
