var express = require('express');
var app = express();
var fs=require("fs");
var router=require("./router/router");
app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.use(express.static(__dirname + '/public'));

router(app);//调用路由

var server = app.listen(8000);
console.log("server is running listen 8000");