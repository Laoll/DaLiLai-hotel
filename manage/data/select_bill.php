<?php
   header('Content-Type: application/json;charset=UTF-8');

//   $uname=$_REQUEST['uname'];
    $type=$_REQUEST['type'];
   //uname=LQH
   include('0_config.php');
   $conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);
   $output=[];

   //SQL1: 设置编码方式
   $sql = "SET NAMES UTF8";
   mysqli_query($conn,$sql);

   //SQL2: 根据用户名查询用户编号
  $sql = " SELECT SUM(count) as count,productId FROM hotel_order_detail where type='$type' GROUP BY productId ";
  $result = mysqli_query($conn,$sql);
  $list = mysqli_fetch_all($result,MYSQLI_ASSOC);

  $item='';
   foreach($list as $j=>$d){
           $productId=$list[$j]['productId'];
           $count=$list[$j]['count'];
           if ($type==2){
                 $sql = " SELECT houseType FROM hotel_rooms where rid='$productId' ";
                 $proList = mysqli_query($conn,$sql);
                 $detail = mysqli_fetch_all($proList,MYSQLI_ASSOC);
                 $name=$detail[0]['houseType'];
            }else{
                 $sql = " SELECT fname FROM hotel_foods where fid='$productId' ";
                 $proList = mysqli_query($conn,$sql);
                 $detail = mysqli_fetch_all($proList,MYSQLI_ASSOC);
                 $name=$detail[0]['fname'];
            }
            $item['productId']=$productId;
            $item['count']=$count;
            $item['name']=$name;
            $output[$j]=$item;
     }
   echo json_encode($output);

// echo json_encode($list);
?>