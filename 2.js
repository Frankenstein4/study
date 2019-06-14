function*aa(n){
    x=2+(yield n*10);
    y=2*(yield x+3);
    z=x+y+(yield y);
    return x+y+z;
}
function* bb(m){
    yield*aa(m);
    a=yield m+1;
    b=yield a/2+m+(yield a);
    return a+b;
}
let p=aa(10);
console.log(p.next());//100
console.log(p.next(15));//20
console.log(p.next(18));//36
console.log(p.next(20));//126
console.log(p.next(1000));//undefined
let q=bb(20);
console.log(q.next(21));//200
console.log(q.next(22));//27
console.log(q.next(11));//22
console.log(q.next(50));//21
console.log(q.next(1));//1 a=1
console.log(q.next(7));//27.5 7+20+1/5=27.5
console.log(q.next(6));//7 6+1=7 a=1,b=6