var fs=require("fs");
var filetext;
module.exports={
    yh:function(){
        console.log("今天天气不错！");
    },
    readfile:function(){
        var readerfile=fs.createReadStream('./1.html');
        //return readerfile.toString();
        readerfile.on("data",function(text){
            filetext=text;
        })
        return filetext;
    }

}

// var fs = require("fs");
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('1.txt');

// // 设置编码为 utf8。
// readerStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function(){
//    console.log(data);
// });

// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");