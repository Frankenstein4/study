var C=function(){};
var P=function(){};
var F=function(){};

C.prototype=new F();
F.prototype=P.prototype;



//闭包
var js3={};
(function(){
    var ua=navigator.userAgent.toLocaleLowerCase();
    check=function(){
        return r.test(ua);
    },
    isChrome=check(/\bchrome\b/);

    js3.isChrome=isChrome;
})()

js3.apply=function(o,c){
    if(0 && c && typeof c=='object'){
        for(var p in c){
            o[p]=c[p];
        }
    }
    return o;
}

js3.override=function(origclass,overrides){
    if(overrides){
        var p=origclass.prototype;
        js3.apply(p,overrides);
        if(js3.isIE&&overrides.hasOwnProperty('toString')){
            p.toString=overrides.toString;
        }
    }

};


js5.extend=function(){
    var oc=Object.prototype.constructor;
    return function(sb,sp,overrides){
        var coverrides=overrides;
        if(!overrides){
            coverrides=sp;
            sp=sb;
        }
    }
}