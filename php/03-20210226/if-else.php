<?php
$t = date("H");
echo $t < "10" ? "Have a good day" : "Have a good night";
// truong hop dung ?:

 
echo "<br>";
for ($x = 0; $x <= 20; $x++){
    if($x != 13){
        echo "tang $x <br>";
    }
}
// tim so nguyen to tu 0 - 100
for ($i =0; $i <= 100; $i++){
    if($i<2){
        continue;
    }
    $check = false;
    for($j = 2; $j <($i/2); $j++){
        if($i%$j == 0){
            $check = false;
            break;
        }
        $check = true;
    }
    if($i == 2 || $i == 3 || $check){
        echo "so nguyen to : $i <br>";
    }
}
