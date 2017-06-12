/**
 * Created by HNJD-001 on 2016/11/29.
 */
$.ajax({
  url:'data/select_check_detail.php',
  data:{uname:sessionStorage['loginName']},
  success:function(data){
    var html="";
    var total=0;
    if(data.food){
      $.each(data.food,function(i,dish){
        html+=`
                <tr>
              <td>
                <img src="${dish.fimg}">
              </td>
              <td>${dish.fname}</td>
              <td>￥${dish.fprice}</td>
              <td>${dish.count}</td>
                <td>￥${dish.fprice*dish.count}</td>
            </tr>
                `;
        total+=dish.fprice*dish.count;
      });
    }
    if(data.room){
      $.each(data.room,function(i,room){
        html+=`
                <tr>
              <td><img src="${room.rPic}"></td>
              <td>${room.houseType}</td>
              <td>￥${room.proPrice}</td>
              <td>${room.count}</td>
              <td>￥${room.proPrice*room.count}</td>
            </tr>
                `;
        total+=room.proPrice*room.count
      });
    }
    $(".total").children("span").html("￥"+total);
    $("table tbody").html(html);
    $("input[name='price']").prop("value",total);
    //精简购物车详情数组，编码为JSON字符串，赋值给input隐藏域用于表单
    $.each(data.food,function(i,f){
      delete(f.fname);  //只保留productId和count,type
      delete(f.fprice);
      delete(f.fimg);
      delete(f.checked);
    });
    $.each(data.room,function(i,r){
      delete(r.houseType);  //只保留productId和count,type
      delete(r.proPrice);
      delete(r.rPic);
      delete(r.checked);
    });
    var foodList = JSON.stringify(data.food); //把JS的数组编码为JSON字符串
    var roomList = JSON.stringify(data.room);
    $('input[name="foodList"]').val(foodList);
    $('input[name="roomList"]').val(roomList);
  }

});
$(".btn_sumit").click(function(){
  $('input[name="uname"]').val(sessionStorage['loginName']);
  var order=$("#form_order").serialize();
  $.ajax({
    url:"data/add_order.php",
    data:order,
    type:"POST",
    success:function(data){
            $("div.malog").show();
            if(data.msg=="succ"){
              $("div.succ").show();
               $("div.malog .orderNum").html(data.orderNum);
            }else if(data.msg=="err"){
              $("div.malog .err").show();
            }else{
              $("div.malog .message").html("其他数据类型错误！");
            }
    }
  })
})
