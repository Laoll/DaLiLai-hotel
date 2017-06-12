<?php
/**���ݿͻ����ύ��ҳ���ţ���ͻ��˷�ҳ�����Ʒ�б���JSON��ʽ��{ ... }**/
header('Content-Type: application/json;charset=UTF-8');

//���տͻ����ύ������
@$pageNum = $_REQUEST['pageNum'];

/***��Ҫ��ͻ�������ķ�ҳ����****/
$pager = [
	'recordCount'=>0,	//�ܼ�¼��
	'pageSize'=>6,		//ҳ���С
	'pageCount'=>0,		//��ҳ��
	'pageNum'=>intval($pageNum),//��ǰҳ��
	'data'=>null
];
/*********************************/

//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1�����ñ��뷽ʽ
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

//SQL2����ȡ�ܼ�¼������������ҳ��
$sql = "SELECT COUNT(*) FROM hotel_news";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
$pager['recordCount'] = intval($row['COUNT(*)']);//���ַ�������Ϊ����
$pager['pageCount'] = ceil(($pager['recordCount'])/($pager['pageSize']));  //������ҳ��

//SQL3����ȡ��ǰָ��ҳ�еļ�¼
$start = ($pager['pageNum']-1)*$pager['pageSize']; //����һ�п�ʼ��ȡ��¼
$count = $pager['pageSize']; //��ȡ������
$sql = "SELECT * FROM hotel_news LIMIT $start,$count";
$result = mysqli_query($conn, $sql);

//��ȡ���еĲ�Ʒ��¼
$pager['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);


//�ѷ�ҳ�������ΪJSON�ַ��������
echo json_encode($pager);
