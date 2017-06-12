/**
 * Created by Administrator on 2016/12/19.
 */
function news(pager){
    $.ajax({
        url:"data/news_select.php",
        data:{pageNum:pager},
        success:function (data){
            console.log(data);
            var new_list=data.data;
            var new_pager=data.pageCount;
            var html='';
            setnav("新闻动态");
            $.each(new_list,function(i,news){
                //console.log(dish);
                html+=`
                        <tr ng-repeat="new in newList ">
          <td><input type="checkbox" name="id[]" data-nid="${news.newId}" value="${news.newId}" />
            </td>
          <td class="newImg"><img src="../${news.newImg}" alt=""/></td>
          <td><textarea class="title" disabled>${news.newTitle}</textarea></td>
          <td style="width:20%"><textarea class="fname" disabled>${news.details}</textarea></td>
           <td>
           <select name="nType" id="" value="${news.nType}" disabled>
               <option value="0" >店内活动</option>
               <option value="1" >招聘信息</option>

           </select>

           </td>
           <td><input type="date" value="${news.relTime}" disabled/></td>
          <td style="width: 15%">
          <div class="button-group">
                            <a class="button border-green fix" >
                             <span class="icon-trash-o"></span>编辑 </a>
                             <a class="button bg-green update" >
                             <span class="icon-trash-o"></span>完成 </a>
                            <a class="button border-red" onclick="dele(${news.newId})" >
                             <span class="icon-trash-o"></span> 删除</a>
                             </div>
          </td>
        </tr>
                         `;
            });
            $("#all_new tbody").html(html);
            html='';
            for(var i=1;i<=new_pager;i++){
                if(i==pager){
                    html+=`<a  onclick="news(${i},'000')" class="current">${i}</a>`;
                }else{
                    html+=`<a  onclick="news(${i},'000')">${i}</a>`;
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
                news(pageNum);
            })
            $(".fix").click(function(){
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
                var newId=te[0].value;
                var newTitle=te[2].value;
                var details=te[3].value;
                var relTime=te[5].value;
                var nType=te[4].value;
                $.ajax({
                    url:"data/update_new.php",
                    data:{newId:newId,newTitle:newTitle,details:details,relTime:relTime,nType:nType},
                    success:function (data) {
                        if (data.msg == 'succ') {
                            news(1);
                            //$(".update").hide();
                            //$(".fix").show();
                        }
                    }
                });

            });
        }

    });
}
$(document).ready(function(){
    news(1);
});
//删除
function  dele(id){
    console.log(id);
    var newId=id;
    var aType=sessionStorage['aType'];
    if(aType==1){
        $.ajax({
            url:'data/delete_new.php',
            data:{newId:newId},
            success:function (data){
                if(data.msg=='succ'){
                    news(1);
                }

            }

        })
    }else{
        alert("您没有删除权限");
    }

}
$(document).ready(function(){

       var y=(new Date()).getFullYear() ;
       var m=(new Date()).getMonth()+1;
       var d=(new Date()).getDate();
        var date=y+'-'+m+'-'+d;
       $("input[name='relTime']").val(date);
       //console.log($("input[name='relTime']").val());
});