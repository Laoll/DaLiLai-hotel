<?php
	$data=$_REQUEST['data'];

	 // �������ݿ�
    include('0_config.php');
    $conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

    //ִ��sql���
    $sql='set names utf8';
    mysqli_query($conn,$sql);
    $sql="select * from hotel_user where uname='$data' or email='$data' or uphone='$data'";

    $result=mysqli_query($conn,$sql);
    //�鿴ִ�н������ͻ��˽������
	$row = mysqli_fetch_assoc($result);
	
	if($row){	//��ѯ�������������
		$msg="cunzai";
	}else {		//��ѯ�������һ�����ݶ�û��
		$msg="bucunzai";
	}
   echo $msg;
