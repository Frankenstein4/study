function check(){
    var name=document.getElementsByTagName("input")[0].value;
    var pwd=document.getElementsByTagName("input")[1].value;
    var pwd2=document.getElementsByTagName("input")[2].value;
    if(name==""||pwd==""||pwd2==""){
        alert("选项不能为空");
        return false;
    } else{
        return true;
    }
    }
    document.getElementsByTagName("input")[1].onclick=function(){
     var name=document.getElementsByTagName("input")[0].value;
      if(name==""){
          alert("请先输入账号");
      }else if(name.replace(/[a-zA-Z0-9]{6,12}/,"")==""){
            document.getElementsByTagName("span")[0].style.color="black";
            document.getElementsByTagName("span")[0].innerHTML="账号格式正确"
        }else{
            document.getElementsByTagName("span")[0].style.color="red";
            document.getElementsByTagName("span")[0].innerHTML="账号格式错误密码应为6到12位的数字加英文"
        }
    }
    document.getElementsByTagName("input")[2].onclick=function(){
        var pwd=document.getElementsByTagName("input")[1].value;
        if(pwd==""){
            alert("请先输入密码")
        }else if(pwd.replace(/[a-zA-Z0-9]{6,12}/,"")==""){
            document.getElementsByTagName("span")[1].style.color="black";
            document.getElementsByTagName("span")[1].innerHTML="密码格式正确"
        }else{
            document.getElementsByTagName("span")[1].style.color="red";
            document.getElementsByTagName("span")[1].innerHTML="密码格式错误密码应为6到12位的数字加英文"
        }
        document.getElementsByTagName("input")[2].onblur=function(){
          
            var pwd=document.getElementsByTagName("input")[1].value;
            var pwd2=document.getElementsByTagName("input")[2].value;
            console.log(pwd,pwd2)
            if(pwd2==""){
                alert("确认密码不能为空");
            }else{
            if(pwd==pwd2){
                alert(111);
                document.getElementsByTagName("span")[2].style.color="black";
                document.getElementsByTagName("span")[2].innerHTML="两次密码一致"
            }else if(pwd!==pwd2){
                alert(222);
                document.getElementsByTagName("span")[2].style.color="red";
                document.getElementsByTagName("span")[2].innerHTML="两次密码不一致"
            }
        }
        }
    }