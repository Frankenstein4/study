
var express = require('express');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, 'views'));
// var router=require('./routes');
// app.set('views','./views');//引入文件路径
app.set('view engine','ejs');//引入模板引擎
app.use(express.static(path.join(__dirname, 'public')));//文件静态托管
// app.get("/",function(req,res){
//       res.send("123");
// })
// app.use(router);
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.listen(8000);
console.log("server is running listen 8000");

