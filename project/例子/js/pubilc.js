/*left-mune*/
$(".nav ul.menu li").click(function(){
    $(this).addClass("active").siblings("li").removeClass("active");
})
$(".item,.item ol li").click(function(){
    $(this).addClass("active").siblings("li").removeClass("active");
})
$(".yearTab li").click(function(){
    $(this).addClass("active").siblings("li").removeClass("active");
})
$(document).ready(function(){
    var _width=$('.line-1').prev().width();
    var width=$('.line-1').parent().width();
    $('.line-1').css('width',width-_width-15);
    var _width2=$('.line-2').prev().width();
    var width2=$('.line-2').parent().width();
    $('.line-2').css('width',width2-_width2-15);
})

$(document).ready(function(){
    var counter=0;
    var _li_length=$('.timerShaftList li').length;
    var _li_width=$('.timerShaftList li').width();
    var active_li_i=$('.timerShaftList li.active').index();
    console.log(active_li_i);
    console.log(!active_li_i-2>0);
    if(active_li_i-2<0||active_li_i-2==0){
        $('.timerShaftList').css('margin-left','0');
    }
    if (active_li_i>2&&active_li_i<11){
        $('.timerShaftList').css('margin-left',(2-active_li_i)*_li_width);
    }
    if(active_li_i>11){
        $('.timerShaftList').css('margin-left','-1296px');
    }
    if((active_li_i-2)<0||(active_li_i==2)){
        $('.timerShaft a.right').click(function(){
            counter++;
            if(counter<(_li_length-4)){
                $('.timerShaftList').css('margin-left',-counter*_li_width);
            }else {
                counter=9;
                $('.timerShaftList').css('margin-left',-9*_li_width);
            }
        })
    }
    if((active_li_i-2)>0&&(active_li_i-2)<9) {
        counter=active_li_i-2;
        $('.timerShaft a.right').click(function(){
            counter++;
            if(counter<(_li_length-4)){
                $('.timerShaftList').css('margin-left',-counter*_li_width);
            }else {
                counter=9;
                $('.timerShaftList').css('margin-left',-9*_li_width);
            }
        })
    }
    if((active_li_i-2)>8){
        counter=9;
        $('.timerShaft a.right').click(function(){
            counter++;
            if(counter<(_li_length-4)){
                $('.timerShaftList').css('margin-left',-counter*_li_width);
            }else {
                counter=9;
                $('.timerShaftList').css('margin-left',-9*_li_width);
            }
        })
    }
    $('.timerShaft a.left').on('click',function(){
        counter--;
        var _margin_left=parseInt($('.timerShaftList').css('margin-left'));
        if(_margin_left<0){
            $('.timerShaftList').css('margin-left',_margin_left+_li_width);
        }else if(_margin_left>-144){
            counter=0;
            $('.timerShaftList').css('margin-left','0px');
        }
    })
});

//展开
$('.unfold').click(function(){
    $(this).children('i').toggleClass('rotate');
    $(this).prev('div').toggleClass('show');
    $(this).prev('div').children('i').toggle();
    if($(this).prev('div').hasClass('show')){
        $(this).children('span').html('收起')
    }else{
        $(this).children('span').html('展开')
    }
})
//相关阅读轮播
var correlationCarousel = new Swiper('.correlationCarousel .swiper-container', {
    slidesPerView: 3,
    paginationClickable: true,
    freeMode: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop:true
});
$('.correlationCarousel .arrow-left').on('click', function(e){
    e.preventDefault();
    correlationCarousel.swipeNext()
});
$('.correlationCarousel .arrow-right').on('click', function(e){
    e.preventDefault();
    correlationCarousel.swipePrev()
});