var a=["22","1","33","546"];
var sum=0;
for( var i in a){
    sum+=Number(a[i]);
}

console.log(sum);



for(var j of a){
    sum+=Number(j);
}
