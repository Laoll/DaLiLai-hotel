<?php
/**���տͻ����ύ���û�������ͻ���������û��Ĺ��ﳵ����**/
header('Content-Type: application/json;charset=UTF-8');
$oid=$_REQUEST['oid'];
$output=[];
//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1: ���ñ��뷽ʽ
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);


//SQL2:ɾ����������
$sql="DELETE FROM hotel_order WHERE oid='$oid'";
$result = mysqli_query($conn,$sql);

//
$sql="DELETE FROM hotel_order_detail WHERE oid='$oid'";
$result = mysqli_query($conn,$sql);

if($result){
    $output['msg']="succ";
}else{
  $output['msg']="err";
}

echo json_encode($output);