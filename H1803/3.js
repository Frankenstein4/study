var fs=require("fs");
var path=require("path");
var all=require('./all');
module.exports={
    readfile:function(res,pathname){
        fs.readFile("./H1803/"+pathname,function(err,data){
            if(err){
                // console.log(err);
                res.write("404 not Found");
                res.end();
            }else{
                y=path.extname(pathname);
                res.writeHead(200,{"content-type":""+all[y]+";charset=utf-8"});
                res.write(data);
                res.end();
            }
        })
    },

    not:function(res){
        res.write("404 not Found");
        res.end();
    }
}