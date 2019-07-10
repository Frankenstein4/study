//1 
uexWindow.openMultiPopover(content,popName,dataType,x,y,w,h,fontSize,flag,indexSelected,extraInfo);
//实例
var params ={
    content: [{
                  inPageName:"MA0027_0004",
                  inUrl:"MA0027_0004.html",
                  inData:""
              },{
                  inPageName:"MA0027_0005",
                  inUrl:"MA0027_0005.html",
                  inData:""
              },{
                  inPageName:"MA0027_0006",
                  inUrl:"MA0027_0006.html",
                  inData:""
              },{
                  inPageName:"MA0027_0007",
                  inUrl:"MA0027_0007.html",
                  inData:""
              },{
                  inPageName:"MA0027_0008",
                  inUrl:"MA0027_0008.html",
                  inData:""
              }]
};
var paramStr = JSON.stringify(params);    
    uexWindow.openMultiPopover(paramStr,"content",0,0,titHeight,"",cheight,'',0,0);
    window.onorientationchange = window.onresize = function() {
        appcan.frame.resize("content", 0, titHeight);//content为子页面（子页面有多个页面）
    }
//paramStr为多页面窗口数据格式为json，不可为空
//"content" 浮动窗口名称
//0  Number类型 窗口载入的数据的类型，0：url方式载入；1：html内容方式载入；2：既有url方式， 又有html内容方式
//0 x坐标
//titHeight  y坐标
//""  宽度，为空时默认为window的宽度
//cheight  	高度，为空时默认为window的高度
//''   字体大小
//0  浮动窗口标记
//0  默认打开的页面索引，默认为0



//2 appcan.tab({参数}) Tab选项卡组件
//实例
var tabview = appcan.tab({
    selector : "#tabview",
    hasIcon : false,
    hasAnim : false,
    hasLabel : true,
    hasBadge : false,
    data : [{
        label : "采购申请"
    }, {
        label : "采购申请行"
    },{
        label : "收藏1"
    }, {
        label : "收藏2"
    }, {
        label : "收藏3"
    }]
});
        var index1=0;
        tabview.on("click", function(obj, index) {//tab变更时切换多幅动按钮
            index1=index;
            appcan.window.selectMultiPopover("content",index);
            if(index == 0){
                $("#gjsearch").removeClass("uhide");//高级查询按钮
                $("#saomiao").addClass("uhide");//扫描
                $("#searchSel").removeClass("uhide");//下拉框
                $("#searchSelH").addClass("uhide");//点击采购申请（下拉框内容改变）  即一开始默认隐藏采购申请行内容隐藏
                
                
                var checkValue=$("#searchSel").val();
                $("#searchVal").attr("placeholder",checkValue);
                
            //    uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0004", "actionList()");
            }else if(index == 1){  
                $("#gjsearch").removeClass("uhide");
                $("#saomiao").addClass("uhide");
                $("#searchSel").addClass("uhide");
                $("#searchSelH").removeClass("uhide");//点击采购申请行（下拉框内容改变） 内容不再隐藏
                
                
                var checkValue=$("#searchSelH").val();
                $("#searchVal").attr("placeholder",checkValue);
                
                uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0005", "initData()");
                
            }else if(index == 2){//点击收藏1  
                $("#gjsearch").addClass("uhide");
                $("#saomiao").addClass("uhide");
               // $("#searchSel").addClass("uhide");
                $("#searchSelH").addClass("uhide");
                
                uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0006", "refrash()");
            }else if(index == 3){//点击收藏2 
                $("#gjsearch").addClass("uhide");
                $("#saomiao").addClass("uhide");
             //   $("#searchSel").addClass("uhide");
                $("#searchSelH").addClass("uhide");
                
                uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0007", "refrash()");
            }else if(index == 4){//点击收藏3  
                $("#gjsearch").addClass("uhide");
                $("#saomiao").addClass("uhide");
             //   $("#searchSel").addClass("uhide");
                $("#searchSelH").addClass("uhide");
                
                uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0008", "refrash()");
            }
        })

        appcan.button("#search", "btn-act", function() {//点击搜索图标
            var inputVal = $("#searchVal").val();
            if(index1 == 0){
                appcan.locStorage.remove("MA0027_0004_cgsqh");
                appcan.locStorage.remove("MA0027_0004_wzyt");
                
                var checkValue=$("#searchSel").val();//下拉选框里的内容
                if(checkValue=="采购申请号"){//如果是采购申请号
                    appcan.locStorage.setVal("MA0027_0004_cgsqh",inputVal);
                }else if(checkValue=="物资用途"){//如果是物资用途
                    appcan.locStorage.setVal("MA0027_0004_wzyt",inputVal);
                }
                uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0004", "search()");//引用0004.html,和0004.html的search()方法
            }else if(index1 == 1){  
                appcan.locStorage.remove("MA0027_0005_wzbm");
                appcan.locStorage.remove("MA0027_0005_cgsqh");
                appcan.locStorage.remove("MA0027_0005_wzmc");
                appcan.locStorage.remove("MA0027_0005_ggxh");
                appcan.locStorage.remove("MA0027_0005_cgsqzt");
                appcan.locStorage.remove("MA0027_0005_xmbh");
                appcan.locStorage.remove("MA0027_0005_xmmc");
                appcan.locStorage.remove("MA0027_0005_sqbm");
                appcan.locStorage.remove("MA0027_0005_cjrqq");
                appcan.locStorage.remove("MA0027_0005_cjrqz");
                appcan.locStorage.remove("MA0027_0005_th");
                
                var checkValue=$("#searchSelH").val();
                appcan.locStorage.setVal("MA0027_0005_seachState","1");
                if(checkValue=="采购申请号"){
                    appcan.locStorage.setVal("MA0027_0005_cgsqh",inputVal);
                }else if(checkValue=="物资编码"){
                    appcan.locStorage.setVal("MA0027_0005_wzbm",inputVal);
                }else if(checkValue=="物资名称"){
                    appcan.locStorage.setVal("MA0027_0005_wzmc",inputVal);
                }
                uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0005", "search()");
            }else if(index1 == 2){ 
              //  var checkValue=$("#searchSelH").val(); 
                uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0006", "search('"+checkValue+"')");
            }else if(index1 == 3){  
             //   var checkValue=$("#searchSelH").val();
                uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0007", "search('"+checkValue+"')");
            }else if(index1 == 4){  
               // var checkValue=$("#searchSelH").val();
                uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0008", "search('"+checkValue+"')");
            }
        })




//3 evaluateMultiPopoverScript 在多页面浮动窗口中执行js脚本
uexWindow.evaluateMultiPopoverScript("", "content", "MA0027_0004", "actionList()");


//4 引用父页面的方法
appcan.window.evaluateScript('','shoucang()');//比如这行代码写在0004.html页面
function shoucang(){//但是shoucang()方法写在0003.html
    appcan.window.openPopover({
         name:'MA0027_0170',
         url: "MA0027_0170.html",
         width:cwidth,
         height:cheight,
         top:titHeight
    });
}

//5打开一个弹框
//比如在0015.html页面打开一个弹框
function xzxm(){
    // var pWidth= appcan.locStorage.getVal("MA0300_0414_pWidth");
    // var pHeight= appcan.locStorage.getVal("MA0300_0414_pHeight");
     var pWidth  = $("#page").offset().width;//0015.html页面的宽和高
     var pHeight = $("#page").offset().height;
       appcan.window.openPopover({
       name : "MA0300_0416",
       url : "MA0300_0416.html",
       width : pWidth,
       height : pHeight
   });
}


//6 类似猫眼电影正在上映和即将上映的转换一
appcan.button(".title","btn-act",function(){
    var titHeight = $("#hh").offset().height;//得到首页的高度
    var index = $(".title").index(this);//获取当前点击的元素index
    if(index == 0){
        $(".daichuli").eq(0).addClass("header_mask header_col");
        $(".daichuli").eq(1).removeClass("header_mask header_col");
        appcan.frame.open("MA0030_0002","MA0030_0002.html",0,titHeight);
    }else{
        $(".daichuli").eq(0).removeClass("header_mask header_col");
        $(".daichuli").eq(1).addClass("header_mask header_col");
        appcan.frame.open("MA0030_0002","MA0030_0003.html",0,titHeight);
    }
});
 



//7 类似猫眼电影正在上映和即将上映的转换二
//实例 MA0027_0180.html 
appcan.button(".tab", "btn-act", function() {
    switch(this.id) {
        //采购申请
        case "tab_1":
            break; 
        //采购申请行
        case "tab_2":
            
         //   appcan.window.close(-1);
            appcan.locStorage.setVal("MA0027_closePage","MA0027_0180");
            appcan.window.open("MA0027_0181","MA0027_0181.html",5);
          
         //   appcan.window.close(-1);
            break; 
        //收藏1
        case "tab_3":
            appcan.locStorage.setVal("MA0027_closePage","MA0027_0180");
            appcan.window.open("MA0027_0182","MA0027_0182.html",5);
            appcan.frame.evaluateScript({
               name:"MA0027_0182",
               popName:"MA0027_0006",
               scriptContent:"refrash()"
            });
         //   appcan.window.close(-1);
            break; 
        //收藏2
        case "tab_4":
            appcan.locStorage.setVal("MA0027_closePage","MA0027_0180");
            appcan.window.open("MA0027_0183","MA0027_0183.html",5);
            appcan.frame.evaluateScript({
               name:"MA0027_0183",
               popName:"MA0027_0007",
               scriptContent:"refrash()"
            });
         //  appcan.window.close(-1);
            break; 
        //收藏3
        case "tab_5":
            appcan.locStorage.setVal("MA0027_closePage","MA0027_0180");
            appcan.window.open("MA0027_0184","MA0027_0184.html",5);
            appcan.frame.evaluateScript({
               name:"MA0027_0184",
               popName:"MA0027_0008",
               scriptContent:"refrash()"
            });
         //   appcan.window.close(-1);
            break; 
    }
})




//8 调用别的页面的方法
appcan.frame.evaluateScript("MA0300_0005","MA0300_0006","ReceivedValue('"+BAOMINGKSSJ+","+BAOMINGJSSJ+","+ZT+"')");

//比如在0008.html写
appcan.frame.evaluateScript({
    name:"MA0300_0005",//父页面
    popName:"MA0300_0006",//是父页面的从属页面
    scriptContent:"zpbh('"+VALUE+"','"+NAME+"','"+JILUTS+"')"
    
});

//在0006.html页面有
zpbh= function(VALUE,NAME,JILUTS){                 
    VALUE=nullToBlank(VALUE);
    NAME=nullToBlank(NAME);           
    $("#insearch").val(NAME);
    $("#fhdbm").html(VALUE);
     $("#yxzgw").html(0);                   
    actionList2();
    $("#bmsjqza").removeClass("uhide");
    appcan.locStorage.setVal('zpxmbh',VALUE);
} 



//9 appcan.window.evaluateScript的另一种情况
appcan.button(".nav-btn", "btn-act", function() {
    appcan.window.evaluateScript({
        name:"MA0027_0181",
        scriptContent:'closeG()'
    }); 
    appcan.window.evaluateScript({
        name:"MA0027_0182",
        scriptContent:'closeG()'
    }); 
    appcan.window.evaluateScript({
        name:"MA0027_0183",
        scriptContent:'closeG()'
    }); 
    appcan.window.evaluateScript({
        name:"MA0027_0184",
        scriptContent:'closeG()'
    });
    appcan.window.close(-1);
})




//10向指定通道发送消息 
appcan.window.publish(channelId,msg);//channelId:发送指定消息的通道 msg:要发送的消息内容


//比如在0416.html页面通知0415.html
function Number(ZHAOPINBH){//点击选中项目触发事件            
    appcan.locStorage.setVal('MA0300_0416_ZHAOPINBH',ZHAOPINBH);
   appcan.window.publish('MA0300_0415','MA0300_0416');
     appcan.window.close(-1);
} 
//在0415.html页面写
appcan.window.subscribe('MA0300_0415',function(msg){
    var ZHAOPINBH=appcan.locStorage.getVal('MA0300_0416_ZHAOPINBH');
    userInfo(ZHAOPINBH);//自定义方法
})

//11  ajax查询数据
function actionList(type){
     var pm1 = "20";//每页信息条数
     var pm2 = pageNo;//第几页
     var pm3="";
     var pm4="";
     var pm5="";
     appcan.window.openToast("数据加载中", '', 5, 1);
     var _url = url + '/aa?u1=' + encodeURIComponent(userId) 
              +'&t=4&bs=' + encodeURIComponent('M0005_0033') 
              +'&pm1=' + encodeURIComponent(pm1)
              +'&pm2=' + encodeURIComponent(pm2)
              +'&pm3=' + encodeURIComponent(pm3)
              +'&pm4=' + encodeURIComponent(pm4)
              +'&pm5=' + encodeURIComponent(pm5);
     console.log(_url);
     
     appcan.request.ajax({
         url : _url,
         type : 'get',
         dataType : 'json',
         data : {},
         success : function(data, status) {
             console.log(data);
             uexWindow.resetBounceView(type);
             if (data.status == 0) {
                 var data = data.data;
                 var len = data.length;
                 var str = "";
                 if(len == 0){  
                     appcan.window.closeToast();
                     return;
                 }                            
                 records =len ;
                 if(len>0&&data[0].ERROR!=undefined&&data[0].ERROR!=""&&data[0].ERROR!=null){
                      appcan.window.closeToast();
                      appcan.window.alert({
                         title : '提示',
                         content : data[0].ERROR,
                         buttons : ['确定'],
                         callback : function(err, data, dataType, optId) {
                         }
                       });  
                       return; 
                 }
                 if(len>0&&data[0].error!=undefined&&data[0].error!=""&&data[0].error!=null){
                      appcan.window.closeToast();
                      appcan.window.alert({
                         title : '提示',
                         content : data[0].error,
                         buttons : ['确定'],
                         callback : function(err, data, dataType, optId) {
                         }
                       });  
                       return; 
                 }
                 
                 for(var i=0;i<len;i++){
                      var LBMC= data[i].LBMC;LBMC=nullToBlank(LBMC);//会议类别
                      var HUIYIMC = data[i].HUIYIMC;HUIYIMC=nullToBlank(HUIYIMC);//会议名称
                      var ZHCMC =data[i].ZHCMC;ZHCMC=nullToBlank(ZHCMC);//会议地点
                      var CHAXUNZT =data[i].CHAXUNZT;CHAXUNZT=nullToBlank(CHAXUNZT);//会议状态                      
                      var CHUANGJIANSJ=data[i].CHUANGJIANSJ;CHUANGJIANSJ=nullToBlank(CHUANGJIANSJ);//申请时间
                      
                      
                      str+='<div class="mother">'+
                      '<div class="ub mhb">'+
                      '<div style="margin-right:.2em;padding-top:.8em;" class="">会议类别：</div>'+
                      '<div class="sc-text-active ub-f1 word" style="padding-top:.8em;font-weight:bolder;">'+LBMC+'</div>'+
                      '</div>'+
                      '<div class="ub mhb ub-ac">'+
                     '<div style="margin-right:.2em;">会议名称：</div>'+
                         '<div class="ub-f1 word bc-text">'+HUIYIMC+'</div>'+
                     '</div>'+
                         '<div class="ub mhb ub-ac">'+
                     '<div style="margin-right:.2em;">会议地点：</div>'+
                             '<div class="ub-f1 word bc-text">'+ZHCMC+'</div>'+
                     '</div>'+
                     '<div class="ub mhb ub-ac">'+
                     '<div style="margin-right:.2em;">会议状态：</div>'+
                 '<div class="ub-f1 word bc-text">'+CHAXUNZT+'</div>'+
              '</div>'+
                     '<div class="ub mhb ub-ac">'+
                       '<div style="margin-right:.2em;">申请时间：</div>'+
                     '<div class="ub-f1 word bc-text">'+CHUANGJIANSJ+'</div>'+
                 '</div>'+
             '</div>';
             }
             
             if (pageNo == 1) {
                     $("#listview").html(str);
                 } else {
                     $("#listview").append(str);
                 }                         
               
                appcan.window.closeToast();
             } else {
                 appcan.window.closeToast();
                 appcan.window.alert({
                     title : '提示',
                     content : "请求失败，请重试",
                     buttons : ['确定'],
                     callback : function(err, data, dataType, optId) {
                     }
                 });
             }
         },
         error : function(e) {
             appcan.window.closeToast();
             uexWindow.resetBounceView(type);
             appcan.window.alert({
                 title : '提示',
                 content : '网络繁忙,请重试！',
                 buttons : ['确定'],
                 callback : function(err, data, dataType, optId) {
                 }
             });
         }
     });
}



//12  ajax存储数据
//实例  访客查询0005.html

 function save(){//点击保存按钮的一系列操作 // 新增保存 
    var SJH1 = $("#bfrsjh").val();
    var SJH2 = $("#lxrsjh").val();
    var SFZH = $("#lfsfzh").val();
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    
        if(!reg.test(SFZH)){//test() 方法用于检测一个字符串是否匹配某个模式.在common2.js中写了
            appcan.window.alert({
                title : '提示',
                content : "受访人身份证格式错误",
                buttons : ['确定'],
                callback : function(err, data, dataType, optId) {
                }
            });
            return;
        }
        if(!myreg.test(SJH1)){
            appcan.window.alert({
                title : '提示',
                content : "受访   人手机号格式错误",
                buttons : ['确定'],
                callback : function(err, data, dataType, optId) {
                }
            });
            return;
        }
        if(!myreg.test(SJH2)){
            appcan.window.alert({
                title : '提示',
                content : "来访人手机号格式错误",
                buttons : ['确定'],
                callback : function(err, data, dataType, optId) {
                }
            });
            return;
        }
        if($("#lxr").val() == ""){
            appcan.window.alert({
                title : '提示',
                content : "请输入联系人",
                buttons : ['确定'],
                callback : function(err, data, dataType, optId) {
                }
            });
            return;
        }
        if($("#lfsfzh").val() == ""){
            appcan.window.alert({
                title : '提示',
                content : "请输入来访身份证号",
                buttons : ['确定'],
                callback : function(err, data, dataType, optId) {
                }
            });
            return;
        }
        if($("#lfsjq").val() == ""){
            appcan.window.alert({
                title : '提示',
                content : "请选择来访时间起",
                buttons : ['确定'],
                callback : function(err, data, dataType, optId) {
                }
            });
            return;
        }
        if($("#lfsjz").val() == ""){
            appcan.window.alert({
                title : '提示',
                content : "请选择来访时间止",
                buttons : ['确定'],
                callback : function(err, data, dataType, optId) {
                }
            });
            return;
        }
        if($("input[name='lx']:checked").val() == ""){
            appcan.window.alert({
                title : '提示',
                content : "请选择来访类型",
                buttons : ['确定'],
                callback : function(err, data, dataType, optId) {
                }
            });
            return;
        }
        if($("#sy").val() == ""){
            appcan.window.alert({
                title : '提示',
                content : "请输入来访事由",
                buttons : ['确定'],
                callback : function(err, data, dataType, optId) {
                }
            });
            return;
        }
        
      // var BTN = "";
      var pm1 = "";
      if (Btn_state == 1) {
           pm1 = "-1";
        }else if(Btn_state == 2){
           pm1 = SQDH;
       }

      var pm2 = nullToBlank($("#sfrbm").val());// 受访人编码
      var pm3 = nullToBlank($("#bfrsjh").val()); // 受访人手机号
      var pm4 = nullToBlank($("#lxr").val());// 联系人
      var pm5 = nullToBlank($("#dwmc").val());// 来访单位
      var pm6 = nullToBlank($("#lxrsjh").val());// 来访手机号          
      var pm7 = nullToBlank($("#lfsfzh").val()); // 来访身份证号
      var pm8 = nullToBlank($("#lfsjq").val()); // 来访时间起
      var pm9 = nullToBlank($("#lfsjz").val()); // 来访时间止
      var pm10 = nullToBlank($("input[name='lx']:checked").val()); // 类型         
      var pm11;
      var pm12 = nullToBlank($("#sy").val());// 事由
      appcan.window.openToast("数据加载中", '', 5, 1);
        var _url = url + '/pd?u1=' + encodeURIComponent(userId) 
                 +'&bs=' + encodeURIComponent('M0036_0002')+'&t=36'
                 +'&pm1='+encodeURIComponent(pm1)
                 +'&pm2='+encodeURIComponent(pm2)
                 +'&pm3='+encodeURIComponent(pm3)
                 +'&pm4='+encodeURIComponent(pm4)
                 +'&pm5='+encodeURIComponent(pm5)
                 +'&pm6='+encodeURIComponent(pm6)
                 +'&pm7='+encodeURIComponent(pm7)
                 +'&pm8='+encodeURIComponent(pm8)
                 +'&pm9='+encodeURIComponent(pm9)
                 +'&pm10='+encodeURIComponent(pm10)
                 +'&pm11=0'
                 +'&pm12='+encodeURIComponent(pm12);
                 
        console.log(_url);//此时pm1=-1，访问接口请求回的数据为RECORDID
        appcan.request.ajax({
            url : _url,
            type : 'get',
            dataType : 'json',
            data : {},
            success : function(data, status) {
                // uexWindow.resetBounceView(type);
                if (data.status == 0) {
                    
                    var data = data.data;
                    
                    var len = data.length;
                    var str = "";
                    records =len ;
                    if(len>0&&data[0].ERROR!=undefined&&data[0].ERROR!=""&&data[0].ERROR!=null){
                         appcan.window.closeToast();
                         appcan.window.alert({
                            title : '提示',
                            content : data[0].ERROR,
                            buttons : ['确定'],
                            callback : function(err, data, dataType, optId) {
                            }
                          });  
                          return; 
                    }
                    if(len>0&&data[0].error!=undefined&&data[0].error!=""&&data[0].error!=null){
                         appcan.window.closeToast();
                         appcan.window.alert({
                            title : '提示',
                            content : data[0].error,
                            buttons : ['确定'],
                            callback : function(err, data, dataType, optId) {
                            }
                          });  
                          return; 
                    }
                   var RECORDID=data[0].RECORDID; RECORDID=nullToBlank(RECORDID);
                    appcan.window.publish('MA0030_0003','MA0030_0005');
                    appcan.window.publish('MA0030_0002','MA0030_0005');                       
                   $("#fkxx").removeClass("uhide");//新增访客信息
                   $("#add").removeClass("uhide");
                   console.log(RECORDID);//结果为申请单编号，只有在点击保存后才能算完成一个申请单得到申请单编号
                    if(Btn_state == 1){//一开始Btn_state的状态就为1
                        Btn_state = 2;
                        appcan.locStorage.setVal('MA0030_0001_SHENQINGDH',RECORDID);//在0007.html页面会使用到
                        SQDH = RECORDID; //此时申请编号改变  
                    }
                    appcan.window.closeToast();                                  

                    // actionList();                                    

                } else {
                    appcan.window.closeToast();
                    appcan.window.alert({
                        title : '提示',
                        content : "请求失败，请重试",
                        buttons : ['确定'],
                        callback : function(err, data, dataType, optId) {
                        }
                    });
                }
            },
            error : function(e) {
                appcan.window.closeToast();
                uexWindow.resetBounceView(type);
                appcan.window.alert({
                    title : '提示',
                    content : '网络繁忙,请重试！',
                    buttons : ['确定'],
                    callback : function(err, data, dataType, optId) {
                    }
                });
            }
        });         
        
   }




//13   ajax判断数据
//实例  岗位竞聘0008.html

     function signUp(VALUE,NAME){//是否报名结束
        var pm1 = VALUE;
       appcan.window.openToast("数据加载中", '', 5, 1);
       var _url = url + '/ra?u1=' + encodeURIComponent(userId) 
                +'&t=31&bs=' + encodeURIComponent('M0031_0029')
                +'&pm1=' + encodeURIComponent(pm1);            
       console.log(_url);
       appcan.request.ajax({
           url : _url,
           type : 'get',
           dataType : 'json',
           data:{},
           success : function(data,status) {
           // uexWindow.resetBounceView(type);
           if(data.status==0){
              var data = data.data;
              console.log(data);
              var len = data.length;                               
              var str = "";
              records =len ;
               if(len>0&&data[0].ERROR!=undefined&&data[0].ERROR!=""&&data[0].ERROR!=null){
                appcan.window.closeToast();
                appcan.window.alert({
                   title : '提示',
                   content : data[0].ERROR,
                   buttons : ['确定'],
                   callback : function(err, data, dataType, optId) {
                   }
                 });
                 return; 
             }
             if(len>0&&data[0].error!=undefined&&data[0].error!=""&&data[0].error!=null){
                    appcan.window.closeToast();
                    appcan.window.alert({
                       title : '提示',
                       content : data[0].error,
                       buttons : ['确定'],
                       callback : function(err, data, dataType, optId) {
                       }
                     });
                     return  
               }
               
               if(len>0){
                   //alert("时间内")
                   var VALUE=data[0].VALUE;VALUE=nullToBlank(VALUE);//招聘编号
                   var NAME=data[0].NAME;NAME=nullToBlank(NAME);//项目名称
                   var BAOMINGKSSJ=data[0].BAOMINGKSSJ;BAOMINGKSSJ=nullToBlank(BAOMINGKSSJ);//报名开始时间    
                   var BAOMINGJSSJ=data[0].BAOMINGJSSJ;BAOMINGJSSJ=nullToBlank(BAOMINGJSSJ);//报名结束时间
                   var ZT=data[0].ZT;ZT=nullToBlank(ZT);//个人应聘状态      
                   
                   appcan.frame.evaluateScript("MA0300_0005","MA0300_0006","ReceivedValue('"+BAOMINGKSSJ+","+BAOMINGJSSJ+","+ZT+"')");
                   openItem(VALUE,NAME); //判断状态方法                                                                                                       
               }else{
                   //alert("时间外")
                   appcan.window.alert({
                       title : '提示',
                       content : '您选择项目报名已结束！',
                       buttons : ['确定'],
                       callback : function(err, data, dataType, optId) {
                           // appcan.window.evaluateScript("","closeG()")
                           appcan.frame.evaluateScript("MA0300_0005","MA0300_0006","goStyle()")                                       
                           appcan.window.closeToast();                            
                       }
                     });

               }                
  
                        appcan.window.closeToast();
                           } else {
                               appcan.window.closeToast();
                               appcan.window.alert({
                                   title : '提示',
                                   content : "请求失败，请重试",
                                   buttons : ['确定'],
                                   callback : function(err, data, dataType, optId) {
                                   }
                               });
                           }
                       },
                       error : function(e) {
                           appcan.window.closeToast();
                           // uexWindow.resetBounceView(type);
                           appcan.window.alert({
                               title : '提示',
                               content : '网络繁忙,请重试！',
                               buttons : ['确定'],
                               callback : function(err, data, dataType, optId) {
                               }
                           });
                       }
                   });
    }

    //判断状态函数方法
    function openItem(VALUE,NAME){      
        var pm1 = VALUE;    
        appcan.window.openToast("数据加载中", '', 5, 1);
        var _url = url + '/rb?u1=' + encodeURIComponent(userId) 
                 +'&t=31&bs=' + encodeURIComponent('M0031_0005')
                 +'&pm1=' + encodeURIComponent(pm1);            
        console.log(_url);
        appcan.request.ajax({
            url : _url,
            type : 'get',
            dataType : 'json',
            data:{},
            success : function(data,status) {
            // uexWindow.resetBounceView(type);
            if(data.status==0){
               var data = data.data;
               console.log(data);
               var len = data.length;
               var str = "";
               records =len ;
                if(len>0&&data[0].ERROR!=undefined&&data[0].ERROR!=""&&data[0].ERROR!=null){
                 appcan.window.closeToast();
                 appcan.window.alert({
                    title : '提示',
                    content : data[0].ERROR,
                    buttons : ['确定'],
                    callback : function(err, data, dataType, optId) {
                    }
                  });
                  return; 
              }
              if(len>0&&data[0].error!=undefined&&data[0].error!=""&&data[0].error!=null){
                     appcan.window.closeToast();
                     appcan.window.alert({
                        title : '提示',
                        content : data[0].error,
                        buttons : ['确定'],
                        callback : function(err, data, dataType, optId) {
                        }
                      });
                      return  
                }
               
                var JILUTS = data[0].JILUTS;JILUTS=nullToBlank(JILUTS);//状态 
                console.log("状态去不同页面");
                console.log(JILUTS);
                if(JILUTS=="0"){                        
                      appcan.frame.evaluateScript({
                           name:"MA0300_0005",
                           popName:"MA0300_0006",
                           scriptContent:"zpbh('"+VALUE+"','"+NAME+"','"+JILUTS+"')"
                           
                       });
                       appcan.window.evaluateScript('','closeG()'); 
                 } 
                 if(JILUTS!="0"){
                     appcan.locStorage.setVal('zpxmbh',VALUE);
                     appcan.window.open("MA0300_0015","MA0300_0015.html",10);
                 }                                                             
                appcan.window.closeToast();
                            } else {
                                appcan.window.closeToast();
                                appcan.window.alert({
                                    title : '提示',
                                    content : "请求失败，请重试",
                                    buttons : ['确定'],
                                    callback : function(err, data, dataType, optId) {
                                    }
                                });
                            }
                        },
                        error : function(e) {
                            appcan.window.closeToast();
                            appcan.window.alert({
                                title : '提示',
                                content : '网络繁忙,请重试！',
                                buttons : ['确定'],
                                callback : function(err, data, dataType, optId) {
                                }
                            });
                        }
                    });
                }






//14  按键事件的监听方法
uexWindow.onKeyPressed = function(keyCode){
    //   alert(keyCode);
       if(keyCode==0){
           appcan.window.evaluateScript({
               name:"MA0027_0181",
               scriptContent:'closeG()'
           }); 
           appcan.window.evaluateScript({
               name:"MA0027_0182",
               scriptContent:'closeG()'
           }); 
           appcan.window.evaluateScript({
               name:"MA0027_0183",
               scriptContent:'closeG()'
           }); 
           appcan.window.evaluateScript({
               name:"MA0027_0184",
               scriptContent:'closeG()'
           });
           appcan.window.close(-1);
       }
   }
   
   

//15 屏幕旋转的监听方法
window.onorientationchange = window.onresize = function() {
    appcan.frame.resize("MA0300_0002",0,titheight);
}



//16  重置弹动
var pageNo = 1;
var records=0;
appcan.ready(function() {
    appFun.setBounce([0, 1], function(type) {
        pageNo = 1;
        actionList(type);
    }, function(type) {
        if(records<20){uexWindow.resetBounceView(type);return };
        pageNo++;
        actionList(type);
    }, "gbname"); 
    actionList();
    // appcan.window.subscribe('MA0028_0004',function(msg){
        // if(msg=="refresh"){
            // refresh();
        // }
    // });
    // function refresh(){
        // actionList();
    // } 
});



//17  
//若没有引入jquery.min.js  
var titHeight=$("#hh").offset().height;
//若引入jquery.min.js
var pWidth  = $("#hh").width();
var pHeight = $("#hh").height();



//18
appcan.button("#nav-left", "btn-act", function() {
    appcan.window.close(-1);        
});



//19复选框选中会议室，pm5为选中的会议id拼接，可以多选;
// 将"HYS000000","HYS000003","HYS000016"拼接成"HYS000000,HYS000003,HYS000016"
var arrs=[];         
var item = $("input[name=item]:checked");
 if(item.length>0){
       item.each(function(index,value){
         arrs.push($(item).eq(index).val());
    });  
                
 }
  var str="";
  for(x in arrs){
    str+=arrs[x]+","
   }
  var pm5=str.substr(0,str.length-1);



//20  引用closeG()
//在父页面写入
  function closeG(){
    appcan.window.close(-1);
}
//在子页面写入引用
appcan.window.evaluateScript('',"closeG()");





//21  验证手机号
            var y=/^[1][3,4,5,7,8][0-9]{9}$/;
                            if(y.exec(pm4)==null){
                                appcan.window.alert({
                                title : '提示',
                                content : "手机号格式错误！",
                                buttons : ['确定'],
                                callback : function(err, data, dataType, optId) {
                  }
                });
                return   //会跳出这个函数
               }



//22  键盘只能输入数字  简洁版本
<input type="number" pattern="[0-9]*" onkeyup="onlyNum(this)" name="sjh" id="sjh" class="ub ub-ac ub-f1 font-2 input-c" placeholder="请输入"/>

 function onlyNum(that){//键盘只能输入数字
    that.value = that.value.replace(/[^\d]+/,"");
}



//23   所有的人数都保存
var arr=[];
arr.push(HUIYIID);
function saveAfter(){//保存事件
    var o = $("input[name=renshu]");//所有name=renshu的input框的集合
    var ol = o.length;
   
    o.each(function(index,value){//下标   值
        
       save(value.value,arr[index]);//下标对应专属id
       
       if(ol==index+1){
           
           actionList();
        
       }
    })
    
}

调用人数保存接口
function save(pm7,pm1){
  //....
}




//24   父页面调用子页面方法

appcan.frame.evaluateScript("","MA0017_0002","getOnDelete()");
//0001页面调用0002页面的方法





//25   使用Oracle语句查询websql数据库里表内容

例子:
//获取本地实物资产清查任务列表数据
function initLocalData(){
    appcan.window.openToast("数据加载中", '', 5, 1);
    db.transaction(function(tx){
        tx.executeSql("select * from t1",[],function(tx,result){
              var dataall = [];
              for(var i =0;i<result.rows.length;i++){
                  //rows是因为在Oracle学习笔记中，列是存储在表中的一块数据,行是一组能够描述某个事物的列的集合。列和行构成了表
                  dataall.push(result.rows.item(i));
                  //console.log(result.rows.item(i).CREATE_USER)
              } 
              
             var data = {status:"0",data:dataall}
             getCheckMissionData(null,data);//初始化数据
                  
        },function(){})
    }) 	
}

例子根据动态id
//实物资产清查任务行查询
function SelectlData(){
    var searchvalue=localStorage.getItem("MA0017_0010_value");
    db.transaction(function(tx){
          tx.executeSql("select * from t2 where MISSION_NO like '%'||?||'%' or PA_DESC like '%'||?||'%'",[searchvalue,searchvalue],function(tx,result){
                var dataall = [];
                for(var i =0;i<result.rows.length;i++){
                    dataall.push(result.rows.item(i));
                } 
               var data = {status:"0",data:dataall}       
               getSelectList(null,data) ;
               //之后再次进行循环，只不过从接口取出数据变成了从websql取数据  下面一个语句就是创建和打开了一个websql数据库
            //var dbname = "checkmissiondb";var db = openDatabase(dbname,'','',1024000);//打开数据库    dbname名称   1024000数据库大小   
          },function(tx,error){alert(error.message)})
    })  
}
注意 //在Oracle中，||为连接符
例子在Oracle中的拼接模糊查询的正确写法
//SELECT A.USER_ID,A.USER_NAME FROM USER A AND A.USER_NAME like concat(concat('%','w'),'%')
     或者
//SELECT A.USER_ID,A.USER_NAME FROM USER A AND A.USER_NAME like '%' || 'w' || '%'

function  getSelectList (type,data){
    //   uexWindow.resetBounceView(type);

       if(data.status==0){
          var data = data.data;
          var len = data.length;
          if(len>0&&data[0].ERROR!=undefined&&data[0].ERROR!=""&&data[0].ERROR!=null){
                 appcan.window.alert({
                       title : '提示',
                       content : data[0].ERROR,
                       buttons : ['确定'],
                       callback : function(err, data, dataType, optId) {
                       }
                 }); 
                 return;   
          }
          if(len==0){
              $("#data_1").html("暂无数据") ;
          }
          var str = "";                   
          for (var i = 0; i < len; i++) {
        
                       var F0  = data[i].MISSION_NO;           F0 = nullToBlank(F0); //任务编码         
                       var F1  = data[i].LINE_NO;              F1 = nullToBlank(F1); //行号
                       var F2  = data[i].REQ_NO;               F2 = nullToBlank(F2);//申请号

                       var F3  = data[i].PA_DESC;              F3 = nullToBlank(F3);//实物资产名称
                       var F4  = data[i].TYPE_DESIGNATION;     F4 = nullToBlank(F4);//型号规格
                       var F5  = data[i].EXTERNAL_ID;          F5 = nullToBlank(F5);//出厂编号
                       var F6  = data[i].LICENSE_PLATE;        F6 = nullToBlank(F6);//牌照编号 
                       var F7  = data[i].USE_DEPT;             F7 = nullToBlank(F7);//使用部门
                       var USE_DEPTNAME = data[i].USE_DEPTNAME;  USE_DEPTNAME = nullToBlank(USE_DEPTNAME);//使用部门名称
                       
                       var F8  = data[i].OBJECT_OWNER;         F8 = nullToBlank(F8);//使用者
                       var OBJECT_OWNERNAME = data[i].OBJECT_OWNERNAME;         OBJECT_OWNERNAME = nullToBlank(OBJECT_OWNERNAME);//使用者名称
                       
                       var F9  = data[i].DEPT_MANAGER;         F9 = nullToBlank(F9);//管理者
                       var DEPT_MANAGERNAME = data[i].DEPT_MANAGERNAME;         DEPT_MANAGERNAME = nullToBlank(DEPT_MANAGERNAME);//管理者名称
                       
                       var F10 = data[i].PRODUCT_VENDOR;       F10 = nullToBlank(F10);//生产厂家
                       var F11 = data[i].CODE_G;               F11 = nullToBlank(F11);//管理部门
                       var CODE_NAME = data[i].CODE_NAME;      CODE_NAME = nullToBlank(CODE_NAME);//管理部门名称
                       
                       var F12 = data[i].SCAN_FLAG;            F12 = nullToBlank(F12);//扫描
                       var F13 = data[i].CHECK_DATE;           F13 = nullToBlank(F13);//清查日期
                       var F14 = data[i].CHECK_FLAG;           F14 = nullToBlank(F14);//清查标记
                       var F15 = data[i].CHECKER_ID;           F15 = nullToBlank(F15);//清查人编码
               
                       
                       var F16 = data[i].FAO_ITEM_PRICE;       F16 = nullToBlank(F16);//单价
                       var F17 = data[i].FAO_ITEM_QTY;         F17 = nullToBlank(F17);//数量
                       var F18 = data[i].NOTES;                F18 = nullToBlank(F18);//备注
                       var F19 = data[i].LOSS_FLAG;            F19 = nullToBlank(F19);//盘亏标识
                       var F20 = data[i].NEW_FLAG;             F20 = nullToBlank(F20);//盘盈
                       var F21 = data[i].PA_CODE;              F21 = nullToBlank(F21);//资产编码
                       var F22 = data[i].LOC_ID;               F22 = nullToBlank(F22);//位置编码
                       var LOC_NAME = data[i].LOC_NAME;        LOC_NAME = nullToBlank(LOC_NAME);//位置名称
                       
                       var F23 = data[i].BAR_CODE_SIZE_ID;     F23 = nullToBlank(F23);//条码规格
                       var F24 = data[i].BAR_CODE_ATTR_ID;     F24 = nullToBlank(F24);//条码材质
                       var F25 = data[i].PROCESS_TYPE;         F25 = nullToBlank(F25);//处理类型
                       var F26 = data[i].PROCESS_REQ_NO;       F26 = nullToBlank(F26);//处理申请
                       var F27 = data[i].PROCESS_REQ_LINE;     F27 = nullToBlank(F27);//处理申请行
                   
                       var F28 = data[i].LOSS_REASON;          F28 = nullToBlank(F28);//盘亏原因
                       var F29 = data[i].DEPT_OBLIGATION;      F29 = nullToBlank(F29);//使用部门责任界定
                       var F30 = data[i].DEPT_PROCESS_OPTION;  F30 = nullToBlank(F30);//使用部门处理意见
                       var F31 = data[i].CHECK_IS_CHANGE;      F31 = nullToBlank(F31);//是否变动
                       var F32 = data[i].ACQUISITION_DATE;     F32 = nullToBlank(F32);//购买日期
                       var F33 = data[i].PICTURE_NUM;          F33 = nullToBlank(F33);//图片数量
                       var F34 = data[i].OBJID;                F34 = nullToBlank(F34);//OBJID
                       var F35 = data[i].OBJVERSION;           F35 = nullToBlank(F35);//OBJVERSION
                       var F36 = data[i].OBJSTATE;             F36 = nullToBlank(F36);//OBJSTATE
                       var F37 = data[i].OBJEVENTS;            F37 = nullToBlank(F37);//OBJEVENTS
                       var F38 = data[i].STATE;                F38 = nullToBlank(F38);//STATE
                       
                       str +='<div id="'+F0+'" class="ub ub-ver istyle" style="margin-top:.8em">'
                               +'<div class="ub ub-f1 ub-ac ilstyle">'
                                   +'<div class="ub">任务编号：</div>'
                                   +'<div id="it-rwbh-"'+F0+' class="ub-f3" style="color:#000000;">'+F0+'</div>'
                               +'</div>'
                               +'<div class="ub ub-ver ilstyle01" >'
                                   +'<div class="ub ub-ac ub-f1 ilstyle02">'
                                       +'<div class="ub ilw">'
                                           +'<div class="ub">实物资产名称：</div>'
                                           +'<div id="it-swmc-"'+i+' class="ub-f1" style="color:#000000;">'+F3+'</div>'
                                       +'</div>'
                                       +'<div class="ub ilw01">'
                                           +'<div class="ub">资产编码：</div>'
                                           +'<div id="it-zcbh-"'+F21+' class="ub-f1" style="color:#000000;word-break : break-all;">'+F21+'</div>'
                                       +'</div>'
                                   +'</div>'
                                   +'<div class="ub ub-ac ub-f1 ilstyle02">'
                                       +'<div class="ub ilw">'
                                           +'<div class="ub">使用部门：</div>'
                                           +'<div id="it-sybm-"'+i+' class="ub-f1" style="color:#000000;">'+USE_DEPTNAME+'</div>'
                                       +'</div>'
                                       +'<div class="ub ilw01">'
                                           +'<div class="ub">使用者：</div>'
                                           +'<div id="it-syz-"'+i+' class="ub-f1" style="color:#000000;word-break : break-all;">'+OBJECT_OWNERNAME+'</div>'
                                       +'</div>'
                                   +'</div>'
                                   +'<div class="ub ub-ac ub-f1 ilstyle02">'
                                       +'<div class="ub ilw">'
                                           +'<div class="ub">管理部门：</div>'
                                           +'<div id="it-llbm-"'+i+' class="ub-f1" style="color:#000000;">'+CODE_NAME+'</div>'
                                       +'</div>'
                                       +'<div class="ub ilw01">'
                                           +'<div class="ub">管理者：</div>'
                                           +'<div id="it-glz-"'+i+' class="ub-f1" style="color:#000000;word-break : break-all;">'+DEPT_MANAGERNAME+'</div>'
                                       +'</div>'
                                   +'</div>'
                                   +'<div class="ub ub-ac ub-f1 ilstyle02">'
                                       +'<div class="ub ilw">'
                                           +'<div class="ub">清查日期：</div>'
                                           +'<div id="it-qcrq-"'+i+' class="ub-f1" style="color:#000000;">'+F13+'</div>'
                                       +'</div>'
                                       +'<div class="ub ilw01">'
                                           +'<div class="ub">清查标记：</div>'
                                           +'<div id="it-qcbj-"'+i+' class="ub-f1" style="color:#000000;">'+F14+'</div>'
                                       +'</div>'
                                   +'</div>'
                                   +'<div class="ub ub-ac ub-f1 ilstyle02">'
                                       +'<div class="ub ilw">'
                                           +'<div class="ub">位置编码：</div>'
                                           +'<div id="it-wzbm-"'+i+' class="ub-f1" style="color:#000000;">'+LOC_NAME+'</div>'
                                       +'</div>'
                                       +'<div class="ub ilw01">'
                                           +'<div class="ub">盘亏标识：</div>'
                                           +'<div id="it-pkbs-"'+i+' class="ub-f1" style="color:#000000;">'+F19+'</div>'
                                       +'</div>'
                                   +'</div>'
                               +'</div>'
                           +'</div>';
               
                   }
           if (pageNo == 1) {
                $("#listContent").html(str);
                 //$("#data_1").addClass("uhide");
           } else {
                $("#listContent").append(str);
           }  
           appcan.window.closeToast();                              
      }else{
          appcan.window.alert({
               title : '提示',
               content : "请求失败，请重试",
               buttons : ['确定'],
               callback : function(err, data, dataType, optId) {
            }
           });
           appcan.window.closeToast(); 
      } 
}





//26  将接口数据存储至websql
例子
//实物资产清查任务   
var aa,bb; 
function getdata2(bs1,bs2,bs3,bs4,bs5,bs6,bs7,bs8,bs10){//此接口数据存至websql表t1中
    pageNo = parseInt(appcan.locStorage.getVal("MA0017_0002_pageNo"));
    console.log("清查任务="+pageNo);
    
	appcan.window.openToast("正在下载实物资产清查任务", '', 5, 1);
	aa=0;bb=0;cg=0;
	       
	
			
    var _url = url + '/fh?u1=' + encodeURIComponent(userId) 
             + '&t=19&bs=' + encodeURIComponent('M0019_0000') 
             + '&pm1=1&pm2=500&pm3='+ encodeURIComponent(pageNo);
             
	console.log(_url);
	appcan.request.ajax({
		url : _url,
		type : 'get',
		dataType : 'json',
		data : {},
		success : function(data, status) {
			if (data.status == 0) {
				var data = data.data;
				var len = data.length;
				records = len;
				if(len>0&&data[0].ERROR!=undefined&&data[0].ERROR!=""&&data[0].ERROR!=null){
					 appcan.window.closeToast(); 
					 appcan.window.alert({
						title : '提示',
						content : data[0].ERROR,
						buttons : ['确定'],
						callback : function(err, data, dataType, optId) {
						}
					  });   
					  return;
				  }
				  aa=len;
				  db.transaction(function(tx){
					  for(var i=0;i<len;i++){
							var F0  = nullToBlank(data[i].MISSION_NO);//任务编码         
							var F1  = nullToBlank(data[i].COMPANY);//公司编号
							var F2  = nullToBlank(data[i].DESCRIPTION);//描述
							var F3  = nullToBlank(data[i].CREATE_DATE);//创建日期
							var F4  = nullToBlank(data[i].CREATE_MAN);//创建人
							var F5  = nullToBlank(data[i].CREATE_USER);//创建人名称
							var F6  = nullToBlank(data[i].REMARK);//备注
							var F7  = nullToBlank(data[i].LINE_NO);//行号
							var F8  = nullToBlank(data[i].IS_DOWNLOAD);//已下载
							var F9  = nullToBlank(data[i].OBJID);//OBJID
							var F10  = nullToBlank(data[i].OBJVERSION);//OBJVERSION
							var F11 = nullToBlank(data[i].OBJSTATE);//OBJSTATE
							var F12 = nullToBlank(data[i].OBJEVENTS);//OBJEVENTS
							var F13 = nullToBlank(data[i].STATE);//STATE
							
																   
							tx.executeSql("insert into t1 (MISSION_NO,COMPANY,DESCRIPTION,CREATE_DATE,CREATE_MAN,CREATE_USER,REMARK,LINE_NO,IS_DOWNLOAD,OBJID,OBJVERSION,OBJSTATE,OBJEVENTS,STATE) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13],function(tx,result){
							  
							},function(){ }); 
							
						
							
					  }
					 
					  appcan.window.closeToast();
					  
					  if(records<500){
					      
					      pageNo = 1;
					      appcan.locStorage.setVal("MA0017_0002_pageNo",pageNo);
					      
                          var nowDate = getNowFormatDate();
                          tx.executeSql("update t9 set DOWNLOADEDTIME=? where ID='1' ",[nowDate],function(tx,result){
                              
                          },function(){ });
                          
                      
                          
                          if(bs3){
                              getdata3(bs1,bs2,bs3,bs4,bs5,bs6,bs7,bs8,bs10);
                          }
                          if(!bs3){
                              refreshCheckMissionList();//刷新清查任务列表数据
                              appcan.window.alert({title : '提示',content : "下载完成！",buttons : ['确定'],callback : function(err, data, dataType, optId) {}});
                          }
                      }else if(records==500){
                          pageNo++;
                          appcan.locStorage.setVal("MA0017_0002_pageNo",pageNo);
                          getdata2(bs1,bs2,bs3,bs4,bs5,bs6,bs7,bs8,bs10);
                      }
					  
					
                    
				  });  
			} else {
			    pageNo = 1;
                appcan.locStorage.setVal("MA0017_0002_pageNo",pageNo);
				appcan.window.closeToast(); 
				appcan.window.alert({
					title : '提示',
					content : "请求下载实物资产清查任务失败，请重试！",
					buttons : ['确定'],
					callback : function(err, data, dataType, optId) {
					}
				});
			}
		},
		error : function(e) {
		    pageNo = 1;
            appcan.locStorage.setVal("MA0017_0002_pageNo",pageNo);
			appcan.window.closeToast(); 
			appcan.window.alert({
				title : '提示',
				content : '网络繁忙,下载实物资产清查任务失败,请重试！',
				buttons : ['确定'],
				callback : function(err, data, dataType, optId) {
				}
			});
		}
	});
	
}





//27   使用Oracle语句遍历数据
例子
//获取本地实物资产清查任务列表数据
function initLocalData(){//遍历本地数据库表t9
    //    alert("101010");
      //  console.log("initLocalData=OK");
        var sql = "select t9.*,t11.* from t9 LEFT JOIN "
                + "(select '1' as id,count(1) as TS from t1 union all "
                + " select '2' as id,count(1) as TS from t2 union all "
                + " select '3' as id,count(1) as TS from t4 union all "
                + " select '4' as id,count(1) as TS from t5 union all "
                + " select '5' as id,count(1) as TS from t3 union all "
                + " select '6' as id,count(1) as TS from t6 union all "
                + " select '7' as id,count(1) as TS from t7 union all "
                + " select '8' as id,count(1) as TS from t10 ) t11 "
                + " on t9.ID = t11.id";
        appcan.window.openToast("数据加载中", '', 5, 1);
        db.transaction(function(tx){
        //    tx.executeSql("select * from t9",[],function(tx,result){
            tx.executeSql(sql,[],function(tx,result){//tx.executeSql也可以带几个参数
                  var dataall = [];
                  for(var i =0;i<result.rows.length;i++){
                      dataall.push(result.rows.item(i));
                  } 
                  
                  if(dataall.length>0){
                    //  alert("1111");
                      var data = {status:"0",data:dataall}
                      getCheckMissionData(null,data);
                  }else{
                    //  alert("2222");
                      getdata3();
                  }
                   
            },function(tx, error){
                appcan.window.closeToast();
               // alert(error.message);
                appcan.window.alert({
                    title : '提示',
                    content : error.message,
                    buttons : ['确定'],
                    callback : function(err, data, dataType, optId) {
                    }
                 });
            })
        })  
    }





//28   适应各种屏幕大小

//1、appcan写法
//<meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">


//2、vue写法
//<meta name="viewport" content="width=device-width, initial-scale=1.0">


//3、其他通用
//<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
//补充:在安卓中还支持  target-densitydpi  这个私有属性，它表示目标设备的密度等级，作用是决定css中的1px代表多少物理像素,特别说明的是，当 target-densitydpi=device-dpi 时， css中的1px会等于物理像素中的1px。因为只有安卓适用，所以安卓准备舍弃target-densitydpi了，要慎用






//29  Oracle语句的另一写法
db.transaction(function(tx){
    var sql="select MISSION_NO ,LINE_NO,REQ_NO ,PA_DESC ,"
        +"TYPE_DESIGNATION,EXTERNAL_ID,LICENSE_PLATE,USE_DEPT,USE_DEPTNAME,"
        +"OBJECT_OWNER,OBJECT_OWNERNAME,DEPT_MANAGER,DEPT_MANAGERNAME,"
        +"PRODUCT_VENDOR ,CODE_G ,CODE_NAME,SCAN_FLAG ,CHECK_DATE ,CHECK_FLAG,"
        +"CHECKER_ID,FAO_ITEM_PRICE,FAO_ITEM_QTY,NOTES,LOSS_FLAG,NEW_FLAG ,"
        +"PA_CODE ,LOC_ID ,LOC_NAME,BAR_CODE_SIZE_ID ,BAR_CODE_ATTR_ID,"
        +"PROCESS_TYPE,PROCESS_REQ_NO,PROCESS_REQ_LINE,LOSS_REASON,DEPT_OBLIGATION,"
        +"DEPT_PROCESS_OPTION ,CHECK_IS_CHANGE ,ACQUISITION_DATE ,PICTURE_NUM ,"
        +"OBJID ,OBJVERSION,OBJSTATE,OBJEVENTS ,STATE,ESTIMATEDLIFE,MCHCODE,"
        +"MCHNAME,OBJECTCLASSID,OBJECTCLASSNAME,COMPANY "
        +"from t2 where MISSION_NO=? and LINE_NO=? and COMPANY=?";
                    tx.executeSql(sql,[F0,F1,F49],function(tx,result){//F0 F1 F9对应MISSION_NO  LINE_NO  COMPANY
                        var cnum = result.rows.length;
                        if(cnum==0){
                             tx.executeSql("insert into t2 (MISSION_NO ,LINE_NO,REQ_NO ,PA_DESC ,"
                                +"TYPE_DESIGNATION,EXTERNAL_ID,LICENSE_PLATE,USE_DEPT,USE_DEPTNAME,"
                                +"OBJECT_OWNER,OBJECT_OWNERNAME,DEPT_MANAGER,DEPT_MANAGERNAME,"
                                +"PRODUCT_VENDOR ,CODE_G ,CODE_NAME,SCAN_FLAG ,CHECK_DATE ,CHECK_FLAG,"
                                +"CHECKER_ID,FAO_ITEM_PRICE,FAO_ITEM_QTY,NOTES,LOSS_FLAG,NEW_FLAG ,"
                                +"PA_CODE ,LOC_ID ,LOC_NAME,BAR_CODE_SIZE_ID ,BAR_CODE_ATTR_ID,"
                                +"PROCESS_TYPE,PROCESS_REQ_NO,PROCESS_REQ_LINE,LOSS_REASON,DEPT_OBLIGATION,"
                                +"DEPT_PROCESS_OPTION ,CHECK_IS_CHANGE ,ACQUISITION_DATE ,PICTURE_NUM ,"
                                +"OBJID ,OBJVERSION,OBJSTATE,OBJEVENTS ,STATE,ESTIMATEDLIFE,MCHCODE,"
                                +"MCHNAME,OBJECTCLASSID,OBJECTCLASSNAME,COMPANY) "
                                +"values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,F16,F17,F18,F19,F20,F21,F22,F23,F24,F25,F26,F27,F28,F29,F30,F31,F32,F33,F34,F35,F36,F37,F38,F39,F40,F41,F42,F43,F44,F45,F46,F47,F48,F49],function(tx,result){
                                    
                                },function(tx,error){
                                    
                                });  
                       
                         }else{
                             tx.executeSql("update t2 set REQ_NO=? ,PA_DESC=? ,TYPE_DESIGNATION=?,EXTERNAL_ID=?,"
                                +"LICENSE_PLATE=?,USE_DEPT=?,USE_DEPTNAME=?,OBJECT_OWNER=?,OBJECT_OWNERNAME=?,"
                                +"DEPT_MANAGER=?,DEPT_MANAGERNAME=?,PRODUCT_VENDOR=? ,CODE_G=? ,CODE_NAME=?,"
                                +"SCAN_FLAG=? ,CHECK_DATE=? ,CHECK_FLAG=?,CHECKER_ID=?,FAO_ITEM_PRICE=?,"
                                +"FAO_ITEM_QTY=?,NOTES=?,LOSS_FLAG=?,NEW_FLAG=? ,PA_CODE=? ,LOC_ID=? ,"
                                +"LOC_NAME=?,BAR_CODE_SIZE_ID=? ,BAR_CODE_ATTR_ID=?,PROCESS_TYPE=?,"
                                +"PROCESS_REQ_NO=?,PROCESS_REQ_LINE=?,LOSS_REASON=?,DEPT_OBLIGATION=?,"
                                +"DEPT_PROCESS_OPTION=? ,CHECK_IS_CHANGE=? ,ACQUISITION_DATE=? ,PICTURE_NUM =?,"
                                +"OBJID=? ,OBJVERSION=?,OBJSTATE=?,OBJEVENTS=? ,STATE=?,ESTIMATEDLIFE=?,"
                                +"MCHCODE=?,MCHNAME=?,OBJECTCLASSID=?,OBJECTCLASSNAME=? where MISSION_NO=? and LINE_NO=? and COMPANY=?",[F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,F16,F17,F18,F19,F20,F21,F22,F23,F24,F25,F26,F27,F28,F29,F30,F31,F32,F33,F34,F35,F36,F37,F38,F39,F40,F41,F42,F43,F44,F45,F46,F47,F48],function(tx,result){
                                    
                                },function(tx,error){
                                    console.log(error.massage);
                                });  
                       
                         }
                     })
});






//30跨页面调用方法
//例子：
appcan.window.evaluateScript('MA0044_0106','yinCang()');//MA0065_0106为页面,在其他页面登入






//31、点进详情传入数据到下拉选框
$('#select_opt1 option').each(function(index,value,array){
    if($(this).html() == BUQIANQYMC){//BUQIANQYMC是详情内容，若下拉框内容有详情查询里的内容则下拉框选中为详情内容
       $(this).attr("selected","selected");
    }
})






//32、可报选岗位
function changeCheck(i,b){
    console.log(arrData1[i]);
    var obj = document.getElementsByName("item");  
    var bs = arrCheck.length;
    console.log("arrCheck.length-----------"+bs);
    if(obj[i].checked){
        if(bs==b){          //b为可填报岗位
            appcan.window.alert({
                title : '提示',
                content : '选择岗位超过可填报岗位！',
                buttons : ['确定']
            });
            $("#duoxuan_"+i+"").removeAttr("checked");
            return;
        }
        arrCheck.push(arrData1[i]); 
        console.log(arrCheck);                 
    }else{
        var sc = arrData1[i].BS;
        console.log(sc);
        
        arrCheck.splice(sc,1);
        console.log(arrCheck);
    }
    var yixuan = arrCheck.length;
    var leng = arrData1.length;
    for(var m=0;m<leng;m++){
        for(var j=0;j<yixuan;j++){
            if(arrCheck[j].JIHUABH==arrData1[m].JIHUABH){
                arrData1[m].BS=j;
            }
        }
    }
    
    $("#yxzgw").html(yixuan);
                                     
}




//动态添加实例
var kk1;
            function actionList(type) {
                var pm1 = "20";
                var pm2 = pageNo;
                appcan.window.openToast("数据加载中", '', 5, 1);
                var _url = url + '/ra?u1=' + encodeURIComponent(userId) 
                         +'&t=31&bs=' + encodeURIComponent('M0031_0002') 
                         +'&pm1=' + encodeURIComponent(pm1)
                         +'&pm2=' + encodeURIComponent(pm2);
                console.log(_url);
                appcan.request.ajax({
                    url : _url,
                    type : 'get',
                    dataType : 'json',
                    data : {},
                    success : function(data, status) {
                        console.log(data);
                        uexWindow.resetBounceView(type);
                        if (data.status == 0) {
                            var data = data.data;
                            var len = data.length;
                            var str = "";
                            if(len == 0){  
                                appcan.window.closeToast();
                                return;
                            }                            
                            records =len ;
                            if(len>0&&data[0].ERROR!=undefined&&data[0].ERROR!=""&&data[0].ERROR!=null){
                                 appcan.window.closeToast();
                                 appcan.window.alert({
                                    title : '提示',
                                    content : data[0].ERROR,
                                    buttons : ['确定'],
                                    callback : function(err, data, dataType, optId) {
                                    }
                                  });  
                                  return; 
                            }
                            if(len>0&&data[0].error!=undefined&&data[0].error!=""&&data[0].error!=null){
                                 appcan.window.closeToast();
                                 appcan.window.alert({
                                    title : '提示',
                                    content : data[0].error,
                                    buttons : ['确定'],
                                    callback : function(err, data, dataType, optId) {
                                    }
                                  });  
                                  return; 
                            }
                            var XUHAO = "";
                            for (var i = 0; i < len; i++) {
                                 var YINGPINDW1 = data[i].YINGPINDW1;YINGPINDW1=nullToBlank(YINGPINDW1);//应聘单位
                                 var BIAOTI = data[i].BIAOTI;BIAOTI=nullToBlank(BIAOTI);//标题
                                 var SJ =data[i].SJ;SJ=nullToBlank(SJ);//时间
                                  var KK =data[i].KK;KK=nullToBlank(KK);//KK
                                
                                kk1=KK.split(",");
                                console.log(kk1);
                          
                                
                             var arrStr="";//重要  
                         for(var j=0;j<kk1.length;j++){
                            var kk2=kk1[j].split("(")
                           arrStr+='<div class="ub ub-ac ub-f1 word bor-b1">'+
'                              <div class="ub ub-f1 ub-ac">'+kk2[0]+'</div>'+
'                              <div class="zhiyuan'+j+' ub-ac">第'+(j+1)+'志愿</div>'+
'                          </div>'; 
                        }
                             
                        
                       str+='<div class="ub ub-ver">'+
'                 <div class="mother1" style="margin-top:.5em;">'+
'                     <div class="ub ub-f1 ub-ac umh4 bor-b1 uhide">'+
'                         <div class="ub ub-ac min_w1 text-bc">序号：</div>'+
'                         <div class="ub ub-ac ub-f1 word">\'+(i+1)+\'</div>'+
'                     </div>'+
'                    <div class="ub ub-f1 ub-ac umh4 bor-b2">'+
'                         <div class="ub ub-ac min_w1 text-bc">'+
'                             <img style="width: 1.5em" src="../slices/mingc1.png" />'+
'                         </div>'+
'                         <div class="ub ub-ac ub-f1 word txt1">'+BIAOTI+'</div>'+
'                     </div>'+
'                     <div class="ub ub-f1  umh4 bor-b2">'+
'                         <div class="min_w1  text-bc" style="margin-top:.5em">'+
'                              <img style="width: 1.2em" src="../slices/mingc2.png" />'+
'                         </div>'+
'                         <div class="ub ub-f1 ub-ver txt2" id="arrS">'+arrStr+'</div>'+
'                     </div>'+
'                     <div class="ub ub-f1 ub-ac umh4 bor-b2" style="border-bottom: none;"> '+
'                         <div class="ub ub-ac min_w1 text-bc">'+
'                             <img style="width: 1.5em" src="../slices/mingc3.png" />'+
'                         </div>'+
'                         <div class="ub ub-ac ub-f1 word txt2">'+SJ+'</div>'+
'                     </div>'+
'                 </div> '+
'          </div>';
                        
                       
                          
                          
                       
                       
                       
                       
                        
                        
                 } 
                                
                     
                     
                                
                                
                                
                                                               
                            if (pageNo == 1) {
                                $("#listview").html(str);
                            } else {
                                $("#listview").append(str);
                            }
                           appcan.window.closeToast();
                        } else {
                            appcan.window.closeToast();
                            appcan.window.alert({
                                title : '提示',
                                content : "请求失败，请重试",
                                buttons : ['确定'],
                                callback : function(err, data, dataType, optId) {
                                }
                            });
                        }
                    },
                    error : function(e) {
                        appcan.window.closeToast();
                        uexWindow.resetBounceView(type);
                        appcan.window.alert({
                            title : '提示',
                            content : '网络繁忙,请重试！',
                            buttons : ['确定'],
                            callback : function(err, data, dataType, optId) {
                            }
                        });
                    }
                });
            }