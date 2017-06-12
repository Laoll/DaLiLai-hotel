<?php
session_start();
$width = 100;
$height = 34;
//1. 建立建立图片
$image = 
imagecreatetruecolor($width, $height);
//2. 填充背景色
//设置颜色
//imagecolorallocate(图片资源, 
//	$red, $green, $blue);
// 0~255
$white = 
imagecolorallocate
($image, 255, 255, 255);
//imagefill(图片, 开始的x坐标, $y, 颜色);
imagefill($image, 0, 0, $white);

//3. 加上干扰点
for($i=0;$i<100;$i++){
	//mt_rand($start, $end)产生一个随机数字
$color = imagecolorallocate(
 $image, mt_rand(200, 255),
 mt_rand(200,255),mt_rand(200,255));
 $x = mt_rand(0, $width);
 $y = mt_rand(0, $height);
//imagestring($image, $font, $x, $y, $string, $color);
// font 字体大小 范围1~6
// x  开始的x坐标
// y  开始的y坐标
// string 输出的字符
// color  字符的颜色
imagestring($image,1, $x, $y, '.', $color);
}
//3. 加上干扰线
for($i=0;$i<6;$i++){
	$color = imagecolorallocate(
 $image, mt_rand(0, 255), 
 mt_rand(00,255),mt_rand(0,255));
	//imageline 画线条
	//image
	//x1 开始的x坐标
	//y1 开始的y坐标
	//x2 结束的x坐标
	//y2 结束的y坐标
	//color
	$x1 = mt_rand(0, $width);
	$x2 = mt_rand(0, $width);
	$y1 = mt_rand(0, $height);
	$y2 = mt_rand(0, $height);
	imageline($image, $x1, 
	$y1, $x2, $y2, $color);
}
//4. 加上验证码
//dechex()把数字转换为16进制
$code = '';
for($i=0;$i<4;$i++){
  //strtoupper把字符串转换为大写
  //strtolower
  $code .= strtoupper(
  	dechex(mt_rand(0, 15)));
}
$_SESSION['code'] = $code;
for($i=0;$i<4;$i++){
	$color = imagecolorallocate(
	$image, 
	mt_rand(0, 150), 
	mt_rand(0, 200),
	mt_rand(0, 250));
	$x = $i + $i * $width / 4 + 
		mt_rand(0, 5);
	$y = mt_rand(0, $height/2);
	imagestring($image, 18,
	  $x, $y, $code[$i], $color);
}
//5. 设置输出格式
//header设置输出数据的类型
//图片的类型可以是jpeg|png|bmp
header('Content-Type:image/png');
//6. 图形输出
//png的用imagepng函数,jpg就用imagejpeg
//imagepng(需要输出的图形);
imagepng($image);
//7. 销毁图形
imagedestroy($image);
?>