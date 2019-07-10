var a=[22,3,9,12,3];
a.forEach(function(item,index,arr){
    item++
// console.log(index);
// console.log(item);
})
//function(currentValue, index, arr) 当前元素，索引，数组对象





//for ... in循环
var b=[1,222,3,544564,5];
for(var i in b){
    console.log(i);//0 1 2 3 4 
    console.log(b[i]);//1,222,3,544564,5
}