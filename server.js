//Main entry point for server

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

//App setup


//Server setup
var port = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(port,function(error){
	if(error) throw error;
	console.log("server listening on port "+port);
})
