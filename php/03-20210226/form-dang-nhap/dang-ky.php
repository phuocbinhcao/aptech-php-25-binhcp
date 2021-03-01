<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dang ky</title>
    <link rel="stylesheet" href="./bootstrap.css">
    <link rel="stylesheet" href="./form.css">
</head>
<body>

    <div class="">
        <form action="dangky-thanhcong.php" method = "post" class="form-group">
            <div class="d-flex justify-content-center mb-3">
                <a class="btn btn-info mr-3" href="./dang-ky.php">Dang ky</a>
                <a class="btn btn-outline-info" href="./dang-nhap.php">Dang nhap</a><br>
            </div>
            Full Name: <input type="text" name="fname" class="form-control">
            
            <br>
            Email: <input type="email" name="email" class="form-control"><br>
            Password: <input type="password" name="pass" class="form-control"><br>
            ConfirmPassword: <input type="password" name="cfpass" class="form-control"><br>
            Date of birth: <input type="date" name="birth" class="form-control"><br>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-secondary btn-lg active ">Dang ky</button>
            </div>
        </form>
    </div>
    
</body>
</html>