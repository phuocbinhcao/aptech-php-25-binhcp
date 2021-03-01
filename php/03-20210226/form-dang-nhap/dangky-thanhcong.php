<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dang ky thanh cong</title>
    <link rel="stylesheet" href="./form.css">
</head>
<body>
<?php

echo "Ten dang ky: $_POST[fname]";
echo "<br>";

$checkmail = "/([a-z0-9_]+|[a-z0-9_]+\.[a-z0-9_]+)@((gmail|hotmail|yahoo+\.[a-z0-9]+)+\.([a-z]{2,4}))/i";
if(preg_match($checkmail, $_POST['email'])) { 
    echo "Địa chỉ email: $_POST[email]"; 
} 
else { 
    echo "Email không đúng"; 
}   
echo "<br>";

$checkpass = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/i";
if(preg_match($checkpass, $_POST['pass']) && $_POST['pass'] === $_POST['cfpass']) {
    echo "Pass word: $_POST[pass]";
} 
else {
    echo "pass ko hop le";
}
echo "<br>";

$date = date(DATE_ATOM,mktime(0,0,0,28,02,2003)); 
if ($_POST['birth']>$date && empty($_POST['birth'])){
    echo "<br>Do not enough age";
}else{  
    echo "<br> Sign up Successed";
}
echo "<br>";
?>
<a href="dang-ky.php">Tro ve</a>
</body>
</html>





