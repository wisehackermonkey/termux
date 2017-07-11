var api = require("termux-api").default;
var express = require("express");
var app = require('express')();
var http = require('http').Server(app);
var battery = -1;
var temp = "-1";
var port = 3000;


var result = api.createCommand().batteryStatus().build().run();

result.getOutputObject().then(function(batt){

	console.log("Battery Percentage : ", batt.percentage, "%");
	console.log("Battery Temperature: ", batt.temperature,"F");

	battery = batt.percentage;
	temp    = batt.temperature;
	battery = "<h1> Battery Percentage : " + battery + "%</h1>";

	temp    = "<h2> Battery Tempature  : " + ( ( ( temp * 9 ) / 5 ) + 32)  
+ 
" F</h2>";

	//console.log(battery);
	//console.log(temp);

	app.get('/',function(req, res){	res.send(battery + temp);});

});


http.listen(port, function(){
	console.log('listening on http://localhost:' + port);
});


