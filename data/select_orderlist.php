<?php
   header('Content-Type: application/json;charset=UTF-8');

   $uname=$_REQUEST['uname'];

   //uname=LQH
   include('0_config.php');
   $conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

   //SQL1: ���ñ��뷽ʽ
   $sql = "SET NAMES UTF8";
   mysqli_query($conn,$sql);

   //SQL2: �����û�����ѯ�û����
   $sql = "SELECT uid FROM hotel_user WHERE uname='$uname'";
   $result = mysqli_query($conn,$sql);
   $uid = mysqli_fetch_assoc($result)['uid'];

   //SQL3�������û���Ų�ѯ����
   $sql="SELECT *  FROM hotel_order where uid='$uid' order by orderTime desc";
   //echo $sql;
   $result =mysqli_query($conn,$sql);
   $orderList = mysqli_fetch_all($result,MYSQLI_ASSOC);
   $f=1;
  //����ÿ�������������һ���µ�����:productList
  foreach($orderList as $i=>$o){
    $oid = $orderList[$i]['oid'];
     //SQL4: �����û�����ѯ�û����
       $sql = "SELECT productId,type FROM hotel_order_detail WHERE oid=$oid";
       $result = mysqli_query($conn,$sql);
       $order = mysqli_fetch_all($result,MYSQLI_ASSOC);
       //echo json_encode($order);
       $items='';
       foreach($order as $j=>$d){
            //$d=$order[$i];
           // echo json_encode($d);
            $type=$order[$j]['type'];
            $productId=$order[$j]['productId'];
             if($type==1){
                  $sql = "SELECT fid as id ,fname as name,fimg as img FROM hotel_foods WHERE fid='$productId' ";
              }else if($type==2){
                  $sql="SELECT rid as id ,houseType as name,rPic as img FROM hotel_rooms WHERE rid='$productId' ";
                }
                 $result = mysqli_query($conn,$sql);
                 $list = mysqli_fetch_all($result,MYSQLI_ASSOC);//��ö�����Ӧ�Ĳ�Ʒ�б�
                 $items[$j]=$list;
                 //echo json_encode($list);
       }
      //echo json_encode($items);
      //echo "<hr>";
       $orderList[$i]['product'] = $items;
  }
 echo json_encode($orderList);
?>