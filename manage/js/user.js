/**
 * Created by Administrator on 2016/12/19.
 */
/**
 * Created by Administrator on 2016/12/19.
 */
    function user(pager){
    $.ajax({
        url:"data/user_select.php",
        data:{pageNum:pager},
        success:function (data){
            console.log(data);
            var user_list=data.data;
            var pagerCount=data.pageCount;
            var html='';
            $.each(user_list,function(i,user){
                //console.log(dish);
                html+=`
                        <tr >
          <td><input type="checkbox" name="id[]" data-nid="${user.uid}" value="1" />
            </td>
          <td>${user.uname}</td>
          <td>${user.uphone}</td>
          <td>${user.email}</td>
          <td><div class="button-group"> <a class="button border-red" href="javascript:void(0)" onclick="return del(${user.uid})"><span class="icon-trash-o"></span> 删除</a> </div></td>
        </tr>
                         `;
            });
            $("#user tbody").html(html);

            html='';
            for(var i=1;i<=pagerCount;i++){
                if(i==pager){
                    html+=`<a  onclick="user(${i})" class="current">${i}</a>`;
                }else{
                    html+=`<a  onclick="user(${i})">${i}</a>`;
                }

            }
            $(".pagelist").html(html);
            $(".pagelist").on("click","a",function(e){
                //阻止鼠标事件
                e.preventDefault();
                var $target=$(e.target);
                $target.addClass("current").siblings(".current").removeClass("current");
                //获取要跳转的页号
                var pageNum =parseInt( $(".pagelist>a.current").attr('href'));
                user(pageNum);
            })
        }

    });
}
$(document).ready(function(){
    user(1);
})
