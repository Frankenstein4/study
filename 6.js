//用流读取文件
//与此文件相关文件 5.js,1.html

var http=require('http');
var url=require("url");
var x=require('./5');
http.createServer(function(req,res){
    res.writeHead(200,{"Content_type":"text/html;charset=utf-8"});
    res.end(x.readfile());
}).listen(8000);
console.log("server is running");