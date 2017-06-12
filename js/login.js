/***登陆界面***/
   $("#check_box").on("click","input",function(e){
        var $target=$(e.target);
		if($target.hasClass("method_normal")){
		    $target.parent().siblings("#normal").show();
            $target.parent().siblings("#phone_login").hide();
		}else if($target.hasClass("method_phone")){
		    $target.parent().siblings("#phone_login").show();
            $target.parent().siblings("#normal").hide();
		}
   });
	/***登陆界面***/
   $("#check_box").on("click","input",function(e){
        var $target=$(e.target);
		if($target.hasClass("method_normal")){
		    $target.parent().siblings("#normal").show();
            $target.parent().siblings("#phone_login").hide();
		}else if($target.hasClass("method_phone")){
		    $target.parent().siblings("#phone_login").show();
            $target.parent().siblings("#normal").hide();
		}
   });
function code(){
	$("div.codes .code").click(function(){
		$(this).attr("src",'data/code.php');
	});
	$("div.codes .blur").blur(function(){
		 var code=$(this).val();
		  $.ajax({
				  url:"data/checkcode.php",
				  data:{code:code},
				  success:function(data){
					     var data= JSON.parse(data);
					    var msg=data.msg;
						if( msg=="succ"){
							$("p#alert").html("验证成功");
							Test=true;
						}else if( msg="err"){
							$("p#alert").html("验证码输入有误，请重新验证");
							Test=false;
							$("div.codes .code").attr("src",'data/code.php');
						}
					}
			});
	})
}
code();



   $("#bt_login").click(function(){
	   var name=$("#normal [name='uname']").val();
	   //把用户名保存在local
	   var pwd=$("#normal [name='upwd']").val();
	   $.ajax({
	        url:'data/use_select.php',
			data:{uname:name,upwd:pwd},
			success:function(data){
				var data= JSON.parse(data);
				var msg=data.msg;
				console.log(msg);
			   if(msg==='succ'&&Test===true){
			          $("p#alert").hide();
					        sessionStorage.setItem("loginName",name);
                  window.location.href="index.html";
			   }else if(msg==="err"){
				   if(!name){
				     $("p#alert").html("用户名不能为空");
					 
				   }else if(!pwd){
						 $("p#alert").html("密码不能为空");
					 } else{
			        $("p#alert").html("用户名不存在或者用户密码不匹配");
				   }
			   }
			}
	   });
   });

