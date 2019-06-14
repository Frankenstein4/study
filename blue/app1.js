var http = require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
var httpProxy = require('http-proxy');

//服务端口
var PORT = 8888;
//前端页面调用接口时包含的接口前缀 用来标识这是接口访问
var API_PRE_STR='api';
//真正要请求的api地址
var API_DOMAIN='http://www.991kang.com/';

//创建一个代理服务器
var proxy = httpProxy.createProxyServer({
    target: API_DOMAIN,
});

//代理出错则返回500
proxy.on('error', function(err, req, res){
    res.writeHead(500, {
        'content-type': 'text/plain'
    });
    console.log(err);
    res.end('Something went wrong. And we are reporting a custom error message.');
});

//建立一个本地的server
var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = path.join("./", pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';

    //判断如果是接口访问，则通过proxy转发
    console.log(pathname);
    console.log(API_PRE_STR);
    if(pathname.indexOf(API_PRE_STR) > 0){
        console.log(request.url.substring(4,request.url.length));
        request.url=request.url.substring(4,request.url.length)
        proxy.web(request, response);
        return;
    }
    
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");