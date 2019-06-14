//递归深拷贝

var array = [
    { number: 1 },
    { number: 2 },
    { number: 3 }
 ];
 function copy (obj) {
         var newobj = obj.constructor === Array ? [] : {};
         if(typeof obj !== 'object'){
             return;
         }
         for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ?
            copy(obj[i]) : obj[i];
         }
         return newobj
 }
 var copyArray = copy(array)
 copyArray[0].number = 100;
 console.log(array); //  [{number: 1}, { number: 2 }, { number: 3 }]
 console.log(copyArray); // [{number: 100}, { number: 2 }, { number: 3 }]


 var obj = {
    name: '彭湖湾',
    job: '学生'
  }
  var copyObj = Object.assign({}, obj);
  copyObj.name = '我才不叫彭湖湾呢！ 哼  (。・`ω´・)';
  console.log(obj);   // {name: "彭湖湾", job: "学生"}
  console.log(copyObj);  // {name: "我才不叫彭湖湾呢！ 哼  (。・`ω´・)", job: "学生"}



  var date=Date.now();
  console.log(date);

 




  debugger