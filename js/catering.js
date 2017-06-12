/**
 * Created by HNJD-001 on 2016/10/29.
 */
$("#c_header").load("data/head/header.php",function(){
  navText("餐饮美食");
  loginName();
});
//功能点：手风琴效果
  $("#boutique>ul>li.b_wid").children("div.shade").hide();
  $("#boutique>ul").on("mouseenter","li",function(e){
    var $li=$(e.target).parent();
    $li.children("div.shade").hide();
    $li.siblings().children("div.shade").show();
    // $li.addClass("b_wid").siblings(".b_wid").removeClass("b_wid");

    $li.addClass("b_wid");
    $li.siblings(".b_wid").removeClass("b_wid");

  })
  var len=$("#cainter>div.details>div").length;
  for(var i=0;i<len;i++){
    if(i==0||i%4==0){
      $("#cainter>div.details>div:eq("+i+")").css("margin-left","0");
    }
  }


/*分页*/
/*页面加载完成后，异步请求产品列表*/
$(function(){
  loadProductByPage(1,"000");
});
var type="000";
var pageNum=1;
$("#cainter .tab").on("click","li",function(e){
    var $li=$(e.target).parent();
    $li.addClass("active").siblings(".active").removeClass("active");
    type=$(".tab li.active a").attr('href');
    type=type.slice(1);
    var pageNum=1;
    loadProductByPage(pageNum,type);
});
//点击页码跳转页面,绑定事件监听
$("#pages").on("click","a",function(e){
  //阻止鼠标事件
  e.preventDefault();
  //var $target=$(e.target);
  $(this).addClass("active").siblings(".active").removeClass("active");
  //获取要跳转的页号
  pageNum =parseInt( $(this).attr('href'));
  loadProductByPage(pageNum,type);
  //页面移动到页头
  var TOP=$("#cainter").offset().top-40;
  $("body").scrollTop(TOP);
  //loadProductByPage(pageNum,type);
})
//热销菜式
//热销菜式
//选择框按钮
$("#hot_sell>div.right_more>ul.type_list").on("click","li",function(e){
  var $target=$(e.target);
  $target.addClass("current");//给点击元素加上current类
  $target.siblings().removeClass("current");//给其它元素删除current类
  var $index=$target.index("ul.type_list>li");//查询点击元素的下标
  var $img=$("#hot_sell ul.chioce>li>img");
  /*修改其图片*/
  var $arr1=$img.attr("src").slice(0,12);
  var $arr2=$img.attr("src").slice(length-4);
  for(var i=0;i<=$img.length;i++){
    $("#hot_sell ul.chioce>li>img:eq("+i+")").attr("src",$arr1+$target.attr("name")+i+$arr2);
  }
  //文字的出现
  $("div.left_info>div:eq("+$index+")").css("display","block");
  $("div.left_info>div:eq("+$index+")").siblings("div").css("display","none");

})

//分页加载商品数据，并动态创建分页条
function loadProductByPage(pageNum,type){
  //获取类型
  $.ajax({
    url: 'data/food_select.php',
    data:{pageNum:pageNum,type:type},
    success: function(pager){
      //遍历读取到分页器对象，拼接HTML，追加到DOM树
      var html = '';
      $.each(pager.data,function(i,food){
        html += `
		    <div>

					 <img data-fid="${food.fid}" src="${food.fimg}" alt="">
				<div id="type_title">${food.fname} <span>￥${food.fprice}</span></div>
				</div>
        `;
      });
      $('#cainter>.details').html(html);

      //动态生成页码
        console.log(typeof(pageNum));
      var html="";
      html+=`
			   <a href="1" >首页</a>
                <a href=${pageNum==1?1:pageNum-1} class="">上一页</a>
			 `;
      for(var i=1;i<=pager.pageCount;i++){
        if(i==pageNum){
          html+=`
		     <a href="${i}" class="active">${i}</a>
	        ` ;
        }else{
          html+=`
		     <a href="${i}">${i}</a>
	        ` ;
        }
      }
      html+=`
		      <a href=${pageNum==pager.pageCount?pager.pageCount:pageNum+1} >下一页</a>
				<a href="${pager.pageCount}" >尾页</a>
	         `;
      $("#pages").html(html);

    }
  });
};

//
$(".details").on("click","div>img",function(e){
   $("#malog").show();
   var fid=$(this).data('fid');
   sessionStorage['pid']=fid;
  //异步请求数据
  $.ajax({
    type:"POST",
    url:"data/food_getById.php",
    data:{fid:fid},
    success:function(foods){
         var html="";
        html+=`
       <span class="close" ></span>
			 <div>
				 <img src="${foods.fimg}" alt=""/>
			 </div>

			 <!--右侧详情-->
			 <div class="info">
				 <ul>
					 <li><h2>${foods.fname}</h2></li>
					 <li><div class="intro">${foods.fintr}</div></li>
				     <li class="price"><span>价格:</span>￥${foods.fprice}</li>
					 <li><span>数量:</span><b class="add">+</b><input type="text" value="1" id="count"/><b class="sub">-</b></li>
					 <li>
					    <p>
                     <button class="add_cart">加入订单</button>
                     <!--<button class="booking">立即下单</button>-->
                  </p>
					 </li>
				 </ul>
			 </div>
            `;
     $("#malog .f_infos").html(html);
      $("#malog .f_infos>span.close").click(function(){

          $("#malog").hide(200);


      })
    }
    
  })
});
$("#malog").on("click","b",function(){
    var count=$("#count").val()
    if($(this).html()=="+"){
      count++;
    }if($(this).html()=="-"){
    if(count>1){
      count--;
    }
  }
  $("#count").attr("value",count);
})
//点击加入订单
$("#malog").on("click","button.add_cart",function(){
    var uname=sessionStorage['loginName'];
    if(!uname){
      alert("未进行登录，无法预订");
    }
    var pid=sessionStorage['pid'];
    var count=$("#count").val();
     $.ajax({
          url:'data/add_cart.php',
          data:{uname:uname,pid:pid,count:count,type:1},
          success:function(data){
             //console.log(data);
             //alert("加入订单成功"+data.count);
            $("#malog").hide();
          }

     })
});