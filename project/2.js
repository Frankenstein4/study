function aa(){
    var date = new Date();
   var year = date.getFullYear();
   var month = date.getMonth() + 1;
   var date = date.getDate();
   //var day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
   var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
   var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
   var currentTime = "现在是:" + year + "年" + month + "月" + date + "日 " +hour + ":" + minute + ":" + second + " ";
   console.log(currentTime);
 }
 aa();