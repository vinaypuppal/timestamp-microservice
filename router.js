var path = require('path');
var generateTime = require('./helpers/generateTime');
module.exports = function(app){
	app.get('/',function(req,res){
		res.sendFile(path.join(__dirname,'/public/index.html'));
	});
	app.get('/:timestamp',function(req,res){
		var time = generateTime(req.params.timestamp)
		res.send(time);
	});
}