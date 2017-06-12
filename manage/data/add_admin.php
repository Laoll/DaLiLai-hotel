<?php
/**接收客户端提交的uname和fid，把相关信息保存入需要的表，返回：{"msg": "ok","uid":1,"cid":100,"pid":10,"count":4}**/
header('Content-Type: application/json;charset=UTF-8');

//接收客户端提交的数据
@$name = $_REQUEST['name'];
@$pwd = $_REQUEST['pwd'];
@$aType=$_REQUEST['aType'];
if( !$name  || !$pwd||!$aType){ //若客户端未提交必需的数据
	echo "{}";
	return;	//退出当前PHP页面的执行
}

/***将要向客户端输出对象****/
$ouput = [];
/*********************************/

//连接数据库
include('0_config.php'); //包含指定文件的内容在当前位置
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//SQL1：设置编码方式
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);


	$sql = "INSERT INTO admin VALUES(NULL, '$name','$pwd','$aType')";
	$result = mysqli_query($conn,$sql);

if($result){
	$output['msg']='succ';

}else {
	$output['msg']='err';
}

//把对象编码为JSON字符串并输出
echo json_encode($output);
