<?php
/**接收客户端提交的uname和fid，把相关信息保存入需要的表，返回：{"msg": "ok","uid":1,"cid":100,"pid":10,"count":4}**/
header('Content-Type: application/json;charset=UTF-8');

//接收客户端提交的数据
@$uname = $_REQUEST['uname'];
@$pid = $_REQUEST['pid'];
@$count=$_REQUEST['count'];
@$type=$_REQUEST['type'];
if( !$uname || !$pid){ //若客户端未提交必需的数据
	echo "{}";
	return;	//退出当前PHP页面的执行
}

/***将要向客户端输出对象****/
$ouput = [
	'msg'=>null,
	'uid'=>0,
	'cid'=>0,
	'pid'=>intval($pid),
	'count'=>0
];
/*********************************/

//连接数据库
include('0_config.php'); //包含指定文件的内容在当前位置
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1：设置编码方式
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

//SQL2：根据uname查询uid
$sql = "SELECT uid FROM hotel_user WHERE uname='$uname'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$uid = intval($row['uid']);
$output['uid'] = $uid;

//SQL3: 根据用户编号查询购物车编号
$sql = "SELECT cid FROM hotel_cart WHERE userId='$uid'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
if($row){  //对应用户已有购物车
	$cid = $row['cid'];
}else {	//对用用户没有购物车
	//SQL4：购物车表中插入一行记录
	$sql = "INSERT INTO hotel_cart VALUES(NULL, '$uid')";
	$result = mysqli_query($conn,$sql);
	$cid = mysqli_insert_id($conn);
}
$cid = intval($cid);
$output['cid'] = $cid;
//SQL5：根据购物车编号和产品编号，查询是否已经购买过该产品
$sql = "SELECT * FROM hotel_cart_details WHERE cartId='$cid' AND productId='$pid' and type='$type'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row){ //已经购买过该商品
	$tcount = $row['count'];
	$count+=$tcount;
	//SQL6：修改购买数量
	$sql = "UPDATE hotel_cart_details SET count='$count' WHERE cartId='$cid' AND productId='$pid' ";
	mysqli_query($conn,$sql);

}else {  //没有购买过该商品
	//SQL7: 插入一行购买记录
	$sql = "INSERT INTO hotel_cart_details VALUES(NULL,'$cid','$pid','$count','$type',0)";
	mysqli_query($conn,$sql);

}
$output['count']=$count;
//把对象编码为JSON字符串并输出
echo json_encode($output);
