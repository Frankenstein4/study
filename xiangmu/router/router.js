var bodyParser=require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var x=require("../conn/conn.js");
var conn=x.conn;
var arr=[];
var arr1=[];
var mark=2;//标记2代表刚打开登录页面1代表账号密码对应数据库0代表不对应
var sign=2;//标记2代表刚打开网页1代表数据库的账号不存在可以注册0代表数据库存在无法注册
module.exports=function(app){
   app.get("/",function(req,res){
       mark=2;
       res.render("./entry.ejs",{mark:mark,"namei":""});
   });//首页登录页面
 app.post("/entrypost", urlencodedParser,function(req,res){
     var sql="select * from yonghu";     
     conn.query(sql,function(err,result){
         if(err){
             console.log(err);
         }else if(result.length>0){
             for(var i=0;i<result.length;i++){
                 arr[i]=result[i].sname;
                 arr1[i]=result[i].spwd;
             }
             console.log(arr);
             console.log(arr1);
         } 
        var temp=arr.indexOf(req.body.username);
        if(temp!==-1&&arr1[temp]==req.body.pwd){            
            mark=1;
        }else{
            mark=0;
        }
        //  conn.end(); 
         console.log(mark) 
       res.render("./entry.ejs",{mark:mark,"namei":req.body.username});//render传参对象里第二个属性必须加上引号      
     })    
 });//登录页面的登录POST请求
 app.post("/registerpost1",urlencodedParser,function(req,res){
    res.render("./register.ejs",{sign:sign});
 });//没有账号时登录页面的注册入口
 app.post("/registerpost",urlencodedParser,function(req,res){
    var sql="select * from yonghu";     
     conn.query(sql,function(err,result){
        if(err){
            console.log(err);
        }else if(result.length>0){
            for(var i=0;i<result.length;i++){
                arr[i]=result[i].sname;
            }    
        }
        console.log(arr);
        var temp=arr.indexOf(req.body.username);
        if(temp!==-1){
            sign=0;
            res.render("register.ejs",{sign:sign});
            console.log("账号已存在")
        }else{
            var sql="insert into yonghu(sname,spwd)values('"+req.body.username+"','"+req.body.spwd+"');"
            conn.query(sql,function(err,result){
                if(err){
                    console.log(err);
                }   
            })
            sign=1;
            res.render("./entry.ejs",{mark:mark,"namei":""});
        }
     })   
 });//注册账号的post请求
}