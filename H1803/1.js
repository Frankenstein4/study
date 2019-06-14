var fs=require("fs");
var url=require("url");
var http=require("http");
var x=require('./2');
var z=require('./3');
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(req.url!=='./favicon.ico'){
        var pathname=url.parse(req.url).pathname;
        var pathname1=pathname.replace(/\//,"");
        try {
           if(pathname1.indexOf(".")==-1){
               console.log(pathname1+123);
                x[pathname1](res);
           }else{
            //res.writeHead(200,{"content-type":""+all[pathname1]+";charset=utf-8"});
            console.log(pathname1+111);
            z["readfile"](res,pathname1);
           } 
        } catch (error) {
            z["not"](res);
            res.end();
        }
    }
}).listen(8000);
console.log("端口已启动，端口为8000");