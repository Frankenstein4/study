//题目：求0—7所能组成的奇数个数。 0 1 2 3 4 5 6 7
var sum = 0,total = 0;
for(var i=1;i<9;i++){
    if(i==1){
        total=4;//1 3 5 7
    }else if(i==2){
        total=total*7;
    }else{
        total*=8;
    }
    console.log("0~7组成" + i + "位数，有：" + total + "个");
    sum+=total;
    
}
console.log("共有"+sum+"个")