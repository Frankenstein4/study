import { parentPort } from "worker_threads";

//创建对象的方式

//1 对象字面量
let obj={
    name:"张三",
    age:18,
    city:"武汉",
    sg:'181',
    zhiye:"student",
    address:'武汉市洪山区虎泉街二路197号'
}
obj["sex"]='男';
obj['like']='苹果';
console.log(obj);


//2 使用内置构造函数
let objb=new Object();
objb.name="张三";
objb.age=12;
objb.sing=function(){
    console.log(123)
}
console.log(objb)



//3  封装简单的工厂函数（不推荐使用
function createPerson(name,age){
    let objc=new Object();
    objc.name=name;
    objc.age=age;
    objc.sing=function(){
        console.log(000);
    }
    return objc;
}
let objPerson=createPerson('小张',23)
console.log(objPerson)




//4   自定义构造函数
function Person(name,age){
    this.name=name;
    this.age=age;
}
let p=new Person("小张",19);
console.log(p);




//5


debugger