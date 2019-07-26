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
router.get('/', function(req, res,next) {
    //res.render('index.ejs',req);
    //res.send('111111111111');
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



  const formidable = require('formidable');
  const fs = require('fs');
  const path = require('path');
  const iconv = require('iconv-lite');
  var status=0;
  router.get('/form', function(req, res, next) {
    res.render("form.ejs",{status:status});
});

router.get('/fs', function(req, res, next) {
    res.render("2.ejs");
});

  router.post("/mm",urlencodedParser,function(req,res){
    var form = new formidable.IncomingForm();
    //form.multiples=true;
    var targetFile = path.join(__dirname,'../upload');
    form.uploadDir = targetFile;
    form.parse(req,function(err,fields,files){
        if(err) throw err;
        var oldpath = files.uploadImg.path;
        var name=files.uploadImg.name;
        var newpath = path.join(path.dirname(oldpath),files.uploadImg.name);// __dirname表示当前运行环境绝对路径  
        fs.rename(oldpath,newpath,(err)=>{
            if(err) throw err;
           // res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
           // res.end('图片上传并改名成功！');
           //res.write("<html><head></head><body><img src='" + name + "' /></body></html>");
           // res.render("3.ejs",{name:name});
            //res.end();


            fs.readFile(newpath,(err,data)=>{
                if(err) throw err;
                var arr=name.split('.');
                if(arr[1]=="jpg"||arr[1]=="png"){
             return   res.render("3.ejs",{name:name});
                res.end();
                }if(arr[1]=="txt"||arr[1]=="doc"){
                    var content1=iconv.decode(data,'gbk');
                    fs.writeFile(newpath, content1, function(err){
                    if(err) throw err;
                    return    res.render("2.ejs",{name:name});
                 res.end();  
                })
                }else{
                    status=1;
                    return    res.render("form.ejs",{status:status});
                }
            })




        })
    });

  })









  router.get('/f1', function(req, res, next) {
    res.render("f1.ejs");
});




// var express = require('express');
// var app = express();
// var formidable = require('formidable');
// var fs = require('fs');	
router.post('/upload', function(req, res, next) {//对应前端请求的路径，请求方法
   var form = formidable.IncomingForm({
       encoding : 'utf-8',//上传编码
       uploadDir : "public/files",//上传目录，指的是服务器的路径，如果不存在将会报错。
       keepExtensions : true,//保留后缀
       maxFieldsSize : 2 * 1024 * 1024//byte//最大可上传大小
   });
   var allFile=[];
   form.on('progress', function(bytesReceived, bytesExpected) {//在控制台打印文件上传进度
     var progressInfo = { 
        value: bytesReceived, 
        total: bytesExpected 
     }; 
     console.log('[progress]: ' + JSON.stringify(progressInfo)); 
     res.write(JSON.stringify(progressInfo)); 
   })
   form.on('file', function (filed, file) {
      allFile.push([filed, file]);//收集传过来的所有文件
   })
   form.on('end', function() { 
      res.end('上传成功！'); 
   })
   form.on('error', function(err) {
     console.error('上传失败：', err.message); 
     next(err); 
   })
   form.parse(req,function(err, fields, files){
     if(err){
        console.log(err);
     }
     allFile.forEach(function(files,index){
         var fieldName=files[0];
         var types = files[1].name.split('.');
         var date = new Date();
         var ms = Date.parse(date);
         fs.rename(files[1].path,form.uploadDir+"/"+types[0]+"."+String(types[types.length-1]));//重命名文件，默认的文件名是带有一串编码的，我们要把它还原为它原先的名字。
     });
   }); 
 });









module.exports = router;
//next相当于回调函数






