var express = require('express');
var router = express.Router();
var bodyParser=require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var x=require("../conn/conn");
var conn=x.conn;
var arr=[];
var arr1=[];
var mark=2;//标记2代表刚打开登录页面1代表账号密码对应数据库0代表不对应
var sign=2;//标记2代表刚打开网页1代表数据库的账号不存在可以注册0代表数据库存在无法注册

/* GET home page. */
router.get('/', function(req, res) {
    //res.render('index.ejs',req);
    mark=2;
    res.render("thewall.ejs",{mark:mark,"namei":""});
});
router.get('/index', function(req, res, next) {
    mark=2;
    res.render("index.ejs",{mark:mark,"namei":""});
});
router.get('/jstlverify', function(req, res, next) {
  //res.render('jstlverify.ejs');
  res.render("jstlverify.ejs",{sign:sign});
});
router.get('/sc', function(req, res, next) {
    //res.render('jstlverify.ejs');
    res.render("sc.ejs");
  });
router.get('/top', function(req, res, next) {
    res.render("top.ejs");
});
router.get('/left', function(req, res, next) {
    res.render("left.ejs");
});
router.get('/center', function(req, res, next) {
    res.render("center.ejs");
});
router.get('/see1', function(req, res, next) {
    var sql1="select *  from comm order by id";
    conn.query(sql1,function(err,data){
        if(err){
            console.log(err);
        }else if(data.length>0){
            var x=data;
        res.render("see1.ejs",{x:data});
    }
    })  
    
});
router.get('/add1', function(req, res, next) {
    var sql1="select *  from comm order by id";
    conn.query(sql1,function(err,data){
        if(err){
            console.log(err);
        }else if(data.length>0){
            var x=data;
        res.render("add1.ejs",{x:data});
    }
    })  
    
});
router.get('/add1_comm', function(req, res, next) {
 res.render("add1_comm.ejs");
});




/* POST home page. */
router.post("/login", urlencodedParser,function(req,res){
    var sql="select * from users";     
    conn.query(sql,function(err,result){
        if(err){
            console.log(err);
        }else if(result.length>0){
            for(var i=0;i<result.length;i++){
                arr[i]=result[i].name;
                arr1[i]=result[i].pwd;
            }
           // console.log(arr);
           // console.log(arr1);
        } 
       var temp=arr.indexOf(req.body.name);
       if(temp!==-1&&arr1[temp]==req.body.pass){            
        //    mark=1;
        //    res.render("home.ejs",{mark:mark,"namei":req.body.name});
           if(req.body.name=="admin123"){
            res.render("admin.ejs",{mark:mark,"namei":req.body.name});
           }else{
            mark=1;
            res.render("home.ejs",{mark:mark,"namei":req.body.name}); 
           }
       }else{
           mark=0;
           //location.href="localost:8000/index.ejs"
           //res.render("localost:8000/aa");
           res.render("index.ejs",{mark:mark,"namei":req.body.name});//render传参对象里第二个属性必须加上引号 
       }
       //  conn.end(); 
        //console.log(mark);
       
    })    
});



router.post("/register",urlencodedParser,function(req,res){
  var sql="select * from users";     
     conn.query(sql,function(err,result){
        if(err){
            console.log(err);
        }else if(result.length>0){
            for(var i=0;i<result.length;i++){
                arr[i]=result[i].name;
            }    
        }
        console.log(arr);
        var temp=arr.indexOf(req.body.name);
        if(temp!==-1){
            sign=0;
            res.render("jstlverify.ejs",{sign:sign});
            console.log("账号已存在")
        }else{
            var sql="insert into users(name,pwd)values('"+req.body.name+"','"+req.body.pass+"');"
            conn.query(sql,function(err,result){
                if(err){
                    console.log(err);
                }   
            })
            sign=1;
            res.render("index.ejs",{mark:mark,"namei":""});
        }
     }) 
});

var x;
router.post("/add1_ok",urlencodedParser,function(req,res){
    // console.log(req.body.name)
    var sql="insert into comm(url1,name,price,describ,url2,url3)values('"+req.body.url1+"','"+req.body.name+"','"+req.body.price+"','"+req.body.describ+"','"+req.body.url2+"','"+req.body.url3+"');"    
    conn.query(sql,function(err,result){
        if(err){
            console.log(err);
        }else{
            var sql1="select *  from comm order by id";
      conn.query(sql1,function(err,data){
        if(err){
            console.log(err);
        }else if(data.length>0){
             x=data;
             res.render("1.ejs");
             //res.render("111");
             res.end(123456);
             console.log(1111);
        
    }
    })  
        

}   
    })
      
  });





module.exports = router;
//next相当于回调函数




