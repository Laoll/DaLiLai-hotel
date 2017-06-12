///**
// * Created by Administrator on 2016/12/18.
// */
//     $(document).ready(function(){
//         $("#view").load("tpl/index.html");
//     });

//         rstatu(1);
//     //});
//       function skip(href){
//           $("#view").load(href,function(){
//               rstatu(1);
//           });
//           $(document).ready(function(){
//
//           })
//       }
////所有的查询页面
//
$(document).ready(function(){
    $("#header").load("header.html",function(){
        $(".aname").html(sessionStorage['name']);
        var type=sessionStorage['aType'];
        if(type==1){
            $(".atype").html("超级管理员");
            $(".super_admin").show();
        }else if(type==2){
            $(".atype").html("管理员");
        }
        $(".wait_pro").html(localStorage['wait']);

        //$(function(){
        //    $(".leftnav h2").click(function(){
        //        $(this).next().slideToggle(200).siblings("ul").slideUp(600);
        //        $(".leftnav h2").removeClass("on");
        //        $(this).toggleClass("on");
        //    })
        //    $(".leftnav ul li a").click(function(){
        //        $("#a_leader_txt").text($(this).text());
        //        $(".leftnav ul li a").removeClass("on");
        //        $(this).addClass("on");
        //    })
        //});
    });
});
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

    function page(){
        $(".pagelist").on("a","click",function(e){
            e.preventDefault();
            console.log("a");
            $(this).addClass("current").siblings().removeClass("current");
        });
    }




//管理员权限
function setnav(txt){
    $(".leftnav a").each(function(){
        console.log($(this).text());
        if($(this).text()==txt){
            $(this).addClass("hover");
        }
    })
}
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}