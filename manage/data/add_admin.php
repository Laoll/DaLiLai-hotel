<?php
/**���տͻ����ύ��uname��fid���������Ϣ��������Ҫ�ı����أ�{"msg": "ok","uid":1,"cid":100,"pid":10,"count":4}**/
header('Content-Type: application/json;charset=UTF-8');

//���տͻ����ύ������
@$name = $_REQUEST['name'];
@$pwd = $_REQUEST['pwd'];
@$aType=$_REQUEST['aType'];
if( !$name  || !$pwd||!$aType){ //���ͻ���δ�ύ���������
	echo "{}";
	return;	//�˳���ǰPHPҳ���ִ��
}

/***��Ҫ��ͻ����������****/
$ouput = [];
/*********************************/

//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1�����ñ��뷽ʽ
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);


	$sql = "INSERT INTO admin VALUES(NULL, '$name','$pwd','$aType')";
	$result = mysqli_query($conn,$sql);

if($result){
	$output['msg']='succ';

}else {
	$output['msg']='err';
}

//�Ѷ������ΪJSON�ַ��������
echo json_encode($output);
