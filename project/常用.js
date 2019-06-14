//1  数组去重
方法一
function rep(arr) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == i) {
             ret.push(arr[i]);
        }
    }
    return ret;
}

方法二
var temp = []; //一个新的临时数组
for(var i = 0; i < array.length; i++){
    if(temp.indexOf(array[i]) == -1){
        temp.push(array[i]);
    }
}

//2   json数组去重
function UniquePay(paylist) {
    var payArr = [paylist[0]];
    for (var i = 1; i < paylist.length; i++) {
        var payItem = paylist[i];
        var repeat = false;
        for (var j = 0; j < payArr.length; j++) {
            if (payItem.chnlNo == payArr[j].chnlNo) {
                payArr[j].amount = parseFloat(payArr[j].amount) + parseFloat(payItem.amount);
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            payArr.push(payItem);
        }
    }
    return payArr;
};
var paylist=[{chnlNo: "现金", amount: 300, type: 2}, {chnlNo: "支付宝", amount: "100", type: 2},
{chnlNo: "银行卡", amount: "400", type: 2}, {chnlNo: "现金", amount: 200, type: 2}];
var cc=UniquePay(paylist);
console.log(cc);


//3  判断星期几 
//getDay() 方法可返回表示星期的某一天的数字。 该方法总是结合一个 Date 对象来使用。
function riqi(arg){
    var date = new Date(arg).getDay();//必须结合Date
    switch(date){
        case 0 : 
        console.log("星期日");
        break;
        
        case 1 :
        console.log("星期一");
        break;
        
        case 2 :
        console.log("星期二");
        break;
        
        case 3 :
        console.log("星期三");
        break;
        
        case 4 :
        console.log("星期四");
        break;
        
        case 5 :
        console.log("星期五");
        break;
        
        case 6 :
        console.log("星期六");
        break;
    }
 
}
riqi("2019-4-13");



//4  获取当前时间  年月日
function getTime(){
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日";
    console.log(currentdate);//当前时间
    console.log(currentdate1);//当前时间
}
getTime();


//5  获取年月日  星期
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
        //$("#rq").html("星期日");
        var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日"+hour+"时"+minute+"分"+second+"秒"+" "+"星期日";
        break;
        
        case 1 :
        //$("#rq").html("星期一");
        var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日"+hour+"时"+minute+"分"+second+"秒"+" "+"星期一";
        break;
        
        case 2 :
        //$("#rq").html("星期二");
        var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日"+hour+"时"+minute+"分"+second+"秒"+" "+"星期二";
        break;
        
        case 3 :
        //$("#rq").html("星期三");
        var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日"+hour+"时"+minute+"分"+second+"秒"+" "+"星期三";
        break;
        
        case 4 :
        //$("#rq").html("星期四");
        var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日"+hour+"时"+minute+"分"+second+"秒"+" "+"星期四";
        break;
        
        case 5 :
        //$("#rq").html("星期五");
        var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日"+hour+"时"+minute+"分"+second+"秒"+" "+"星期五";
        break;
        
        case 6 :
        //$("#rq").html("星期六");
        var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日"+hour+"时"+minute+"分"+second+"秒"+" "+"星期六";
        break;
    }

    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate+" "+hour+":"+minute+":"+second;
    //var currentdate1 = date.getFullYear() + "年" + month + "月" + strDate + "日"+hour+"时"+minute+"分"+second+"秒";
    console.log(currentdate);//当前时间
    console.log(currentdate1);//当前时间
}
getTime1();



//6 js清空数组  方法一
var ary = [1,2,3,4];
ary.splice(0,ary.length);
console.log(ary); // 输出 []，空数组，即被清空了



//7  js清空数组  方法二
var ary = [1,2,3,4];
ary = []; // 赋值为一个空数组以达到清空原数组




//8 jquery清空复选框选中状态
$("input[name=item]").prop("checked",false);
$("#demo").attr("checked",false);



//
if(zhczt == '0'){
    //变更、同意、拒绝隐藏
}else if(zhczt !='0' && huiyizt !='2' && huiyizt !='1'){
  if(zt == '1' && huiyizt !='4'){
    if(syfhcgly == '1'){
      // 变更、同意、拒绝显示
    }else if(syfhcgly  =='0'){
       //变更、同意、拒绝隐藏
    }
  }else {
    //变更、同意、拒绝隐藏
  }
}else if(huiyizt =='2' || huiyizt =='1'){
  if(syfhcgly == '1'){
    //变更、拒绝显示，同意隐藏
  }else {
   // 变更、同意、拒绝隐藏
  }
}

//隐藏变更，同意，拒绝按钮
function hidden2(ZT,SYFHCGLY){
    alert(SYFHCGLY);
   //判断状态
var huiyizt=appcan.locStorage.getVal("MA0044_0005_HUIYIZT");//会议状态
var zhczt=appcan.locStorage.getVal("MA0044_0007_ZHCZT");//会议室状态编码
var ZH=appcan.locStorage.getVal("MA0044_0007_CHUANGJIANRBM");//创建人编码
var userId=appcan.locStorage.getVal("MA0017_0301_EIIS_USERCODE");//用户编码
var glybh=appcan.locStorage.getVal("MA0044_0007_GLYBH");//回执状态
var tzzt=appcan.locStorage.getVal("MA0044_0007_TZZT");//通知状态
var huizhizt=appcan.locStorage.getVal("MA0044_0007_HUIZHIZT");//回执状态 

if(zhczt=="0"){
   //变更、同意、拒绝隐藏
}else if(zhczt!="0"&&huiyizt!="2"&&huiyizt!="1"){
   if(ZT=="1"&&huiyizt!="4"){
       if(SYFHCGLY=="1"){
           // 变更、同意、拒绝显示
       }else if(SYFHCGLY=="0"){
          //变更、同意、拒绝隐藏
          $(".cz").addClass("uhide"); 
       }
   }else{
       //变更、同意、拒绝隐藏
       $(".cz").addClass("uhide");
   }
}else if(huiyizt=="2"||huiyizt=="1"){
   if(SYFHCGLY=="1"){
       //变更、拒绝显示，同意隐藏
        $(".tongYi").addClass("uhide");
   }else{
      //变更、同意、拒绝隐藏
       $(".cz").addClass("uhide"); 
   }
}
}   



//9  select下拉选框获取选中元素的value和text

方法一(orgnize为select的id)
$("#orgnize option:selected").val()//取值
$("#orgnize option:selected").text()//取文本

方法二
$("#orgnize").find("option:selected").val()//取值
$("#orgnize").find("option:selected").text()//取文本

方法三
var item = $("#orgnize").selectedIndex//获取选中项的索引
$("#orgnize").options[item].val();//取值
$("#orgnize").options[item].text();//取文本




//10 选中单选按钮触发事件
方法一
$("input[name=gender]").click(function(){
    alert("您是..." + $(this).val());
})
 
方法二  //只限制于写在document元素页面  即有<html></html>页面
$(":radio").click(function(){
    alert("您是..." + $(this).val());
});




//11 input 只有数字键盘弹出
<input type="number" pattern="[0-9]*" onkeyup="onlyNum(this)" name="sjh" id="sjh" class="ub ub-ac ub-f1 font-2 input-c" placeholder="请输入"/>
function onlyNum(that){
    // that.value=that.value.replace(/\D/g,"");
    that.value = that.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符  
    that.value = that.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的  
    that.value = that.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
   // that.value = that.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数  
    if(that.value.indexOf(".")< 0 && that.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
        that.value= parseFloat(that.value); 
    } 
}



//js实现离开一个页面时执行一个函数，而刷新的时候不执行
window.onunload = function() {

    var n = window.event.screenX - window.screenLeft;

    var b = n > document.documentElement.scrollWidth - 20;

    if (!(b && window.event.clientY < 0 || window.event.altKey)) {
        //window.event.returnValue = "真的要刷新页面么？";

         //这里放置我想执行缓存的代码
         alert(000000);

    }else{
        
    }
}




//12  js重新加载与刷新
// 1、window.location.href=“url”：
// 当前页面打开URL页面，改变url地址，如果URL为空则重新打开当前页面。
// （1）与self.location.href="url"，self.location.href="url"相同
// （2）this.location.href="url"当前页面打开URL页面
// （3）parent.location.href="url"在父页面打开新页面
// （4）top.location.href="url" 在顶层页面打开新页面


// 2、window.location.replace(“url”)：
// 将地址替换成新url，该方法通过指定URL替换当前缓存在历史里（客户端）的项目，因此当使用replace方法之后，你不能通过“前进”和“后退”来访问已经被替换的URL，这个特点对于做一些过渡页面非常有用！


// 3、window.location.reload()：
// 强制刷新页面，从服务器重新请求！和F5功能一样。
// （1）window.opener.document.location.reload();使用子窗口的 opener 对象来获得父窗口的对象；


// 4、window.location.reload()与window.location.href=“url”的异同：
// （1）相同点：都是刷新当前页面，都会提交数据。
// （2）不同点：reload()会提示是否提交数据，可以提交GET和POST方式提交的数据；
// href()不会提示是否提交并且只会提交URL里面的数据，即GET方式提交的数据。
  