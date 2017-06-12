<?php
    include('0_config.php');
    $conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

    //SQL1：设置编码方式
    $sql = "SET NAMES UTF8";
    mysqli_query($conn, $sql);

    @$fname = $_REQUEST['fname'];
    @$fintr = $_REQUEST['fintr'];
    @$fprice=$_REQUEST['fprice'];
    @$fcount=$_REQUEST['fcount'];
    @$lis=$_REQUEST['type'];
    $_file=$_FILES['fimg'];
    $name=$_file['name'];
    $size=$_file['size'];
    $type=substr($name,-3,3);//获取后缀名
    $newname=date("ymd_His")."-".rand(10,99).".".$type;//给文件命新名
    $path=$_SERVER['DOCUMENT_ROOT']."/pro/last/dll/images/meal/food/".$newname;
	if(!preg_match("/jpg|png|gif$/i",$type)){
		echo "<script>alert('对不起，你上传的文件类型不符合要求');window.location='../index.html';</script>";
		exit;
	}else if($size==0||$size>2000000){
		echo "<script>alert('对不起，你上传的文件大小为0或超过2000kb');window.location='../add_dish.html';</script>";
		exit;
	}else{
		move_uploaded_file($_file['tmp_name'],$path);//专用的上传函数
	}
	echo "<script>alert('上传文件图片成功');</script>";
	$_src="images/meal/food/".$newname;

	$sql="insert into hotel_foods(fname,fintr,fprice,fcount,type,fimg) values('$fname','$fintr','$fprice','$fcount','$lis','$_src')";
	$query=mysqli_query($conn,$sql);
	if($query==true){
		echo "<script>alert('添加成功');window.location='../dish.html';</script>";
	}else{
		echo "<script>alert('添加失败');window.location='../add_dish.html';</script>";
	}
	?>