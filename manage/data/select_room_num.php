<?php
   header("Content-Type:application/json;charset=UTF-8");

   @$rid=$_REQUEST['rid'];
  if(empty($rid)){
     echo '[]';
     return;
  }
   $output=[];

   //连接数据库
   include('0_config.php');
   $conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);

   //SQL1：修改数据的编码方式
   $sql='set names utf8';
   mysqli_query($conn,$sql);

   //SQL2:根据id查询
   $sql="select * from hotel_room_number where rid='$rid'";
   $result=mysqli_query($conn,$sql);
   $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
      if(empty($row)){
          echo '[]';
       }else{
      $output[]=$row;
       echo json_encode($output);
     }

?>