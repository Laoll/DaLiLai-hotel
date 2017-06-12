<?php
/**根据客户端提交的页面编号，向客户端分页输出产品列表，以JSON格式：{ ... }**/
header('Content-Type: application/json;charset=UTF-8');

//接收客户端提交的数据
@$rid = $_REQUEST['rid'];

$output=[];

//连接数据库
include('0_config.php'); //包含指定文件的内容在当前位置
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1：设置编码方式
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);


$sql = "SELECT * FROM hotel_room_number where rid='$rid' and statu=0 ";
$result = mysqli_query($conn, $sql);

//读取所有的产品记录
$output['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);


//把分页对象编码为JSON字符串并输出
echo json_encode($output);
