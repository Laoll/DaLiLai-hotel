<?php
    $uname=$_REQUEST['uname'];
	$upwd=$_REQUEST['upwd'];
	$conn=mysqli_connect('localhost','root','','hotel');
	$sql='set names utf8';
	mysqli_query($conn,$sql);
	$sql="select * from hotel_user where uname='$uname' and upwd='$upwd' ";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$ouput=[];
	if($result===false){
	      $output['msg']="sqlerr";
	
	}else{
		if($row){
		  $output['msg']="succ";
		}else{
		    $output['msg']="err";
		}
	}
	 echo json_encode($output);
?>
