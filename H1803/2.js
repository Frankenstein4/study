var fs=require("fs");
var path=require("path");
var all=require('./all');
var z=require('./3');
module.exports={
    login:function(res,pathname){
        var y=path.extname(pathname);
        res.writeHead(200,{"content-type":""+all[y]+";charset=utf-8"});
        fs.readFile("./H1803/1.html","utf-8",function(err,data){
            if(err){
                // console.log(err);
                // res.write("页面请求出错");
                // res.end();
                z["not"](res);
                res.end();
            }else{
                res.write(data);
                res.end();
            }
        })
    }
}