$(function () {
    /*初始化fullpage组件*/
    /*1.设置每一个屏幕的背景颜色*/
    /*2.设置屏幕内容的对齐方式  默认是垂直居中的  改成顶部对齐*/
    /*3.设置导航 设置指示器 点容器*/
    /*4.监听进入某一屏的时候 回调*/
    $('.container').fullpage({
        // 配置参数
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        scrollingSpeed:1000,
        afterLoad:function(link,index){
            $('.section').eq(index-1).addClass('loaded');
        },
        // 离开某一个页面的时候触发
        onLeave:function(index,nextIndex,direction){
            if(index==2 && nextIndex==3 || index==3 && nextIndex==4){
                $('.section').eq(index-1).addClass('leaved');
            }else if(index==5 && nextIndex==6){
                $('.section').eq(index-1).addClass('leaved');
                $('.section06 .box').addClass('show');
            }else if(index==6 && nextIndex==7){
                $('.section07 .start').addClass('show');
                $('.section07 .text').addClass('show');
                $('.section07 .start img').each(function(i,item){
                    /*$(item) == $(this);*/
                    /*img display:none*/
                    /*$(this).delay(i*0.5*1000).fadeIn();*/
                    /*img opacity*/
                    $(item).css('transition-delay',i*0.5+'s');
                })
            }
        },
        //插件加载完毕
        afterRender:function(){
            //切换到下一页
            //jquery插件初始时没有这个方法
            //jquery的封装  jquery本身没有的方法通过$.fn的方式追加方法  认为是插件方法
            //例如：$.fn.src = function(){ return this.attr('src') } this 你选择谁this（jquery对象）执行谁
            $('.more').on('click',function(){
                $.fn.fullpage.moveSectionDown();
            })

            /*当第四屏的购物车动画结束之后执行收货地址的动画  transitionend    animationend*/
            $('.section04 .cart').on('transitionend',function(){
                /* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
                $('.section04 .address').fadeIn(500).find('img:last').fadeIn(1000);
                $('.section04 .text').addClass('show');
            })

            // 第八屏功能
            $('.section08').on('mousemove',function(e) {
                $(this).find('.hand').css({
                    left:e.clientX-250,
                    top:e.clientY-150
                })
            }).find('.again').on('click',function(){
                     //重置动画
                    $('.loaded,.show,.leaved').removeClass('loaded').removeClass('show').removeClass('leaved');
                /* 加css属性  后果：加一个style属性*/
                /* 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                    $('.content [style]').removeAttr('style');
                    //返回第一页
                    $.fn.fullpage.moveTo(1);
                })
        }
    }); 
    
});