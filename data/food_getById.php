<?php
header('Content-Type: application/json;charset=UTF-8');

$fid = $_REQUEST['fid'];

//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT * FROM hotel_foods WHERE fid='$fid'";
$result = mysqli_query($conn,$sql);

//��ȡ��ѯ����һ�С�����������
$food = mysqli_fetch_assoc($result);

//��JSON��ʽ��ͻ������
echo json_encode($food);