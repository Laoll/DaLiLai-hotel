/*修改用户名*/
$("#c_header").load("data/head/header.php",function(){
  navText("首页");
  loginName();
});
/*大图切换*/
$("#pic_list").on("click", "li", function (e) {
  var $target = $(e.target);
  var n = $(this).index("#pic_list>li");
  console.log(n);
  n = n + 1;
  if (n >= 1) {
    $("div.main_pic>img").attr("src", "images/hotel/main/main0" + n + ".jpg");
    $target.css("background", "#DD4E42");
  }


});
/*设施服务*/
$("#facility>ul.fac>li").bind("mouseover ", "div.shade_box", function (e) {
  var $target = $(e.target);
  console.log($target);
  $target.siblings("div.sub_text").show();
  $target.parent("div.shade_box").addClass("clo");
  $("div.shade_box").mouseleave(function () {
    $("div.shade_box").children("div.sub_text").hide();
    $target.parent("div.shade_box").removeClass("clo");
  })
});
/*最新资讯*/
$("#main>ul.shade_new>li>ul.sub_new").hide();
$("#main>ul.shade_new>li").mouseover(function () {
  $(this).children("ul.sub_new").fadeIn();
  $(this).siblings().children("ul.sub_new").hide();
  $(this).siblings().css("left", "0");

});
$("#main>ul.shade_new>li").mouseleave(function () {
  $(this).children("ul.sub_new").fadeOut();
});

/*热门套餐*/

$("#spe_off>div.hot_meals>dl>dd>div.set_meal").hide();
$("#spe_off>div.hot_meals").on("click", "dl>dd>span.sign", function (e) {
  var $sign = $(e.target);

  if ($sign.html() == "&lt;") {
    $sign.siblings("div.set_meal").fadeIn();
    $sign.html("&gt;");
  } else {
    $sign.siblings("div.set_meal").fadeOut();
    $sign.html("&lt;");
  }
});
/*更多服务*/
/*叫醒服务*/
$("#service").on("mouseover", "#service>li", function (e) {
  var $target = $(e.target);
  /*截取第一个字符*/

});
$("#service>li").mouseover(function () {
  /*修改样式*/
  $(this).children("hr").addClass("hover");
  $(this).children("div").addClass("hover");
  $(this).addClass("hover");
  /*清楚本身样式*/
});
$("#service>li").mouseleave(function () {
  /*修改样式*/
  $(this).children("hr").removeClass("hover");
  $(this).children("div").removeClass("hover");
  $(this).removeClass("hover");
  /*清楚本身样式*/
});
/*.........*/

/*最新活动*/
var activities = [
  {"i": 0, "active": "images/banner01.png"},
  {"i": 1, "active": "images/banner02.png"},
  {"i": 2, "active": "images/banner03.png"},
  {"i": 3, "active": "images/banner04.png"},
  {"i": 4, "active": "images/banner01.png"},
  {"i": 5, "active": "images/banner02.png"},
  {"i": 6, "active": "images/banner03.png"},
  {"i": 7, "active": "images/banner04.png"},
];
/*移动图片*/
/*当点击span按钮时，如果span中有class='left',则ul.content的位置向*/
var connent = {
  LIWIDTH: 0,//保存每个li的宽度,使其每次出现四张图其实就是#active_box/4的宽
  N: 0,//保存移动方向
  MAXRIGHT: 0,//记录最大可以移动的距离
  MoveLeft: false,//记录是否可以左移动,开始不能向左移
  MoveRight: true,//记录是否可以右移动
  inti: function () {
    this.LIWIDTH = (parseFloat($("#active_box").css("width"))) / 4;
    this.updateView();
    this.canMove();
    //为span绑定单击事件
    $("#new_active").on("click", "span", function (e) {
      var $span = $(e.target);//获取目标元素、
      if ($span.hasClass("left")) {//左移
        this.N = -1;

      } else {//右移
        this.N = 1;
      }
      this.canMove();
      this.move();
    }.bind(this))

  },
  sign: function () {
    //两个箭头图标
    if (this.MoveLeft == false) {
      $("#new_active>span.left").css("background-position", "-203px -24px");
    } else {
      $("#new_active>span.left").css("background-position", "-256px -24px");
    }
    if (this.MoveRight == true) {
      $("#new_active>span.right").css("background-position", "-284px -24px")
    } else {
      $("#new_active>span.right").css("background-position", "-232px -24px");
    }
  },
  move: function () {
    var left = parseFloat($("#active_box>ul.content").css("left"));
    //记录最大可以移动的距离

    if (this.N == -1 && left < 0) {
      $("#active_box>ul.content").css("left", left + this.LIWIDTH);
      this.updateView();
      this.MoveLeft = true;
      this.canMove();
    } else if (this.N == 1 && left > -this.MAXRIGHT) {
      $("#active_box>ul.content").css("left", left - this.LIWIDTH);
      this.updateView();
      this.MoveRight = true;
      this.canMove();
    }

  },
  //判断是否可移动，并修改图标
  canMove: function () {
    this.MAXRIGHT = parseFloat($("#active_box>ul.content").css("width")) - parseFloat($("#active_box").css("width"));
    /*修改span的图标颜色*/

    var left = parseFloat($("#active_box>ul.content").css("left"));
    /*如果不能再向左移，则span.left修改定位*/
    if (left == 0) {
      this.MoveLeft = false;
    } else {
      this.MoveLeft = true;
    }
    /*如果不能再向右移，则span.right修改定位*/
    if (left == -this.MAXRIGHT) {
      this.MoveRight = false;
    } else {
      this.MoveRight = true;
    }
    this.sign();
  },
  updateView: function () {//将数组中的元素更新到页面
    //遍历activities数组中每个对象,同时声明空字符串html
    for (var i = 0, html = "", idxs = ""; i < activities.length; i++) {
      html += "<li><img src='" + activities[i].active + "'></li>";
    }
    //设置id为connent的内容为html,再设置其宽为LIWIDTH*pics的元素个数
    $("#active_box>ul.content").html(html).css("width", this.LIWIDTH * activities.length);
  }
}
connent.inti();
/*餐饮服务*/
var self = function () {
  $("#facility>ul.eat_type>li.self").click(function (e) {
    console.log($(e.target));

    var $img = $(e.target).attr("src");
    console.log($img);
    var $src = $img.slice(0, $img.length - 5);

    var i = $img.slice($img.length - 5, $img.length - 4);
    if (i == 4) {
      i = 1;
    }
    console.log(i);
    console.log($src + i + ".jpg");
    i++;
    $(e.target).attr("src", $src + i + ".jpg");

  });
}
self();

/***登陆界面***/
$("#check_box").on("click", "input", function (e) {
  var $target = $(e.target);
  if ($target.hasClass("method_normal")) {
    $target.parent().siblings("#normal").show();
    $target.parent().siblings("#phone_login").hide();
  } else if ($target.hasClass("method_phone")) {
    $target.parent().siblings("#phone_login").show();
    $target.parent().siblings("#normal").hide();
  }
});

/*电梯点亮*/
var elevator = {
  FHEIGHT: 0,//保存楼层的高度
  //保存亮灯区域上下边界距文档显示区顶部距离
  UPLEVEL: 0, DOWNLEVEL: 0,
  CONHEIGHT: 0,//记录#contain距离页面高度
  DURATION: 1000,//动画持续时间
  init: function () {
    $("#elevator").hide();
    //为document绑定scroll事件为scroll方法
    $(document).scroll(this.scroll.bind(this));
    //添加点击事件
    $("#elevator").on("click", "li>a", function (e) {
      //停止body上的动画，清空队列
      $("body").stop(true);
      //获得目标元素的父元素$li
      var $li = $(e.target).parent();
      //获得$li在所有li中的下标i
      var i = $li.index("#elevator>li");

      //查找第i个.floor
      var $floor = $("div.floor:eq(" + i + ")");

      //启动动画，让body在DURATION时间内，滚动到$span距页面顶部的总距离-UPLEVEL
      $("body").animate(
        {
          scrollTop: $floor.offset().top - this.UPLEVEL-40
        },
        this.DURATION
      );
    }.bind(this))
  },

  scroll: function () {
    $("#contain>div.floor").each(function (i, elem) {
      this.FHEIGHT = parseFloat($("#contain>div.floor:eq(" + i + ")").css("height"));
      //+ parseFloat($("#contain>div.floor:eq(" + i + ")").css("margin-top"))+parseFloat($("#contain>div.floor:eq(" + i + ")").css("margin-bottom"));//每个楼层的高度，
      console.log(this.FHEIGHT);
      this.UPLEVEL = (innerHeight - this.FHEIGHT) / 2;
      this.DOWNLEVEL = this.UPLEVEL + this.FHEIGHT;
      //获取当前元素elem距页面顶部的总距离totalTop
      var totalTop = $(elem).offset().top;
      //获取body滚动过的距离scrollTop
      var scrollTop = $("body").scrollTop();
      //用totalTop-scrollTop，保存在innerTop
      var innerTop = totalTop - scrollTop;
      //让#contain出现
      //获取#contain距离页面高度
      this.CONHEIGHT = $("#contain").offset().top;
      if (scrollTop < this.CONHEIGHT / 2) {
        $("#elevator").hide();
      } else {
        $("#elevator").show();
      }
      //当footer出现的时候，电梯点亮消失
      if (innerTop > this.UPLEVEL && innerTop <= this.DOWNLEVEL) {
        $("#elevator>li:eq(" + i + ")>a").addClass("hover").parent().siblings().children().removeClass("hover");
        $(elem).children("p").css("color", "#DD4C40");

      } else {
        $("#elevator>li:eq(" + i + ")>a").removeClass("hover");
        $(elem).children("p").css("color", "rgb(102, 102, 102)");
      }

    }.bind(this))
  }
}
elevator.init();
/*广告图片数组*/
var imgs = [
  {"i": 0, "img": "images/index/index_01.jpg"},
  {"i": 1, "img": "images/index/index_03.jpg"},
  {"i": 2, "img": "images/index/index_04.jpg"},
];
/*创建轮播对象*/
var slider = {
  LIWIDTH: 0,//保存每个li的宽度,其实就是#slider的宽
  DURATION: 1000,//动画的总时间
  WAIT: 1500,//自动轮播之间的等待时间
  timer: null,//保存一次性定时器序号
  canAuto: true,//保存是否可以自动轮播
  init: function () {

    this.LIWIDTH = parseFloat(
      $("#slider").css("width")
    );
    this.updateView();
    //为id为indexs的ul添加鼠标进入事件代理，只有不是hover的li才能响应事件
    $("#indexs").on("mouseover", "li:not(.hover)",
      function (e) {
        //获得目标元素$target
        var $target = $(e.target);
        console.log($target.siblings(".hover").index("#indexs li "));
        //调用move方法，传入要移动的个数:
        //目标元素的内容-目标元素的兄弟中class为hover的li的内容
        this.move($target.index(" li ")
        - $target.siblings(".hover").index(" li "));
        console.log($target.index(" li "));
        console.log($target.siblings(".hover").index(" li "))
        console.log($target.index(" li ")
        - $target.siblings(".hover").index(" li "))
      }.bind(this));
    //当鼠标进入#slider时，将canAuto改为false
    //当鼠标移出#slider时，将canAuto改为true
    $("#slider").hover(
      function () {
        this.canAuto = false;
      }.bind(this),
      function () {
        this.canAuto = true;
      }.bind(this)
    )
    this.autoMove();
  },
  //启动自动轮播
  autoMove: function () {
    //启动一次性定时器:
    this.timer = setTimeout(
      function () {
        if (this.canAuto) {
          this.move(1);//调用move执行移动一个
        } else {
          this.autoMove();//继续等待
        }
      }.bind(this),
      this.WAIT
    );
  },
  move: function (n) {
    clearTimeout(this.timer);//停止一次性定时器
    this.timer = null;
    $("#imgs").stop(true);//停止动画，防止叠加
    if (n < 0) {
      n *= -1;
      imgs =//先删除结尾的n个元素，拼接到开头
        imgs.splice(imgs.length - n, n).concat(imgs);

      this.updateView();//更新界面
      var left = parseFloat($("#imgs").css("left"));
      $("#imgs").css("left", left - n * this.LIWIDTH + "px");
      //启动动画，在DURATION时间内，left移动到0
      $("#imgs").animate(
        {left: "0"},
        this.DURATION,
        this.autoMove.bind(this)
      );

    } else {
      //右移
      //让#imgs的ul再DURATION事件内，left变为-n*LIWIDTH
      $("#imgs").animate(
        {left: -n * this.LIWIDTH + "px"},
        this.DURATION,
        //在动画结束后调用endMove,替换this，传入参数n
        this.endMove.bind(this, n)
      );
    }
  },
  endMove: function (n) {
    //删除imgs开头的n个元素,再拼到结尾
    imgs = imgs.concat(imgs.splice(0, n))
    this.updateView();//更新页面
    $("#imgs").css("left", 0);//设置#imgs的left为0
    this.autoMove();//启动自动轮播
  },
  updateView: function () {//将数组中的元素更新到页面
    //遍历imgs数组中每个对象,同时声明空字符串html
    for (var i = 0, html = "", idxs = ""; i < imgs.length; i++) {
      html += "<li><img src='" + imgs[i].img + "'></li>";
      idxs += "<li></li>";
    }
    //设置id为imgs的内容为html,再设置其宽为LIWIDTH*imgs的元素个数
    $("#imgs").html(html)
      .css("width", this.LIWIDTH * imgs.length);
    //设置id为indexs的内容为idxs
    $("#indexs").html(idxs);
    //获得#indexs下的和imgs中第一个元素的i属性对应的li,设置其class为hover,选择兄弟中的class为hover的li,清除其class
    $("#indexs>li:eq(" + imgs[0].i + ")")
      .addClass("hover")
      .siblings(".hover").removeClass("hover");
  }
}
slider.init();
/*小广告*/
var adv = {
  DISTANCE: 0,//总距离
  DURATION: 1000,//总时间
  STEPS: 200,//总步数
  step: 0,//步长
  interval: 0,//每步间隔时间
  timer: 0,//保存定时器程序号
  moved: 0,//保存已经移动的步数
  div: null,//保存广告
  init: function () {
    //获得操作对象;
    this.div = $("#msg");
    //总距离
    this.DISTANCE = -parseFloat(this.div.css("bottom"));
    //每一步移动的距离
    this.step = this.DISTANCE / this.STEPS;
    //每一步的时间间隔
    this.interval = this.DURATION / this.STEPS;
    //启动上移函数
    this.moveUp();

  },
  moveUp: function () {//上移动一步的函数
    //周期定时器序号，任务绑定当前操作对象div，传入“1”-buttom-上移动，时间间隔
    this.timer = setInterval(
      this.moveStep.bind(this, 1), this.interval);

  },
  moveStep: function (dir) {
    var bottom = parseFloat(this.div.css("bottom"));
    this.div.css("bottom", bottom + dir * this.step + "px");
    this.moved++;
    //如果步数为0，等待1s再次上移
    if (this.moved == this.STEPS) {
      clearInterval(this.timer);
      this.timer = null;
      this.moved = 0;
      this.WAIT = 5000;
      if (dir == -1) {
        setTimeout(this.moveUp.bind(this), this.WAIT);
      }
    }
  },
  moveDown: function () {//下移一步的行数
    if (this.timer == null) {
      this.timer = setInterval(
        this.moveStep.bind(this, -1), this.interval
      );
    }
  }
}
adv.init();


//新闻动态
var newId=1;
var news=function(){
  $.ajax({
    url:"data/select_newbyId.php",
    data:{newId:newId},
    success:function(data){
      console.log(data);
      console.log(data.news['newTitle']);
      var news=data.news;
      console.log(news);
      $("#slider_new .title").attr("data-max",data.recordCount);
      var html=`
            <a  data-id=${news.newId}>${news.newTitle} </a>
         `;
      $("#slider_new .title").html(html);
    }
  })
};
news();
var timer=setInterval(function(){
  news();
  newId++;
  var max= $("#slider_new .title").data("max");
  if(newId>max){
    newId=1;
  }
},3000);
//随机颜色