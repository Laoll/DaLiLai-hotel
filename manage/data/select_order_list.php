<?php
header('Content-Type: application/json;charset=UTF-8');

$oid = $_REQUEST['oid'];

//�������ݿ�
include('0_config.php'); //����ָ���ļ��������ڵ�ǰλ��
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
 $sql = "SELECT productId,type FROM hotel_order_detail WHERE oid=$oid" ;
 $result = mysqli_query($conn,$sql);
 $order = mysqli_fetch_all($result,MYSQLI_ASSOC);

$output=[];
$dish_list='';
$room_list='';
       foreach($order as $j=>$p){
            $type=$order[$j]['type'];
            $productId=$order[$j]['productId'];
             if($type==1){
                  $sql = "SELECT fid,fname,fprice FROM hotel_foods WHERE fid='$productId' ";
                  $result = mysqli_query($conn,$sql);
                  $list = mysqli_fetch_all($result,MYSQLI_ASSOC);//��ö�����Ӧ�Ĳ�Ʒ�б�
                  $dish_list[$j]=$list;
              }else if($type==2){
                  $sql="SELECT proPrice,mating ,rid,houseType FROM hotel_rooms WHERE rid='$productId'";
                  $result = mysqli_query($conn,$sql);
                  $list = mysqli_fetch_all($result,MYSQLI_ASSOC);//��ö�����Ӧ�Ĳ�Ʒ�б�
                  $room_list[$j]=$list;
                }

}
$output['dishList']=$dish_list;
$output['roomList']=$room_list;
//��JSON��ʽ��ͻ������
echo json_encode($output);