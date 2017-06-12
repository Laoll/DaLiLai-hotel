/**
 * Created by Administrator on 2016/12/19.
 */
/**
 * Created by Administrator on 2016/12/19.
 */

/**
 * Created by Administrator on 2016/12/19.
 */
function wait(pager,status){
    $.ajax({
        url:"data/order_select.php",
        data:{pageNum:pager,status:status},
        success:function (data){
            console.log(data);
            var order_list=data.data;
            var order_pager=data.pageCount;
            var wait_count=data.recordCount;
            localStorage['wait']=wait_count;
            var html='';
            setnav("订单管理4");
            $.each(order_list,function(i,order){
                //console.log(dish);
                html+=`
                        <tr >
                            <td><input type="checkbox" name="id[]" data-nid="{{order.oid}}" value="1" />
                            ${order.oid}</td>
                            <td class="newImg">${order.orderName}</td>
                            <td>${order.uid}</td>
                            <td class="newImg">${order.phone}</td>
                            <td>${order.orderNum}</td>
                            <td>${order.price}</td>
                            <td class="orderTime">${order.orderTime}</td>
                            <td>${order.status==1?"未处理":(order.status==2?"订单成功":"订单失败")}
                                 <span class="text-blue">(${order.payment==1?"店内支付":(order.payment==2?'支付宝':'银行卡支付')})</span>
                            </td>
                            <td><div class="button-group">
                             <a class="button border-green" data-did="${order.oid}" href="javascript:dispose(${order.oid},'${order.orderName}','${order.price}')">处理订单</a>
                             <!--<a class="button border-green" data-did="${order.oid}" href="save_order.html">处理订单</a>-->
                                <a class="button border-red" href="javascript:void(0)" onclick="return del(${order.oid})"><span class="icon-trash-o"></span> 删除</a>
                            </div></td>
                            </tr>
                         `;
            });
            $("#order_wait tbody").html(html);
            if(order_pager==1){
                $("tfoot").hide();
            }
            html='';
            for(var i=1;i<order_pager;i++){
                if(i==1){
                    html+=`<a  onclick="news(${i})" class="current">${i}</a>`;
                }else{
                    html+=`<a  onclick="news(${i})">${i}</a>`;
                }

            }
            $(".page").html(html);
            $(".orderTime").each(function(i,elem){
                console.log("a");
                var time=$(this).html();
                time=parseInt(time);
                var str= dateFormat(time);
                console.log(str);
                $(this).html(str);
            });
        }

    });
}
function dateFormat(arg){
    var t=new Date(arg);
    var year= t.getFullYear();
    var month= t.getMonth()+1;
    var day= t.getDate();
    var hours= t.getHours();
    hours<10&&(hours="0"+hours);
    var minute= t.getMinutes();
    minute<10&&(minute="0"+minute);
    //var s= t.getMinutes();
    //console.log(year+"-"+month+"-"+day+" "+hours+":"+minute);
    return year+"-"+month+"-"+day+" "+hours+":"+minute;
}
$(document).ready(function(){
    wait(1,1);
    console.log($(".orderTime"));

});
function dispose(oid,name,price) {
    //$(".malog").show();
    $("#name").val(name);
    sessionStorage['oid']=oid;
    sessionStorage['orderName']=name;
    sessionStorage['price']=price;
    location.href='save_order.html';
}



