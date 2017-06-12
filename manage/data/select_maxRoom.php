<?php
   header('Content-Type: application/json;charset=UTF-8');

//   $uname=$_REQUEST['uname'];
    $type=$_REQUEST['type'];
   //uname=LQH
   include('0_config.php');
   $conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

   //SQL1: 设置编码方式
   $sql = "SET NAMES UTF8";
   mysqli_query($conn,$sql);

   //SQL2: 根据用户名查询用户编号
  $sql = " SELECT SUM(count) as count,productId FROM hotel_order_detail where type='$type' GROUP BY productId ";
  $result = mysqli_query($conn,$sql);
  $list = mysqli_fetch_all($result,MYSQLI_ASSOC);


 echo json_encode($list);
?>