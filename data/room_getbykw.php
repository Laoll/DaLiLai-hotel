<?php
   header("Content-Type:application/json;charset=UTF-8");

   @$kw=$_REQUEST['kw'];
   if(empty($kw)){
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

   //SQL2:���ݹؼ��ֲ�ѯ
   $sql="select * from hotel_rooms where housetype  like '%$kw%' ";
   $result=mysqli_query($conn,$sql);

   while($result){
      $row=mysqli_fetch_assoc($result);
      if(!$row){
          break;
       }
      $output[]=$row;
   }
   echo json_encode($output);
?>