/*var api = 
require("termux-api").default;



var result = api.createCommand().batteryStatus().build().run();

result.getOutputObject().then(function(battlevel){
console.log("works batt:", 
battlevel.percentage);
});
*/
console.time();
var api = require("termux-api").default;
var express = require("express");
var app = require('express')();
var http = require('http').Server(app);
var batteryLevel = -1;
var temp = "-1";

var result = api.createCommand().batteryStatus().build().run();

result.getOutputObject().then(function(battlevel){

console.log("worksbatt:",battlevel.percentage);

batteryLevel = battlevel.percentage;
temp         = battlevel.temperature;
batteryLevel = "<h1> Battery Level : " + batteryLevel + "</h1>";

temp = "<h2> Battery Tempature : " + (((temp * 9)/5 )+ 32)  + "</h2>";
console.log(batteryLevel);

console.log(temp);
app.get('/',function(req, res){	res.send(batteryLevel + temp);});

});


/*
app.get('/',function(req, res){

res.send('<h1>Batterystatus</h1>');

res.send(batteryLevel);
console.timeEnd();
});
*/
http.listen(3000, function(){
console.log('listening on *:3000');
});


