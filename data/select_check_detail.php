<?php
/**接收客户端提交的用户名，向客户端输出该用户的购物车详情**/
header('Content-Type: application/json;charset=UTF-8');

$uname = $_REQUEST['uname'];
$output=[];
//连接数据库
include('0_config.php'); //包含指定文件的内容在当前位置
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1: 设置编码方式
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

//SQL2：根据用户名查询用户编号，再根据用户编号查询出购物车编号
$sql = "SELECT cid FROM hotel_cart WHERE userId=( SELECT uid FROM hotel_user WHERE uname='$uname' )";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
$cid = $row['cid'];

//SQL3：根据购物车编号查询出其中的产品
$sql = "SELECT productId,count,fname,fprice,fimg,checked,hotel_cart_details.type as type FROM hotel_cart_details,hotel_foods WHERE cartId='$cid'  AND  productId=fid  and hotel_cart_details.type=1 and cartId='$cid' and checked=1";
$result = mysqli_query($conn,$sql);
if($result){
$list = mysqli_fetch_all($result, MYSQLI_ASSOC);
$output['food']=$list;
}else{
$output['food']="";
}

$sql = "SELECT productId,count,houseType,proPrice,rPic,checked,hotel_cart_details.type as type FROM hotel_cart_details,hotel_rooms WHERE cartId='$cid'  AND  productId=rid and hotel_cart_details.type=2 and cartId='$cid'AND checked=1";
$result = mysqli_query($conn,$sql);

if($result){
$roomList = mysqli_fetch_all($result, MYSQLI_ASSOC);
$output['room']=$roomList;
}else{
$output['room']="";
}

echo json_encode($output);
