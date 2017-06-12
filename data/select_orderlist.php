<?php
   header('Content-Type: application/json;charset=UTF-8');

   $uname=$_REQUEST['uname'];

   //uname=LQH
   include('0_config.php');
   $conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

   //SQL1: 设置编码方式
   $sql = "SET NAMES UTF8";
   mysqli_query($conn,$sql);

   //SQL2: 根据用户名查询用户编号
   $sql = "SELECT uid FROM hotel_user WHERE uname='$uname'";
   $result = mysqli_query($conn,$sql);
   $uid = mysqli_fetch_assoc($result)['uid'];

   //SQL3：根据用户编号查询订单
   $sql="SELECT *  FROM hotel_order where uid='$uid' order by orderTime desc";
   //echo $sql;
   $result =mysqli_query($conn,$sql);
   $orderList = mysqli_fetch_all($result,MYSQLI_ASSOC);
   $f=1;
  //遍历每个订单对象，添加一个新的属性:productList
  foreach($orderList as $i=>$o){
    $oid = $orderList[$i]['oid'];
     //SQL4: 根据用户名查询用户编号
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
                 $list = mysqli_fetch_all($result,MYSQLI_ASSOC);//查得订单对应的产品列表
                 $items[$j]=$list;
                 //echo json_encode($list);
       }
      //echo json_encode($items);
      //echo "<hr>";
       $orderList[$i]['product'] = $items;
  }
 echo json_encode($orderList);
?>