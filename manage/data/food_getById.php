<?php
header('Content-Type: application/json;charset=UTF-8');

$fid = $_REQUEST['fid'];

//连接数据库
include('0_config.php'); //包含指定文件的内容在当前位置
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT * FROM hotel_foods WHERE fid='$fid'";
$result = mysqli_query($conn,$sql);

//读取查询到的一行——关联数组
$food = mysqli_fetch_assoc($result);

//以JSON格式向客户端输出
echo json_encode($food);