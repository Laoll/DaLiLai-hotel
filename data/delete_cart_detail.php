<?php
/**���տͻ����ύ���û�������ͻ���������û��Ĺ��ﳵ����**/
header('Content-Type: application/json;charset=UTF-8');
$uname=$_REQUEST['uname'];
$productId = $_REQUEST['productId'];
$type=$_REQUEST['type'];
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

//SQL2:ɾ�����ﳵ����
$sql="DELETE FROM hotel_cart_details  WHERE type='$type'  AND productId='$productId ' and cartId='$cid'";
$result = mysqli_query($conn,$sql);

//��ѯ��������
  $sql="select COUNT(*) from hotel_cart_details where cartId='$cid'";
  $result2=mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result2);
  $t=intval($row['COUNT(*)']);
  if(!$t){
    $sql="delete from hotel_cart where cid='$cid'";
    mysqli_query($conn,$sql);
  }
if($result){
    $output['msg']="succ";
}else{
  $output['msg']="err";
}

echo json_encode($output);