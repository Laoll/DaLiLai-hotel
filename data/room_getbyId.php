<?php
   header("Content-Type:application/json;charset=UTF-8");

   @$rid=$_REQUEST['rid'];
  if(empty($rid)){
     echo '[]';
     return;
  }
   $output=[];

   //�������ݿ�
   include('0_config.php');
   $conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);

   //SQL1���޸����ݵı��뷽ʽ
   $sql='set names utf8';
   mysqli_query($conn,$sql);

   //SQL2:����id��ѯ
   $sql="select * from hotel_rooms where rid='$rid'";
   $result=mysqli_query($conn,$sql);
   $row=mysqli_fetch_assoc($result);
      if(empty($row)){
          echo '[]';
       }else{
      $output[]=$row;
       echo json_encode($output);
     }

?>