<?php
    header('Content-Type:application/json;charset=UTF-8');
	@$uname=$_REQUEST['uname'];
	@$upwd=$_REQUEST['upwd'];
	@$uemail=$_REQUEST['uemail'];
	@$uphone=$_REQUEST['uphone'];
    if(!$uname){
	   return;
	}
	//���Դ���
	 //?uname=ll&upwd=12345678&email=562553897@qq.com&uphone=18877826750
	// �������ݿ�
	include('0_config.php');
	$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

	//ִ��sql���
	$sql='set names utf8';
	mysqli_query($conn,$sql);
	$sql="insert into hotel_user values(null,'$uname','$upwd','$uphone','$uemail')";
	$result=mysqli_query($conn,$sql);
	if($result){
	     //ִ�гɹ�
	     $output['msg']='succ';
	     $output['uid']=mysqli_insert_id($conn);
	}else{
	    //ִ��ʧ��
	    $output['msg']='err';
         $output['uid']=$sql;
	}
	//�����ݱ����JSON�ַ���
	echo json_encode($output);
  
?>