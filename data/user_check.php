<?php
	$data=$_REQUEST['data'];

	 // 连接数据库
    include('0_config.php');
    $conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

    //执行sql语句
    $sql='set names utf8';
    mysqli_query($conn,$sql);
    $sql="select * from hotel_user where uname='$data' or email='$data' or uphone='$data'";

    $result=mysqli_query($conn,$sql);
    //查看执行结果，向客户端进行输出
	$row = mysqli_fetch_assoc($result);
	
	if($row){	//查询结果集中有数据
		$msg="cunzai";
	}else {		//查询结果集中一行数据都没有
		$msg="bucunzai";
	}
   echo $msg;
