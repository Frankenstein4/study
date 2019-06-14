var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send();
})
var server=app.listen(8888,function(){
    var host=server.address().address;
    var post=server.address().port;
})