<?php
/**���տͻ����ύ���û�������ͻ���������û��Ĺ��ﳵ����**/
header('Content-Type: application/json;charset=UTF-8');

$productId = $_REQUEST['productId'];
$count =$_REQUEST['count'];
$type=$_REQUEST['type'];
$uname=$_REQUEST['uname'];
$output=[];
//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1: ���ñ��뷽ʽ
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

//SQL2������uname��ѯuid
$sql = "SELECT uid FROM hotel_user WHERE uname='$uname'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$uid = intval($row['uid']);

//SQL3: �����û���Ų�ѯ���ﳵ���
$sql = "SELECT cid FROM hotel_cart WHERE userId='$uid'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$cid = intval($row['cid']);

//SQL4:���¹��ﳵ����
$sql="UPDATE hotel_cart_details SET count='$count' WHERE type='$type'  AND productId='$productId ' and cartId='$cid'";
$result = mysqli_query($conn,$sql);

if($result){
    $output['msg']="succ";
}else{
  $output['msg']="err";
}

echo json_encode($output);