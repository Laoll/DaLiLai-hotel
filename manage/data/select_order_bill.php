<?php
    include('0_config.php');
    $conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

    //SQL1：设置编码方式
    $sql = "SET NAMES UTF8";
    mysqli_query($conn, $sql);

    $output=[];
    $sql='select * from hotel_order where status=2';
    $result=mysqli_query($conn,$sql);
    $list=mysqli_fetch_all($result,MYSQLI_ASSOC);
//    $output[]=$row
    $array=array();
    for ($x=0; $x<=12; $x++) {
      $item=[];
      $item['month']=$x;
      $item['price']=0;
      array_push($array,$item);
    }
     $monthSale=[];
     foreach($list as $j=>$d){
        $price=0;
        $time=$list[$j]['orderTime'];
        echo $time;
        $date=date('Y  n d',$time);
        echo $date;
        $month=date("n", $time);
        echo $month;
        echo '<br>';
        $price=$list[$j]['price'];
        foreach($array as $i=>$m){
                if($month==$i){
                  $array[$i]['price']+=$price;
                }



        }
     }
//     $output['month']=$month;
//     $output['price']=$price;
     echo json_encode($array);
?>