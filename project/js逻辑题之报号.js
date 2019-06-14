//题目：有n个人围成一圈，顺序排号。从第一个人开始报数（从1到3报数），凡报到3的人退出圈子，问最后留下的是原来第几号的那位。  

// var arr = [];
// var aa = 0;
// var bb = 0;
// for(var i=1;i<=6;i++){
//     arr.push(i);
// }

// var num = (arr.length-1);
// for(var i=0;i<num;i++){
//     for(var j=0;j<2;j++){ 
//         aa++;
//         if(aa>arr.length-1){
//             aa= 0;
//         }
//     }

//     arr.splice(aa,1)
//     console.log(arr)
// }


function find(n, m) { //定义一个输出最后一个人下标的方法，两个参数 n表示总人数，m表示报的数
    var arr = []; //定义一个空数组
    for (var i = 0; i < n; i++) {
        arr[i] = true; //建立一个可以有n元素的数组,用来模拟报数的总人数 数组中值为true的表示剩下的人，false表示出去的人
    }
    var total = n,
        index = 0,
        count = 0; //定义三个变量total剩下的的人数，index表示数组的下标,count表示从从0-m报的数的下标
    //循环，直到剩下一个人
    while (total > 1) {
        if (arr[index] == true) {
            count++; //如果数组中的值为true，那么从conut+1
            if (count == m) { //判断报数的人的数是否为m,如果为m， 
                count = 0; // 那么重置count计数器
                arr[index] = false; //报m的人出去，即将他的值改为false
                total--; //将剩下的人数-1
            }
        }
        index++; //下标+1 
        if (index == arr.length) { //如果到了最后一人,
            index = 0; //重置下标为0
        }
    } //循环结束
    //遍历整个数组
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == true) { //值为true的人就是剩下的最后一个人 
            return i + 1; //因为数组下标是从0开始的，而报数是从1开始的，所以剩下的那个人报的数为数组下标+1 
        }
    }
    return -1; //如果没有返回-1  
}
console.log(find(11, 3)); 


///

