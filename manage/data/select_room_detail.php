<?php
/**���ݿͻ����ύ��ҳ���ţ���ͻ��˷�ҳ�����Ʒ�б���JSON��ʽ��{ ... }**/
header('Content-Type: application/json;charset=UTF-8');

//���տͻ����ύ������
@$rid = $_REQUEST['rid'];

$output=[];

//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1�����ñ��뷽ʽ
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);


$sql = "SELECT * FROM hotel_room_number where rid='$rid' and statu=0 ";
$result = mysqli_query($conn, $sql);

//��ȡ���еĲ�Ʒ��¼
$output['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);


//�ѷ�ҳ�������ΪJSON�ַ��������
echo json_encode($output);
