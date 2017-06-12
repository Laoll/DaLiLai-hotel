<?php
header('Content-Type: application/json;charset=UTF-8');


//接收并处理客户端提交的请求数据
$orderNum = rand(1000000000,10000000000); //10位的随机数
$orderName = $_REQUEST['orderName'];
$price = $_REQUEST['price'];
$phone=$_REQUEST['phone'];
$payment = $_REQUEST['payment'];
$ltime = $_REQUEST['ltime'];
$massage=$_REQUEST['massage'];
$orderTime = time()*1000;   //服务器端当前系统时间
$status = 1;    //刚生成的订单状态都是'等待付款'
$uname = $_REQUEST['uname'];
$roomList=$_REQUEST['roomList'];
$foodList=$_REQUEST['foodList'];
$roomList = json_decode($roomList); //把JSON字符串解码为PHP对象数组
$foodList = json_decode($foodList); //把JSON字符串解码为PHP对象数组

include('0_config.php');
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1: 设置编码方式
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

//SQL2: 根据用户名查询用户编号
$sql = "SELECT uid FROM hotel_user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$uid = mysqli_fetch_assoc($result)['uid'];

//SQL3:根据用户编号查询cid
$sql = "SELECT cid FROM hotel_cart WHERE userId='$uid'";
$result = mysqli_query($conn,$sql);
$cid = mysqli_fetch_assoc($result)['cid'];

//SQL4: 向订单表插入一行记录，得到自增的订单编号
$sql = "INSERT INTO hotel_order VALUES(NULL,'$orderName','$phone','$ltime','$massage','$payment','$orderTime','$price','$status','$uid','$orderNum')";
$result = mysqli_query($conn,$sql);
$oid = mysqli_insert_id($conn);

//SQL5: 循环执行：向订单详情表中插入记录
foreach($roomList as $r){
   $productId = $r->productId;  //获取PHP对象的属性：->
   $count = $r->count;
   $type = $r->type;
   $sql = "INSERT INTO hotel_order_detail VALUES(NULL,'$oid','$type','$count','$productId')";
   mysqli_query($conn,$sql);
   $sql="DELETE FROM hotel_cart_details  WHERE type='$type'  AND productId='$productId ' and cartId='$cid'";
   mysqli_query($conn,$sql);
 }
foreach($foodList as $f){
  $productId = $f->productId;  //获取PHP对象的属性：->
  $count = $f->count;
  $type = $f->type;
  $sql = "INSERT INTO hotel_order_detail VALUES(NULL,'$oid','$type','$count','$productId')";
  mysqli_query($conn,$sql);
  $sql="DELETE FROM hotel_cart_details  WHERE type='$type'  AND productId='$productId ' and cartId='$cid'";
  mysqli_query($conn,$sql);
}
//查询订单详情
  $sql="select COUNT(*) from hotel_cart_details where cartId='$cid'";
  $result=mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  $t=intval($row['COUNT(*)']);
  if(!$t){
    $sql="delete from hotel_cart where cid='$cid'";
    mysqli_query($conn,$sql);
  }
//创建要输出给客户端的数据
$output = [];
if($oid){       //执行成功
    $output['msg'] = 'succ';
    $output['oid'] = $oid;
    $output['orderNum'] = $orderNum;
}else {         //执行失败
    $output['msg'] = 'err';
}

//把数据编码为JSON字符串
echo json_encode($output);

?>