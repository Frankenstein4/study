// function*aa(n){
//     x=2+(yield n*10);
//     y=2*(yield x+3);
//     z=x+y+(yield y);
//     return x+y+z;
// }
// function* bb(m){
//     yield*aa(m);
//     a=yield m+1;
//     b=yield a/2+m+(yield a);
//     return a+b;
// }
// let p=aa(10);
// console.log(p.next());
// console.log(p.next(15));
// console.log(p.next(18));
// console.log(p.next(20));
// console.log(p.next(1000));
// let q=bb(20);
// console.log(q.next(21));
// console.log(q.next(22));
// console.log(q.next(11));
// console.log(q.next(5));
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;