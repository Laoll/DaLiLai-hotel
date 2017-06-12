<?php
    $name=$_REQUEST['name'];
	$pwd=$_REQUEST['pwd'];
	$conn=mysqli_connect('localhost','root','','hotel');
	$sql='set names utf8';
	mysqli_query($conn,$sql);
	$sql="select * from admin where name='$name' and pwd='$pwd' ";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);

    $result=mysqli_query($conn,$sql);
    $atype = mysqli_fetch_assoc($result)['aType'];
	$ouput=[];
	if($result===false){
	      $output['msg']="sqlerr";

	}else{
		if($row){
		  $output['msg']="succ";
		  $output['type']=$atype;
		}else{
		    $output['msg']="err";
		}
	}
	 echo json_encode($output);
?>
