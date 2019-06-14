var x=require('./conn');
var conn=x.conn;
var arr=[];
var sql="select * from stu";
conn.query(sql,function(err,result){
     if(err){
         console.log(err);
     }
     if(result.length>0){
         for(var i=0;i<result.length;i++){
             arr[i]=result[i].sname;
             console.log(arr[i]);
         }
     }
})