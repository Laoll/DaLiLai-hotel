/**
 * Created by HNJD-001 on 2016/11/18.
 */
$("#c_header").load("data/head/header.php",function(){
  $(".my_account>li:last-child").addClass("hover");
  loginName();
});
var uname=sessionStorage['loginName'];
$(".tabs").on("click","li a",function(){
    $(this).addClass("active").parents().siblings().children(".active").removeClass("active");
    var href=$(this).attr("href");
    href=href.slice(1);
    var $div=$("div.content>div."+href);
     $div.show().siblings().hide();
});

var totalp=function(){
  var totalPrice=0;
  $(".price").each(function(i,elem){
    var check=$(elem).siblings(".id").children("input[type='checkbox']").prop("checked");
    if(check){
      var price=$(elem).children().html();
      totalPrice+=parseFloat(price);
    }
  });
  $(".totalPrice").html("￥"+totalPrice);
}
$.ajax({
  url:'data/cart_detail.php',
  type:'GET',
  data:{'uname':uname},
  success:function(data){
    var html="";
    $.each(data.food,function(i,dish){
      if(dish.checked==1){
            html+=`
               <tr>
                  <td class="id">
                    <input type="checkbox" checked/>
                    <div>
                      <img src="${dish.fimg}" data-id="${dish.productId}" data-type="${dish.type}" alt=""/>
                    </div>
                  </td>
            `;
      }else{
          html+=`
              <tr>
                  <td class="id">
                    <input type="checkbox"/>
                    <div>
                      <img src="${dish.fimg}" data-id="${dish.productId}" data-type="${dish.type}" alt=""/>
                    </div>
                  </td>
          `;
      }
      html+=`

                  <td>${dish.fname}</td>
                  <td class="cost">￥<span>${dish.fprice}</span></td>
                  <td class="num">
                    <button class="sub">-</button>
                    <input type="text" class="count" value="${dish.count}"/>
                    <button class="add">+</button>
                  </td>
                  <td class="price">￥<span>${dish.count*dish.fprice}</span></td>
                  <td><button class="btn_delete">删除</button></td>
                </tr>

                   `;
    });
    $(".details>div.dishList tbody.dish").html(html);
    html='';
    $.each(data.room,function(i,room){
      if(room.checked==1){
        html+=`
             <tr>
                  <td class="id">
                    <input type="checkbox" checked/>
                    <div>
                      <img src="${room.rPic}" data-id='${room.productId}' data-type="${room.type} alt=""/>
                    </div>
                  </td>
        `;
      }else{
        html+=`
             <tr>
                  <td class="id">
                    <input type="checkbox" />
                    <div>
                      <img src="${room.rPic}" data-id='${room.productId}' data-type="${room.type} alt=""/>
                    </div>
                  </td>
        `;
      }
      html+=`

                  <td>${room.houseType}</td>
                  <td class="cost">￥<span>${room.proPrice}</span></td>
                  <td class="num">
                     <button class="sub">-</button>
                    <input type="text" class="count" value="${room.count}"/>
                    <button class="add">+</button>
                  </td>
                  <td class="price">￥<span>${room.count*room.proPrice}</span></td>
                  <td><button class="btn_delete">删除</button></td>
                </tr>

                   `;
    })
    $(".details>div.dishList tbody.room").html(html);
    totalp();
    if(!$(".details tbody.dish").html()){
      $(".details tbody.dish").siblings(".dishtitle").hide();

    }
    if(!$(".details tbody.room").html()){
      $(".details tbody.room").siblings(".roomtitle").hide();

    }
    if(!($(".details tbody.dish").html()||$(".details tbody.room").html())){
      $(".details table").hide();
      $(".details .total").hide()
      $(".msg").show();
    }
    $("#c_header ul.the_nav li.hover").removeClass("hover");
  }
});
$(".details").on("click","td.num button",function(){
  console.log($(this).html());
  var count=$(this).siblings(".count").val();
  var cost=$(this).parent().siblings(".cost").children().html();
  console.log(cost);
  console.log(count);
  if($(this).html()=="+"){
    count++;
  }else if($(this).html()=="-"){
    if(count>1){
      count--;
    }
  }
  $(this).siblings(".count").val(count);
  $(this).parent().next().children().html(cost*count);
  totalp();
  var productId=$(this).parent().siblings(".id").children("div").children().data('id');
  var type=$(this).parent().siblings(".id").children("div").children().data('type');
  $.ajax({
    url:"data/update_cart_detail.php",
    data:{productId:productId,type:type,count:count,uname:uname},
    success:function(data){
      console.log(data);
    }

  })
})
$(".details").on("click",".btn_delete",function(){
  var productId=$(this).parent().siblings(".id").children("div").children().data('id');
  var type=$(this).parent().siblings(".id").children("div").children().data('type');
  console.log(type);
  $.ajax({
    url:'data/delete_cart_detail.php',
    data:{productId:productId,type:type,uname:uname},
    success:function(data){
      location.href="myOrder.html";
    }
  })
});
$(".details").on("click","input[type='checkbox']",function(){
  var checked=0;
  if($(this).prop("checked")){
    checked=1;
  }
  var productId=$(this).siblings("div").children().data('id');
  var type=$(this).siblings("div").children().data('type');
  totalp();
  $.ajax({
    url:"data/update_cart_detail_checked.php",
    data:{productId:productId,type:type,checked:checked,uname:uname},
    success:function(data){
      if(data.msg=='succ'){
        //alert("修改成功");
      }
    }
  });
})
$(".btn_sumbit").click(function() {
    var checked=$("td.id").children("input").prop("checked");
     if(checked){
       location.href="orderAdd.html";
     }

});



var order=function(){
   var uname=sessionStorage['loginName'];
  $.ajax({
    url:"data/select_orderlist.php",
    data:{uname:uname},
    success:function(data){
      var html='';
      if(!data[0]){
          html+=`
               <div class="msg">没有任何的预订记录！！！</div>
               `
      }else{
        $.each(data,function(i,orderlist){
          html+=`
            <tr class="title">
              <td colspan="7" >订单编号：${orderlist.orderNum}</td>

            </tr>
            <tr>
                    <td class="productImg">
                 `;
          //console.log(orderlist.product);
          $.each(orderlist.product,function(i,productList){

            var productList=productList[0];
            //var time=dateFormat(orderlist.orderTime);
            var time=parseInt(orderlist.orderTime);
            var date=dateFormat(time);
            console.log(data);
            html+=`
                       <div><img src="${productList.img}"></div>


                   `

          });
          html+=`

                   </td>
                 <td>${orderlist.orderName}</td>
                 <td>${orderlist.phone}</td>
                 <td class="price">￥${orderlist.price}</td>
                 <td>${orderlist.payment==1?"店内支付":(orderlist.payment==2?"支付宝":"银联")}</td>
                 <td class="time">${orderlist.orderTime}</td>
                 <td>${orderlist.status==1?"等待付款":(orderlist.status==2?"订单成功":"订单失败")}</td>
               </tr>
            `;
        });
      }
      $("div.order table tbody").html(html);
      //把所有的日期对应的数字转换为年月日格式
      var jqObj = $('div.order tbody td.time');
      jqObj.each(function(i,span){
        var num = span.innerHTML;
        num=parseInt(num);
        var date=dateFormat(num);
        span.innerHTML=date;
      });
    }
  })
};
order();