
var Msg='';
var test=function(text){
    var msg='';
    $.ajax({
      type:"POST",
      url:'data/user_check.php',
      data:{data:text},
      async :false,
      success:function(data){
        //var data= JSON.parse(data);
        msg=data;
      }
    });
     return msg;
  }
  /*1.对用户名进行验证*/
  uname.onblur = function(){
    var name=this.value;
       Msg=test(name);
      console.log(Msg);
    if(this.validity.valueMissing){
      this.nextElementSibling.innerHTML = '用户名不能为空';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('用户名不能为空');
    }else if(this.validity.tooShort){
      this.nextElementSibling.innerHTML = '用户名不能少于3位';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('用户名不能少于3位');
    }else if(Msg=='cunzai'){
      this.nextElementSibling.innerHTML = '用户名已经被使用';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('');

    }else if(Msg=='bucunzai'){
      this.nextElementSibling.innerHTML = '用户名可以使用';
      this.nextElementSibling.className = 'msg-success';
      this.setCustomValidity('');

    }

  }

  //2.对密码进行验证
  upwd.onblur = function(){
      console.log(Msg);
      if(!upwd.value){
      this.nextElementSibling.innerHTML = '密码不能为空';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('密码不能为空');
      }else if(this.validity.tooShort){
      this.nextElementSibling.innerHTML = '密码不能少于6位';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('密码不能少于6位');
      } else {
      this.nextElementSibling.innerHTML = '格式正确';
      this.nextElementSibling.className = 'msg-success';
      this.setCustomValidity('');
    }
  }
  upwd.onfocus = function(){
    this.nextElementSibling.innerHTML = '密码至少为6位数字或者字符';
    this.nextElementSibling.className = 'msg-default';
  }
  /*3.对邮箱地址进行验证*/
  uemail.onblur = function(){
    var uemail=this.value;
    Msg=test(uemail);
    if(this.validity.valueMissing){
      this.nextElementSibling.innerHTML = '邮箱不能为空';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('邮箱不能为空');
    }else if(this.validity.typeMismatch){
      this.nextElementSibling.innerHTML = '邮箱格式不正确';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('邮箱格式不正确');
    }else if(Msg=='cunzai'){
      this.nextElementSibling.innerHTML = '此邮箱已经被使用';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('');

    }else if(Msg=='bucunzai'){
      this.nextElementSibling.innerHTML = '邮箱可以使用';
      this.nextElementSibling.className = 'msg-success';
      this.setCustomValidity('');

    }
  }
  uemail.onfocus = function(){
    this.nextElementSibling.innerHTML = '请输入合法的邮箱地址';
    this.nextElementSibling.className = 'msg-default';

  }
  uphone.onblur = function(){
    var  uphone=this.value;
    Msg=test(uphone);
    if(this.validity.valueMissing){
      this.nextElementSibling.innerHTML = '电话号码不能为空';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('电话号码不能为空');
    }else if(this.validity.typeMismatch){
      this.nextElementSibling.innerHTML = '电话号码格式不正确';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('电话号码格式不正确');
    }else if(Msg=='cunzai'){
      this.nextElementSibling.innerHTML = '电话号码已经被使用';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('');

    }else if(Msg=='bucunzai'){
      this.nextElementSibling.innerHTML = '该电话号码可以使用';
      this.nextElementSibling.className = 'msg-success';
      this.setCustomValidity('');

    }
  }
  uphone.onfocus = function(){
    this.nextElementSibling.innerHTML = '请输入合法的手机号码';
    this.nextElementSibling.className = 'msg-default';
  }
  //确认密码
  upwd2.onblur=function() {
    if(!upwd2.value){
      this.nextElementSibling.innerHTML = '密码不能为空';
      this.nextElementSibling.className = 'msg-error';
      this.setCustomValidity('密码不能为空');
    }else if (upwd2.value != upwd.value) {
      this.nextElementSibling.innerHTML = '两次密码输入不一致';
      this.nextElementSibling.className = 'msg-error';
     }else if (upwd2.value == upwd.value) {
      this.nextElementSibling.innerHTML = '输入正确';
      this.nextElementSibling.className = 'msg-success';
    }
  }
 
  $('#btn_reg').click(function(){
    var result=false;
    $("#user_info>.form-group").each(function (i, elem) {
      result=  $(this).children("span").hasClass("msg-success");
       console.log(result);
    });
    if(result){
      //表单序列化，获得所有的用户输入
      var data = $('#user_info').serialize();
      //异步提交请求数据
      $.ajax({
        type: 'POST',
        url: 'data/user_insert.php',
        data: data,
        success: function(result){
          console.log('开始处理服务器端返回的注册结果');
          //console.log(result);
          if(result.msg=='succ'){
            alert('注册成功！');
            location.href='login.html';
          }else {
            alert('注册失败！');
          }
        }
      });
    }

  });
 /*功能点2：轮播*/
var pic = {
  intr: function () {
    var i = 1;
    var str1 = $("#trigger img").attr("src");
    var str = str1.toString();
    var timer = setInterval(function () {
      i++;
      if (i > 3) {
        i = 1;
      }
      str = str.replace(/[1-3]/, i);
      $("#trigger img").attr("src", str);
    }, 2000);
  }
}
pic.intr();