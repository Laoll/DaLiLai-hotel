/**
 * Created by Administrator on 2016/12/18.
 */
function rstatu(pager){
    $.ajax({
        url:"data/room_status.php",
        data:{pageNum:pager},
        success:function (data){
            var room_list=data.data;
            var room_pager=data.pageCount;
            console.log(data.data);
            var html='';
            setnav("客房管理");
            $.each(room_list,function(i,room){

                html+=`
                            <div  class="room_items " >
                           <i class="icon_status " data-statu="${room.statu}" >${room.statu==0?"空":(room.statu==1?"订":(room.statu==2?"住":"修"))}</i>
                          <h2 class="room_id">${room.doorId}</h2>
                        <p class="room_type">${room.hType}</p>
                         <p class="name"   ></p>
                        <!--<button class="btn_default btn-update" >修改</button>-->
                    </div >

                         `;
            });
            //console.log(html);
            $(".room_status").html(html);
            $(".icon_status").each(function(i,elem){
                var statu=$(this).html();
                var cname='';
                if(statu=='空'){
                    cname='empty';
                }else if(statu=='住'){
                    cname='booking';
                }else if(statu=='修'){
                    cname='service';
                }else if(statu=='订'){
                    cname='dirty';
                }
                $(this).parent().addClass(cname);
            })
            html='';
            for(var i=1;i<=room_pager;i++){
                if(i==pager){
                    html+=`<a  onclick=" rstatu(${i},'000')" class="current">${i}</a>`;
                }else{
                    html+=`<a  onclick=" rstatu(${i},'000')">${i}</a>`;
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
                rstatu(pageNum);
            })
        }

    });
}
     $(document).ready(function(){

         rstatu(1);
         });