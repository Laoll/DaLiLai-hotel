<?php
   session_start();
   $code =$_REQUEST['code'];
   $code=strtolower($code);
   $output=[];
   if($code==strtolower($_SESSION["code"])){
      $output['msg']="succ";
   }else{
       $output['msg']="err";
   }
   echo json_encode($output);
?>