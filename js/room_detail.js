/**
 * Created by HNJD-001 on 2016/11/7.
 */

/*功能点：设施服务的图标*/
$("#room_loot .text-group").each(function(i,elem){

  var item=25;
  $("#room_loot .text-group:eq("+i+") span.label>i").css("background-position","-6px "+"-"+(403+item*i)+"px");
})
/*功能点2：获取本地存储的rid*/
var rid=sessionStorage['rid'];
var html='';
$.ajax({
     url:'data/room_getbyId.php',
     data:{'rid':rid},
     success:function(room){
       var room=room[0];
       html=`
        <p class="booking_tab"><span></span>客房详情</p>
        <div class="room_pic">
          <img src="${room.rPic}" alt=""/>
        </div>
        <div class="room_info">
             <!--房型-->
             <h2>【${room.houseType}】</h2>
              <ul>
                <li><span>面积：</span>20平方米</li>
                <li><span>设备：</span>
                    <p class="icon">
                      <b class="wifi"></b>无线WiFi
                      <b class="park"></b>免费停车
                    </p>
                    <p>
                      <b class="eat"></b>餐饮就餐
                      <b class="TV"></b>有线电视
                    </p>


                </li>
                <li><span>窗户：</span>全部明窗，朝南</li>
                <li><span>床型：</span>${room.bedType=='1'?'1.8米':(room.bedType=='2'?'1.5米':'1.2米')}大床/${room.mating}张</li>
                <li><span>早餐：</span>${room.cancel==1?'赠送单人自助早餐':'不含早餐'}</li>
                <!--<li><span>房态：</span></li>-->
                <li><span>价格：</span>
                      ￥${room.proPrice}
                       ￥${room.RegPrice}
                </li>
                <li class="num"><span>数量：</span>
                    <button class="sub">-</button>
                    <input type="text" class="count" value="1"/>
                    <button class="add">+</button>
                </li>
                <li><span></span>
                  <button id="add_cart">加入订单</button>
                <button id="btn_submit">立即预订</button></li>
              </ul>
             <!-- 价格-->
             <!--规格-->
             <!--设备-->
        </div>
            `
       $("#guest_rooms").html(html);
         $("#guest_rooms>div.room_info li.num").on("click","button",function(){
           var num=parseInt($("#guest_rooms>div.room_info li.num>input.count").val());
             console.log(num);
             if($(this).html()=="-"){
                 if(num>1){
                     num--;
                 }
             }else if($(this).html()=="+"){
                 num+=1;
             }
             console.log(num);
             $("#guest_rooms>div.room_info li.num>input.count").attr("value",num);
         })
         $("#btn_submit").click(function(){
              console.log(sessionStorage['loginName']);
              if(sessionStorage['loginName']){
                localStorage['num']=parseInt($("#guest_rooms>div.room_info li.num>input.count").val());
                window.location.href="room_order.html";
              }else if(!sessionStorage['loginName']){
                $(".malog").show();
                //window.location.href="login.html";
              }

         });
     }
});

$("#guest_rooms").on("click","#add_cart",function(){
  var uname=sessionStorage['loginName'];
  if(!uname){
    alert("未进行登录，无法预订");
  }
  var pid=sessionStorage['rid'];
  var count=$("#guest_rooms input.count").val();
  $.ajax({
    url:'data/add_cart.php',
    data:{uname:uname,pid:pid,count:count,type:2},
    success:function(data){
      console.log(data);
      alert("加入订单成功"+data.count);
    }

  })
});