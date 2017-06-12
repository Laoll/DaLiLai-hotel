<?php
   header("Content-Type:application/json;charset=UTF-8");

   @$newId=$_REQUEST['newId'];
  if(empty($newId)){
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

   //SQL2:查找新闻的总数
   $sql="select COUNT(*) from hotel_news ";
   $result=mysqli_query($conn,$sql);
   $row = mysqli_fetch_assoc($result);
   $output['recordCount'] = intval($row['COUNT(*)']);//把字符串解析为整数

   //SQL2:根据id查询
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