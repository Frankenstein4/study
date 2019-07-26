const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const http = require('http');
var server = http.createServer((req,res)=>{
    if(req.url == '/'){
        var target = path.join(__dirname,'./form.html');
        fs.readFile(target,(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
            res.end(data);
        });
    }else if(req.url == '/dopost' && req.method.toLowerCase() == 'post'){
        var form = new formidable.IncomingForm();
        var targetFile = path.join(__dirname,'./upload');
        form.uploadDir = targetFile;
        form.parse(req,function(err,fields,files){
            if(err) throw err;
            var oldpath = files.uploadImg.path;
            var name=files.uploadImg.name;
            var newpath = path.join(path.dirname(oldpath),files.uploadImg.name);
            fs.rename(oldpath,newpath,(err)=>{
                if(err) throw err;
               // res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
               // res.end('图片上传并改名成功！');
               //res.write("<html><head></head><body><img src='" + name + "' /></body></html>");
               res.write(path.dirname(oldpath));
                res.end();
            })
        });
}else{
        res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"});
        res.end("找不到该页面！");
    }
});
server.listen(3000,'127.0.0.1');