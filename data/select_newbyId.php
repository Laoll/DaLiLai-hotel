<?php
   header("Content-Type:application/json;charset=UTF-8");

   @$newId=$_REQUEST['newId'];
  if(empty($newId)){
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

   //SQL2:�������ŵ�����
   $sql="select COUNT(*) from hotel_news ";
   $result=mysqli_query($conn,$sql);
   $row = mysqli_fetch_assoc($result);
   $output['recordCount'] = intval($row['COUNT(*)']);//���ַ�������Ϊ����

   //SQL2:����id��ѯ
   $sql="select * from hotel_news where newId='$newId'";
   $result=mysqli_query($conn,$sql);
   $row=mysqli_fetch_assoc($result);
      if(empty($row)){
          echo '[]';
       }else{
      $output['news']=$row;
       echo json_encode($output);
     }

?>