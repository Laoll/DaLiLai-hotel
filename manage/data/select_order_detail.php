<?php
header('Content-Type: application/json;charset=UTF-8');

$oid = $_REQUEST['oid'];

//连接数据库
include('0_config.php'); //包含指定文件的内容在当前位置
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
 $sql = "SELECT productId,type FROM hotel_order_detail WHERE oid=$oid";
 $result = mysqli_query($conn,$sql);
 $order = mysqli_fetch_all($result,MYSQLI_ASSOC);

$output=[];

       foreach($order as $j=>$d){
            //$d=$order[$i];
           // echo json_encode($d);
            $type=$order[$j]['type'];
            $productId=$order[$j]['productId'];
             if($type==1){
                  $sql = "SELECT fid as id ,fname as name,fimg as img FROM hotel_foods WHERE fid='$productId' ";
              }else if($type==2){
                  $sql="SELECT rid as FROM hotel_rooms WHERE rid='$productId' ";
                }
                 $result = mysqli_query($conn,$sql);
                 $list = mysqli_fetch_all($result,MYSQLI_ASSOC);//查得订单对应的产品列表
                 $items[$j]=$list;

//以JSON格式向客户端输出
echo json_encode($food);