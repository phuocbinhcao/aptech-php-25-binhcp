<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dang nhap thanh cong</title>
    <link rel="stylesheet" href="./form.css">
</head>
<body>
<?php
if(isset($_POST['submit']))
{
    if($_POST['email'] == null){
        echo "please enter your email! <br>";
    }
    else{
        $u = $_POST['email'];
    }
    if($_POST['pass'] == null){
        echo "Please enter your password!";
    }
    else{
        $p = $_POST['pass'];
    }
}
echo "<br>";

$checkmail = "/([a-z0-9_]+|[a-z0-9_]+\.[a-z0-9_]+)@((gmail|hotmail|yahoo+\.[a-z0-9]+)+\.([a-z]{2,4}))/i";
if(preg_match($checkmail, $_POST['email'])) { 
    echo "Địa chỉ email: $_POST[email]"; 
} 
else { 
    echo "Email không đúng"; 
}   
echo "<br>";
?>
<a href="dang-nhap.php">Tro ve</a>
</body>
</html>


