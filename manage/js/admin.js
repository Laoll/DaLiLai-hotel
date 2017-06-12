/**
 * Created by Administrator on 2016/12/21.
 */
/**
 * Created by Administrator on 2016/12/19.
 */
function admins(pager){
    $.ajax({
        url:"data/admin.php",
        data:{pageNum:pager},
        success:function (data){
            console.log(data);
            var admin_list=data.data;
            var admin_pager=data.pageCount;
            var html='';
            setnav("管理员管理");
            $.each(admin_list,function(i,admin){
                //console.log(dish);
                if(admin.name!=sessionStorage['name']){
                    html+=`
                        <tr >
          <td><input type="checkbox" name="id"  value="1" />
            ${admin.aid}</td>
          <td>${admin.name}</td>
           <td>${admin.aType==1?"超级管理员":"普通管理员"}</td>
          <td><div class="button-group">  <a class="button border-red" href="javascript:del(${admin.aid})" ><span class="icon-trash-o"></span> 删除</a> </div></td>
        </tr>
                         `;
                }

            });
            $("#all_admin tbody").html(html);
            html='';
            for(var i=1;i<=admin_pager;i++){
                if(i==pager){
                    html+=`<a  onclick="admins(${i},'000')" class="current">${i}</a>`;
                }else{
                    html+=`<a  onclick="admins(${i},'000')">${i}</a>`;
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
                admins(pageNum);
            })
        }

    });
}
$(document).ready(function(){
    admins(1);
});
function del(id){
    if(window.confirm("您确定要删除吗?")){
        $.ajax({
            url:"data/delete_admin.php",
            data:{aid:id},
            success:function(data){
                if(data.msg="succ"){
                    alert("删除成功");
                    admins(1);
                }else if(data.msg="err"){
                    alert("删除成功");
                }
            }
        })
    }
}

$("#checkall").click(function(){
    $("input[name='id[]']").each(function(){
        if (this.checked) {
            this.checked = false;
        }
        else {
            this.checked = true;
        }
    });
})
function DelSelect(){
    var Checkbox=false;
    $("input[name='id[]']").each(function(){
        if (this.checked==true) {
            Checkbox=true;
        }
    });
    if (Checkbox){
        var t=confirm("您确认要删除选中的内容吗？");
        if (t==false) return false;
    }
    else{
        alert("请选择您要删除的内容!");
        return false;
    }
}