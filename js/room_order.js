/**
 * Created by Administrator on 2016/11/12.
 */
$("#c_header").load("data/head/header.php",function(){
	navText("酒店预定");
	loginName();
});
    var rid=sessionStorage['rid'];
   $("#order_info input[name='rid']").attr("value",rid);
//客房的价格
var price=0;
var roomList=[];
console.log(rid);
var html="";
var productList=function(){
	roomList[0]['productId']=rid;
	roomList[0]['type']=2;
	roomList[0]['count']=$("#order_info input[name='num']").val();
	//精简roomList
	delete(roomList[0].houseType);  //只保留productId和count,type
	delete(roomList[0].proPrice);
	delete(roomList[0].rPic);
	delete(roomList[0].rid);
	delete(roomList[0].RegPrice);
	delete(roomList[0].bedType);
	delete(roomList[0].mating);
	delete(roomList[0].roomNum);
	delete(roomList[0].bookNum);
	delete(roomList[0].cancel);

}
$.ajax({
		url:"data/room_getbyId.php",
		data:{'rid':rid},
		success:function(room){
			roomList=room;
			var room=room[0];
			html=`
                <a href="#"><img src="${room.rPic}" alt=""/></a>
			   <div class="info">
				<h2>【${room.houseType}】</h2>
				 豪华双人房----预定
			  </div>
			  <ul class="hotel_detail">
			 <li><span>床型:</span>${room.mating==1?'单床':'双床'}</li>
			 <li><span>面积:</span>18平方米</li>
			 <li><span>宽带:</span>无线/宽带</li>
			 <li><span>早餐：</span>${room.cancel==1?'赠送单人自助早餐':'不含早餐'}</li>
			 <li><span>床型：</span>${room.bedType=='1'?'1.8米':(room.bedType=='2'?'1.5米':'1.2米')}大床/${room.mating}张</li>
			 <li><span>剩余量:</span>${room.roomNum-room.bookNum}间</li>
		   </ul>
               `
			$(".hotel_roominfobox").html(html);
			$("#order_info input[name='num']").attr("value",localStorage['num']);
			var num=$("#order_info input[name='num']").val();
			var total=num*room.proPrice;
			$(" #order_info  .total").html("￥"+total);
			price=room.proPrice;
			$("#order_info input[name='price']").attr("value",total);
			$("#order_info input[name='uname']").val(sessionStorage['loginName']);
			productList();
		}
	});


$("#order_info div.num").on("click","span",function(){
	var num=parseInt($("#order_info input[name='num']").val());
	if($(this).html()=="-"){
		if(num>1){
			num--;
		}else{
			$("div.num>div.msg").html("已经不能再少啦!");
		}
	}else if($(this).html()=="+"){
		num+=1;
		$("div.num>div.msg").html("");
	}
	$("#order_info input[name='num']").attr("value",num);
	var total=price*num;
	$(" #order_info  .total").html("￥"+total);
	$("#order_info input[name='price']").attr("value",total);
	//productList();
	console.log(roomList);
});

$("#btn_booking").click(function(){
	roomList=JSON.stringify(roomList);
	$("#order_info input[name='roomList']").val(roomList);
	var t=true;
	var info=$("#order_info").serialize();
	if(!$("#order_info input[name='orderName']").val()){
		$("#order_info input[name='orderName']").next().html("请留下入住人的姓名");
		t=false;
	}
	if(!$("#order_info input[name='phone']").val()){
		$("#order_info input[name='phone']").next().html("请留下电话号码以方便联系");
		t=false;
	}

	if(t){
		$.ajax({
			type:"POST",
			url:'data/add_order.php',
			data:info,
			success:function(data){
                 $(".malog").show();
				 if(data.msg=='succ'){
					 $(".malog .msgs").html("您已经成功提交订单，订单编号为："+data.orderNum);
					 var i=5;
					 var timer=setInterval(function(){
						 i--;
						 $(".malog .num").html(i);
						 if(i==0){
							 location.href="reservation.html";
							 clearInterval(timer);
						 }
					 },1000);
				 }else if(data.msg=='err'){
					$(".malog .msgs").html("Oh!订单提交失败，为您返回订单页面");
				}
			}
		})
	}
})