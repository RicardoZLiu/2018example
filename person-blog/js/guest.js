//点击小图片，显示表情
$(".bq").click(function(e){
    $(".face").slideDown();//慢慢向下展开
    e.stopPropagation();   //阻止冒泡事件
});

//在桌面任意地方点击，他是关闭
$(".content-inner").click(function(){
    $(".face").slideUp();//慢慢向上收
    // $("#pp").slideUp(500);
});

//回复
var num=0;
function oreplay(a){
    $("#pp").slideDown(500);
    $(".reply").css("display","none");
    $(".delate").css("display","none");
    // $(this).parent().parent();
    $(a).attr("id","brep"+num);
    num++;
    return num;
};

function breplay() {
    var btxt = $(".remessage").html();
    if (btxt == "") {
        $('.remessage').focus();//自动获取焦点
        return;
    }
    $("#brep"+(oreplay()-2)).parent().parent().append($("<div style='padding: 10px 20px;border-top: 1px dashed #000;font-size: 14px;'><img src='../images/face/tx.jpg' style='width: 50px;height: 50px;border-radius: 50%;'/><span>回复某某：</span><span onclick='deltated(this)' style='float: right;padding-left: 15px;cursor: pointer;'>删除</span><span style='float:right;cursor: pointer;' onclick='oreplay(this)'>回复</span>" + btxt + "</div>"));
    $(".remessage").html("");
    $("#pp").slideUp(500);
    $(".reply").css("display","block");
    $(".delate").css("display","block");
}
//删除
function deltateu(b) {
    $(b).parent().parent().slideUp(500);
};
function deltated(b) {
    $(b).parent().slideUp(500);
};

//点击小图标时，添加功能
$(".face ul li").click(function(){
    var simg=$(this).find("img").clone();
    $(".message").append(simg);
});
//点击发表按扭，发表内容
$("span.submit").click(function(){
    var txt=$(".message").html();
    if(txt==""){
        $('.message').focus();//自动获取焦点
        return;
    }
    var myDate = new Date();
    var nowtime = myDate.getFullYear()+"/"+(myDate.getMonth()+1)+"/"+myDate.getDate()+"/"+myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds();
    $(".msgCon").prepend("<li class='msgBox'><ul><li><img src='../images/face/tx.jpg' width='50' height='50'/></li><span>"+nowtime+"</span><li class='gtitle'>刘政</li><li class='reply' onclick='oreplay(this)'>回复</li><li class='delate' onclick='deltateu(this)'>删除</li></li></ul><div class='msgTxt'>"+txt+"</div></li>");
    $(".message").html("");
});
