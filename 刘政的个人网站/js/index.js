// JavaScript Document
//tab选项卡
$(".menu-inner li").on("click",function () {
	$(this).addClass("cur").siblings().removeClass("cur");
	$(".content-inner").eq($(this).index()).slideDown(1000).siblings().hide(1000);
    // $(".content-inner").eq($(this).index()).addClass("show").siblings().removeClass("show");

	var timer = null;
})

//显示qq和微信
$(".bgicon1").hover(function () {
    $(".weixin").stop().show(500);
}, function () {
    $(".weixin").hide(500);
})
$(".bgicon3").hover(function () {
    $(".qq").stop().show(500);
}, function () {
    $(".qq").hide(500);
})

//轮播
function promo(){
	var index = 0;
	var timer = null;
	//下方文字切换
    $(".trigger-iteam").mouseover(
        function(){
            index = $(this).index();
            startMove($(".trigger-iteam"),index,$(".promo ul"));
        }
    );

    //鼠标移入暂停播放 移出继续播放
	$(".promo").hover(
		function () {
			clearInterval(timer);
        },
		function (){
            timer = setInterval(function(){
                index++;
                if(index > 4){
                    index = 0;
                }
                startMove($(".trigger-iteam"),index,$(".promo ul"));
            },2500)
		}
	);

    //运动函数
    function startMove(currentObj,index,moveObj){
		//下方文字的切换
        currentObj.eq(index).addClass("on").siblings().removeClass("on");
        var target = index*-820 + "px";
		//运动
        moveObj.stop().animate({left : target},250)
    }
    //加定时器自动自动轮播
    timer = setInterval(function(){
        index++;
        if(index > 4){
            index = 0;
        }
        startMove($(".trigger-iteam"),index,$(".promo ul"));
    },2500)
}
promo();

//分享到新浪微博
function shareToXl(title,url,picurl){
    var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
    window.open(sharesinastring,'newwindow','height=400,width=800,top=100,left=250');
}

//分享到qq空间
function shareToQq(title,url,picurl){

    var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title+'&url='+url+'&pics='+picurl;
    window.open(shareqqzonestring,'newwindow','height=400,width=800,top=100,left=250');
}
function subinfo(){
    shareToQq("刘政的个人网站","www.lzacj.com","http://www.lzacj.com/images/promo/05.jpg");
}
function subofo(){
    shareToXl("刘政的个人网站","www.lzacj.com","http://www.lzacj.com/images/promo/05.jpg");
}
