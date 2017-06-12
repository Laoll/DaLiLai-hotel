
function loginName(){
	if(sessionStorage['loginName']) {
		$("#header  .welcome a").html(sessionStorage['loginName']+" 欢迎回来");
		$("#nav .my_account .login a").html("注销");
		$(".my_account .cart").show();
	}else{
		$("#header  .welcome a").html("欢迎来到大利来");
		$("#nav .my_account .login a").html("登录");
		$(".my_account .cart").hide();
	}
}
function navText(text){
	console.log(text);
	//导航条
	$(".the_nav li").each(function(){
		var thisText=$(this).children("a").children("span").text();
		//console.log(thisText);
		if(text==thisText){
			$(".the_nav li").removeClass("hover");
			$(this).addClass("hover");
		}
	});

}
//时间转换函数
function dateFormat(arg){
	var t=new Date(arg);
	var year= t.getFullYear();
	var month= t.getMonth()+1;
	var day= t.getDate();
	var hours= t.getHours();
	hours<10&&(hours="0"+hours);
	var minute= t.getMinutes();
	//var s= t.getMinutes();
	//console.log(year+"-"+month+"-"+day+" "+hours+":"+minute);
	return year+"-"+month+"-"+day+" "+hours+":"+minute;
}
$("#c_footer").load("data/head/footer.php");

/*回到顶部*/
$("#top").hide();
 $("#c_header").on("click","#top>a",function(){
      $("body").animate({
	       scrollTop:
			   0
	   },1000);
   
   })
   this.timer=setInterval(function(){
       if($("body").scrollTop()>100){
	     $("#top").show(600);
	   }else {
	     $("#top").hide();
	   }
   },100);
//注销
$(document).ready(function(){
		$("#c_header").on("click",".login>a",function(){
			console.log("a");
			if(sessionStorage['loginName']) {
				sessionStorage.removeItem("loginName");
			}
			location.href='login.html';
		});
	}

);
