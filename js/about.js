/**
 * Created by HNJD-001 on 2016/11/30.
 */
$("#c_header").load("data/head/header.php",function(){
  navText("关于我们");
  loginName();
});
/*切换图片*/
$("#in_news>ul.list").on("mouseenter","li",function(e){
  var $sub=$(e.target);
  var  $li=$(e.target).parent();
  //获取图片的路径，把获取的图片放置到.pic中
  $li.children("div").hide();
  $li.siblings().children("div").show();
  var $src=$li.children("img").attr("src");
  $(".pic").children("img").attr("src",$src);
});
/*时光轴*/
$("#optical>div.year>h2>a>i").click(function (e){
  console.log($(e.target));
  var $target=$(e.target);
  $target.toggleClass("hover");
  $target.parent().parent().siblings("#list").slideToggle();
  console.log($target.parent().parent().siblings("#list"));
});
$("ul.intro li").each(function(i,elem){
  console.log($(elem));
  $(elem).css("background-position","-22px"+" -"+(17+71*i)+"px");
  console.log("-22px"+" -"+(17+71*i)+"px");
  $(elem).mouseover(function(){
    $(elem).css("background-position","-459px"+" -"+(17+71*i)+"px");
  }).mouseout(function(){
    $(elem).css("background-position","-22px"+" -"+(17+71*i)+"px");
  })
});
/*图片淡出*/