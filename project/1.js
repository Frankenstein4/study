function aa(x,y){
    console.log(x+y);
}
aa(2,7);

function bb(x,y){
    return x+y;
}
console.log(bb(1,2));



//json数组去重
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
var paylist=[{chnlNo: "现金", amount: 300}, {chnlNo: "支付宝", amount: "100"},
{chnlNo: "银行卡", amount: "400"}, {chnlNo: "现金", amount: 200}];
var cc=UniquePay(paylist);
console.log(cc);

var a=new Date("2019-4-13").getDay();
console.log(a);

var d=new Date()
console.log(d.getDay())


function riqi(arg){//判断星期几
    var date = new Date(arg).getDay();
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



