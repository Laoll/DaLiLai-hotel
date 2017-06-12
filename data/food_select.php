<?php
/**根据客户端提交的页面编号，向客户端分页输出产品列表，以JSON格式：{ ... }**/
header('Content-Type: application/json;charset=UTF-8');

//接收客户端提交的数据
@$pageNum = $_REQUEST['pageNum'];
@$type=$_REQUEST['type'];
/***将要向客户端输出的分页对象****/
$pager = [
	'recordCount'=>0,	//总记录数
	'pageSize'=>12,		//页面大小
	'pageCount'=>0,		//总页数
	'pageNum'=>intval($pageNum),//当前页号
	'data'=>null
];
/*********************************/

//连接数据库
include('0_config.php'); //包含指定文件的内容在当前位置
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1：设置编码方式
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

//SQL2：获取总记录数，并计算总页数
if($type=='000'){
   $sql = "SELECT COUNT(*) FROM hotel_foods ";
}else{
  $sql = "SELECT COUNT(*) FROM hotel_foods where type='$type'";
}
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
$pager['recordCount'] = intval($row['COUNT(*)']);//把字符串解析为整数
$pager['pageCount'] = ceil(($pager['recordCount'])/($pager['pageSize']));  //计算总页数

//SQL3：获取当前指定页中的记录
$start = ($pager['pageNum']-1)*$pager['pageSize']; //从哪一行开始读取记录
$count = $pager['pageSize']; //读取多少行

if($type=='000'){
   $sql = "SELECT * FROM hotel_foods LIMIT $start,$count  ";
}else{
   $sql = "SELECT * FROM hotel_foods where type='$type' LIMIT $start,$count  ";
}
$result = mysqli_query($conn, $sql);

//读取所有的产品记录
$pager['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);


//把分页对象编码为JSON字符串并输出
echo json_encode($pager);
