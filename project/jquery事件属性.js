//1   event.target   返回哪个dom元素触发了事件  这对比较 event.target 和 this 是非常有用的，以便判断事件是否因事件冒泡被处理。
//实例：
$("p, button, h1").click(function(event){
    $("div").html("通过 " + event.target.nodeName + " 元素触发。");
});




//2  event.currentTarget  在时间冒泡内的当前dom元素，通常等于this
//实例：
$("h1,h2,p").click(function(event){
    alert(event.currentTarget === this);
});//结果为true



//3  event.delegate.Target  返回当前调用的jquery事件处理程序所添加的元素   事件处理程序是在元素的祖先被处理是添加的
//如果事件直接绑定到元素且没有委托!!!(注意事件委托）发生，则event.delegateTarget等同于event.currentTarget
实例
$("body").on("click", "button", function(event){
    alert("delegateTarget 返回: " + event.delegateTarget.nodeName +
    "\ncurrentTarget 返回: " + event.currentTarget.nodeName);
  });

  $("button").on("click", function(event){
    alert("delegateTarget 返回: " + event.delegateTarget.nodeName +
    "\ncurrentTarget 返回: " + event.currentTarget.nodeName);
  });



//4  event.preventDefault()   阻止元素发生默认的行为
//如当点击提交按钮时阻止对表单的提交    阻止以下URL的链接
实例 
$("a").click(function(event){
    event.preventDefault();
});


 
//5  event.stopPropagation()  阻止事件冒泡到父元素，阻止任何父处理程序被执行


//6  event.stoplmmediatePropagation() 阻止剩下的事件处理程序被执行   该方法阻止事件在dom树中向上冒泡
//实例    阻止了事件句柄2、3
$("div").click(function(event){
    alert("事件句柄 1 被执行");
    event.stopImmediatePropagation();
});
$("div").click(function(event){
    alert("事件句柄 2 被执行");
});
$("div").click(function(event){
    alert("事件句柄 3 被执行");
});




