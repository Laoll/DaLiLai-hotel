<?php
    header('Content-Type:application/json;charset=UTF-8');
	@$uname=$_REQUEST['uname'];
	@$upwd=$_REQUEST['upwd'];
	@$uemail=$_REQUEST['uemail'];
	@$uphone=$_REQUEST['uphone'];
    if(!$uname){
	   return;
	}
	//测试代码
	 //?uname=ll&upwd=12345678&email=562553897@qq.com&uphone=18877826750
	// 连接数据库
	include('0_config.php');
	$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

	//执行sql语句
	$sql='set names utf8';
	mysqli_query($conn,$sql);
	$sql="insert into hotel_user values(null,'$uname','$upwd','$uphone','$uemail')";
	$result=mysqli_query($conn,$sql);
	if($result){
	     //执行成功
	     $output['msg']='succ';
	     $output['uid']=mysqli_insert_id($conn);
	}else{
	    //执行失败
	    $output['msg']='err';
         $output['uid']=$sql;
	}
	//把数据编码成JSON字符串
	echo json_encode($output);
  
?>