<?php
/**���տͻ����ύ��uname��fid���������Ϣ��������Ҫ�ı����أ�{"msg": "ok","uid":1,"cid":100,"pid":10,"count":4}**/
header('Content-Type: application/json;charset=UTF-8');

//���տͻ����ύ������
@$uname = $_REQUEST['uname'];
@$pid = $_REQUEST['pid'];
@$count=$_REQUEST['count'];
@$type=$_REQUEST['type'];
if( !$uname || !$pid){ //���ͻ���δ�ύ���������
	echo "{}";
	return;	//�˳���ǰPHPҳ���ִ��
}

/***��Ҫ��ͻ����������****/
$ouput = [
	'msg'=>null,
	'uid'=>0,
	'cid'=>0,
	'pid'=>intval($pid),
	'count'=>0
];
/*********************************/

//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1�����ñ��뷽ʽ
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

//SQL2������uname��ѯuid
$sql = "SELECT uid FROM hotel_user WHERE uname='$uname'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$uid = intval($row['uid']);
$output['uid'] = $uid;

//SQL3: �����û���Ų�ѯ���ﳵ���
$sql = "SELECT cid FROM hotel_cart WHERE userId='$uid'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
if($row){  //��Ӧ�û����й��ﳵ
	$cid = $row['cid'];
}else {	//�����û�û�й��ﳵ
	//SQL4�����ﳵ���в���һ�м�¼
	$sql = "INSERT INTO hotel_cart VALUES(NULL, '$uid')";
	$result = mysqli_query($conn,$sql);
	$cid = mysqli_insert_id($conn);
}
$cid = intval($cid);
$output['cid'] = $cid;
//SQL5�����ݹ��ﳵ��źͲ�Ʒ��ţ���ѯ�Ƿ��Ѿ�������ò�Ʒ
$sql = "SELECT * FROM hotel_cart_details WHERE cartId='$cid' AND productId='$pid' and type='$type'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row){ //�Ѿ����������Ʒ
	$tcount = $row['count'];
	$count+=$tcount;
	//SQL6���޸Ĺ�������
	$sql = "UPDATE hotel_cart_details SET count='$count' WHERE cartId='$cid' AND productId='$pid' ";
	mysqli_query($conn,$sql);

}else {  //û�й��������Ʒ
	//SQL7: ����һ�й����¼
	$sql = "INSERT INTO hotel_cart_details VALUES(NULL,'$cid','$pid','$count','$type',0)";
	mysqli_query($conn,$sql);

}
$output['count']=$count;
//�Ѷ������ΪJSON�ַ��������
echo json_encode($output);
