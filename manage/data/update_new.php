<?php
/**���տͻ����ύ���û�������ͻ���������û��Ĺ��ﳵ����**/
header('Content-Type: application/json;charset=UTF-8');

$newId = $_REQUEST['newId'];
$newTitle=$_REQUEST['newTitle'];
$details=$_REQUEST['details'];
$relTime=$_REQUEST['relTime'];
$nType=$_REQUEST['nType'];
$output=[];
//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1: ���ñ��뷽ʽ
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);


//SQL4:
$sql="UPDATE hotel_news SET newTitle='$newTitle', details='$details', relTime='$relTime',nType='$nType' where newId='$newId'";
$result = mysqli_query($conn,$sql);

if($result){
    $output['msg']="succ";
}else{
  $output['msg']="err";
}

echo json_encode($output);