var myMap=new Map();
var keyString="a string";
// myMap.set(keyString,'和键 a string关联的值');
// 	    
// myMap.get(keyString);
// myMap.get('a string');

myMap.set(0,'zero');
myMap.set(1,'one');


for(var [key,value] of myMap){
    console.log(key+"="+value);
}
myMap.forEach(function(value,key){
    console.log(key+"="+value);
})

var a=new Set([1,2,4,5]);
var b=new Set([2,3,4,7]);
var c=new Set([...a,...b]);//合并成对象？ 合并并去重   取点...变成Set { Set { 1, 2, 4, 5 }, Set { 2, 3, 4, 7 } }
console.log(c);
console.log(typeof(c))