<?php
   header('Content-Type: application/json;charset=UTF-8');

//   $uname=$_REQUEST['uname'];
    $type=$_REQUEST['type'];
   //uname=LQH
   include('0_config.php');
   $conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

   //SQL1: ���ñ��뷽ʽ
   $sql = "SET NAMES UTF8";
   mysqli_query($conn,$sql);

   //SQL2: �����û�����ѯ�û����
  $sql = " SELECT SUM(count) as count,productId FROM hotel_order_detail where type='$type' GROUP BY productId ";
  $result = mysqli_query($conn,$sql);
  $list = mysqli_fetch_all($result,MYSQLI_ASSOC);


 echo json_encode($list);
?>