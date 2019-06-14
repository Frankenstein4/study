function getTime1(){
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var  hour = date.getHours();
    var  minute = date.getMinutes();
    var  second = date.getSeconds()

    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
    }
    if (second >= 0 && second <= 9) {
        second = "0" + second;
    }
    var date1=new Date().getDay();
    switch(date1){
        case 0 : 
        $("#rq").html("星期日");
        break;
        
        case 1 :
        $("#rq").html("星期一");
        break;
        
        case 2 :
        $("#rq").html("星期二");
        break;
        
        case 3 :
        $("#rq").html("星期三");
        break;
        
        case 4 :
        $("#rq").html("星期四");
        break;
        
        case 5 :
        $("#rq").html("星期五");
        break;
        
        case 6 :
        $("#rq").html("星期六");
        break;
    }

    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate+" "+hour+":"+minute+":"+second;
    var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日"+hour+"时"+minute+"分"+second+"秒";
    console.log(currentdate);//当前时间
    console.log(currentdate1);//当前时间
}
