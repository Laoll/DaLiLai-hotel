/**
 * Created by Administrator on 2016/12/18.
 */
$(document).ready(function(){
    dish(1,'000');
});
$(".fix").click(function(){
    console.log("a");
});
$(document).ready(function(){

    $(".all_dish").delegate(".fix","click",function(){
        console.log($(this));
    });
});
function dish(pager,type){
    $.ajax({
        url:"data/food_select.php",
        data:{pageNum:pager,type:type},
        success:function (data){
            var dish_list=data.data;
            var dish_pager=data.pageCount;
            var html='';
            setnav("餐饮管理");
            $.each(dish_list,function(i,dish){
                html+=`

                           <tr >
                        <td><input type="checkbox" name="id" data-nid="${dish.fid}" value="${dish.fid}" />
                            </td>
                        <td class="fImg"><img src="../${dish.fimg}" alt=""/></td>
                        <td>
                            <textarea class="fname" disabled>${dish.fname}</textarea>
                        </td>
                        <td>
                            <textarea name="fintr" disabled>${dish.fintr}</textarea>
                        </td>
                        <!--<td>-->
                        <!--&lt;!&ndash;<input type="text" name="type" value="${dish.type}" disabled/>&ndash;&gt;-->
                             <!--<select  name="type" id=""  disabled>-->
                                    <!--<option value="001" selected="${dish.type=='001'?true:false}">凉菜</option>-->
                                    <!--<option value="002" selected="${dish.type=='002'?true:false}">披萨</option>-->
                                    <!--<option value="003" selected="${dish.type=='003'?true:false}">西式扒类</option>-->
                                    <!--<option value="004" selected="${dish.type=='004'?true:false}">汤品</option>-->
                                    <!--<option value="005" selected="${dish.type=='005'?true:false}">甜品</option>-->
                                    <!--<option value="006" selected="${dish.type=='006'?true:false}">小食</option>-->
                                    <!--<option value="007" selected="${dish.type=='007'?true:false}">饮品</option>-->
                                    <!--<option value="008" selected="${dish.type=='008'?true:false}">沙拉</option>-->
                                    <!--<option value="009" selected="${dish.type=='009'?true:false}">套餐</option>-->
                                <!--</select>-->
                        <!--</td>-->
                        <td><input type="number"  name="fprice" value="${dish.fprice}" disabled/></td>
                        <td>
                            <div class="button-group">
                            <a class="button border-green fix" >
                             <span class="icon-trash-o"></span>编辑 </a>
                             <a class="button bg-green update" onclick="update(${dish.fid})">
                             <span class="icon-trash-o"></span>完成 </a>
                            <a class="button border-red" onclick="dele(${dish.fid})" >
                             <span class="icon-trash-o"></span> 删除</a>
                             </div>
                        </td>
                    </tr>

                         `;
            });
            $("#all_dish tbody").html(html);
             html='';
            for(var i=1;i<=dish_pager;i++){
                if(i==pager){
                    html+=`<a  onclick="dish(${i},'000')" class="current">${i}</a>`;
                }else{
                    html+=`<a  onclick="dish(${i},'000')">${i}</a>`;
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
                dish(pageNum);
            })
            $(".fix").click(function(){
                var h=$(this).bind();
                update(h);
                 var tr=$(this).parent().parent().parent();
                 var te=tr.children().children();
                console.log(te);
                  te.removeAttr("disabled");
                $(this).hide();
                $(this).next().show();
            });
            $(".update").click(function(){
                var tr=$(this).parent().parent().parent();
                var te=tr.children().children();
                console.log(te[3].value);
                var fname=te[2].value;
                var fintr=te[3].value;
                //var type=te[4].value;
                var fprice=te[4].value;
                var fid=te[0].value;
                $.ajax({
                    url:"data/update_dish.php",
                    data:{fname:fname,fintr:fintr,fprice:fprice,fid:fid},
                    success:function (data) {
                        if (data.msg == 'succ') {
                            dish(1, '000');
                            //$(".update").hide();
                            //$(".update").show();
                        }
                    }
                });

            });
        }

    });
}
//删除
function  dele(id){
       console.log(id);
      var fid=id;
      var aType=sessionStorage['aType'];
       if(aType==1){
           $.ajax({
               url:'data/delete_dish.php',
               data:{fid:fid},
               success:function (data){
                   if(data.msg=='succ'){
                       dish(1,'000');
                   }

               }

           })
       }else{
           alert("您没有删除权限");
       }

}
//更新
function update(elem){
    console.log(elem);


}
