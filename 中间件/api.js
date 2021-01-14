var express = require('express');
require('./mock/mock.js');
var app=express();
var message=null;

app.get('/xxx',function(req,res){
	console.log('xxx start');
	console.log(req.query.id);
	message=req.query.id;
	res.end();
})


app.get('/getInfo',function(req,res){
	console.log('xxx start');

	res.end(message);
})


app.listen(5678, function () {
    console.log('5678中间件启动');
});

