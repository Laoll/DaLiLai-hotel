<?php
header('Content-Type: application/json;charset=UTF-8');

$oid = $_REQUEST['oid'];

//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
 $sql = "SELECT productId,type FROM hotel_order_detail WHERE oid=$oid";
 $result = mysqli_query($conn,$sql);
 $order = mysqli_fetch_all($result,MYSQLI_ASSOC);

$output=[];

       foreach($order as $j=>$d){
            //$d=$order[$i];
           // echo json_encode($d);
            $type=$order[$j]['type'];
            $productId=$order[$j]['productId'];
             if($type==1){
                  $sql = "SELECT fid as id ,fname as name,fimg as img FROM hotel_foods WHERE fid='$productId' ";
              }else if($type==2){
                  $sql="SELECT rid as FROM hotel_rooms WHERE rid='$productId' ";
                }
                 $result = mysqli_query($conn,$sql);
                 $list = mysqli_fetch_all($result,MYSQLI_ASSOC);//��ö�����Ӧ�Ĳ�Ʒ�б�
                 $items[$j]=$list;

//��JSON��ʽ��ͻ������
echo json_encode($food);