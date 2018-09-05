window.onload = function () {
    var banner = document.getElementById("banner");
    var body = document.body;
    var imgArr = banner.children;
    for(var i=0;i<imgArr.length;i++){
        imgArr[i].index = i;
        imgArr[i].onclick = function () {
            body.style.backgroundImage = "url("+this.src+")";
        }
    }
	bannerFade();

    //login
    $("#loginMask").on("click",function(){
        $(this).slideUp(500);
    })
	
	//注册
	$("#loginUser").click(function(){
		$("#loginMask").show(500);
		$("#loginBox").show();
		$("#regesterBox").hide();
		return false;		
	})
	$(".login").click(function(){
		$("#loginMask").show(500);
		$("#regesterBox").show();
		$("#loginBox").hide();
		return false;		
	})
	$(".regester").click(function(){
		$("#loginMask").show(500);
		$("#regesterBox").show();
		$("#loginBox").hide();
		return false;		
	})	
	
	//验证码
	lgcreateCode();
	yzcreateCode();
    // menu添加fixed
    var headerHeight = document.getElementById("header").offsetHeight;
    window.onscroll = function () {
        var t = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        if(t>headerHeight){
            $(".menu").addClass("fix-menu");
        }else{
            $(".menu").removeClass("fix-menu");
        }
    }

    // 阻止冒泡
    $(".top,footer,.loginbox,#menuInner li,.content-inner").click(function(){
		return false;
    })

	$(".nav-inner").children().hover(function(){
		$(this).children("ul").stop().slideDown(500);
	},function(){
		$(this).children("ul").slideUp(300);
	})

    var timer = setInterval(fn,1);

    function fn(){
        var newDate = new Date();
        var oldDate = new Date("2018/05/28 22:22:22");
        var timeSum = newDate.getTime() - oldDate.getTime();
        var day = parseInt(timeSum / 1000 / 60 / 60 / 24);
        var hour = parseInt(timeSum / 1000 / 60 / 60 % 24);
        var minu = parseInt(timeSum / 1000 / 60 % 60);
        var sec = parseInt(timeSum / 1000 % 60);
        var millsec = parseInt(timeSum % 1000);
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        minu = minu < 10 ? "0" + minu : minu;
        sec = sec < 10 ? "0" + sec : sec;
        if (millsec < 10) {
            millsec = "00" + millsec;
        } else if (millsec < 100) {
            millsec = "0" + millsec;
        }
        $("#startDate").text("Richord·Z·Liu 的个人网站已经运行了" + day + "天" + hour + "小时" + minu + "分" + sec + "秒" + millsec + "毫秒");
    }
}

/***banner淡入淡出****/
	function bannerFade(){
		var bool = true;
		$(document).bind("click",function(){
			if(bool){
				$("#banner").fadeIn(500);
				bool = false;		
			}else{
				$("#banner").slideUp(500);
				bool = true;		
			}
		})
	}
    	  //设置一个全局的变量，便于保存验证码
    var code;
    function lgcreateCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('lgcode');
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index]; 
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.value = code;
    }

    //下面就是判断是否== 的代码，无需解释
    function lgvalidate(){
        var oValue = document.getElementById('lginput').value.toUpperCase();
        if(oValue ==0){
            alert('请输入验证码');
        }else if(oValue != code){
            alert('验证码不正确，请重新输入');
            oValue = ' ';
            lgcreateCode();
        }else{
            window.open('http://www.baidu.com','_self');
        }
    }
	    function yzcreateCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('yzcode');
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index]; 
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.value = code;
    }

    //下面就是判断是否== 的代码，无需解释
    function yzvalidate(){
        var oValue = document.getElementById('yzinput').value.toUpperCase();
        if(oValue ==0){
            alert('请输入验证码');
        }else if(oValue != code){
            alert('验证码不正确，请重新输入');
            oValue = ' ';
            yzcreateCode();
        }else{
            window.open('http://www.baidu.com','_self');
        }
    }