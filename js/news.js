$("#c_header").load("data/head/header.php",function(){
	navText("最新资讯");
	loginName();
});

/*分页*/
/*页面加载完成后，异步请求产品列表*/
$(function(){
  loadProductByPage(1);
});

//点击页码跳转页面,绑定事件监听
$("#pages").on("click","a",function(e){
   //阻止鼠标事件
    e.preventDefault();
	var $target=$(e.target);
    $target.addClass("active").siblings(".active").removeClass("active");
	//获取要跳转的页号
     var pageNum = $target.attr('href');
     loadProductByPage(pageNum);
	  //页面移动到页头
	   var TOP=$("#act_shows").offset().top-40;
	     $("body").scrollTop(TOP);

})
//分页加载商品数据，并动态创建分页条
function loadProductByPage(pageNum){
  $.ajax({
    url: 'data/news_select.php',
    data:{pageNum:pageNum},
    success: function(pager){
      //遍历读取到分页器对象，拼接HTML，追加到DOM树
      var html = ''; 
      $.each(pager.data,function(i,p){
        html += `
          <dl>
		    	<dd><img data-newId="${p.newId}" src="${p.newImg}"></dd>
		    	<dt>
				    <h3><a href="">${p.newTitle}</a></h3>
					<span>发布时间：${p.relTime}</span>
					<p> ${p.details}</p>
				</dt>
		    </dl> 
        `;
      });
      $('#act_shows>.show').html(html);
	  
     //动态生成页码
			pageNum=parseInt(pageNum);
	 var html="";
	     html+=`
			   <a href="1" >首页</a>
                <a href="${pageNum==1?pageNum:pageNum-1}" >上一页</a>
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
		      <a href="${pageNum==pager.pageCount?pageNum:pageNum+1}" >下一页</a>
				<a href="${pager.pageCount}" >尾页</a>
	         `;
	   $("#pages").html(html);
	  //将上一页，下一页的href定义
    }
  });
}
$(".show").on("click","img",function(e){
	  console.log($(this));
	  var newId=$(this).data("newid");
	  sessionStorage['newId']=newId;
	  location.href="new_detail.html";
});
