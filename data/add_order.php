<?php
header('Content-Type: application/json;charset=UTF-8');


//���ղ�����ͻ����ύ����������
$orderNum = rand(1000000000,10000000000); //10λ�������
$orderName = $_REQUEST['orderName'];
$price = $_REQUEST['price'];
$phone=$_REQUEST['phone'];
$payment = $_REQUEST['payment'];
$ltime = $_REQUEST['ltime'];
$massage=$_REQUEST['massage'];
$orderTime = time()*1000;   //�������˵�ǰϵͳʱ��
$status = 1;    //�����ɵĶ���״̬����'�ȴ�����'
$uname = $_REQUEST['uname'];
$roomList=$_REQUEST['roomList'];
$foodList=$_REQUEST['foodList'];
$roomList = json_decode($roomList); //��JSON�ַ�������ΪPHP��������
$foodList = json_decode($foodList); //��JSON�ַ�������ΪPHP��������

include('0_config.php');
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1: ���ñ��뷽ʽ
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

//SQL2: �����û�����ѯ�û����
$sql = "SELECT uid FROM hotel_user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$uid = mysqli_fetch_assoc($result)['uid'];

//SQL3:�����û���Ų�ѯcid
$sql = "SELECT cid FROM hotel_cart WHERE userId='$uid'";
$result = mysqli_query($conn,$sql);
$cid = mysqli_fetch_assoc($result)['cid'];

//SQL4: �򶩵������һ�м�¼���õ������Ķ������
$sql = "INSERT INTO hotel_order VALUES(NULL,'$orderName','$phone','$ltime','$massage','$payment','$orderTime','$price','$status','$uid','$orderNum')";
$result = mysqli_query($conn,$sql);
$oid = mysqli_insert_id($conn);

//SQL5: ѭ��ִ�У��򶩵�������в����¼
foreach($roomList as $r){
   $productId = $r->productId;  //��ȡPHP��������ԣ�->
   $count = $r->count;
   $type = $r->type;
   $sql = "INSERT INTO hotel_order_detail VALUES(NULL,'$oid','$type','$count','$productId')";
   mysqli_query($conn,$sql);
   $sql="DELETE FROM hotel_cart_details  WHERE type='$type'  AND productId='$productId ' and cartId='$cid'";
   mysqli_query($conn,$sql);
 }
foreach($foodList as $f){
  $productId = $f->productId;  //��ȡPHP��������ԣ�->
  $count = $f->count;
  $type = $f->type;
  $sql = "INSERT INTO hotel_order_detail VALUES(NULL,'$oid','$type','$count','$productId')";
  mysqli_query($conn,$sql);
  $sql="DELETE FROM hotel_cart_details  WHERE type='$type'  AND productId='$productId ' and cartId='$cid'";
  mysqli_query($conn,$sql);
}
//��ѯ��������
  $sql="select COUNT(*) from hotel_cart_details where cartId='$cid'";
  $result=mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  $t=intval($row['COUNT(*)']);
  if(!$t){
    $sql="delete from hotel_cart where cid='$cid'";
    mysqli_query($conn,$sql);
  }
//����Ҫ������ͻ��˵�����
$output = [];
if($oid){       //ִ�гɹ�
    $output['msg'] = 'succ';
    $output['oid'] = $oid;
    $output['orderNum'] = $orderNum;
}else {         //ִ��ʧ��
    $output['msg'] = 'err';
}

//�����ݱ���ΪJSON�ַ���
echo json_encode($output);

?>