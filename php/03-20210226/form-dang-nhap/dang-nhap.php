<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dang nhap</title>
    <link rel="stylesheet" href="./bootstrap.css">
    <link rel="stylesheet" href="./form.css">
</head>
<body>
    <div class="">
        <form action="dangnhap-thanhcong.php" method="post" class="form-group">
            <div class="d-flex justify-content-center mb-3">
                <a class="btn btn-outline-info mr-3" href="./dang-ky.php">Dang ky</a>
                <a class="btn btn-info" href="">Dang nhap</a><br>
            </div>
            Email: <input type="email" name="email" class="form-control"><br>
            Password: <input type="password" name="pass" class="form-control"><br>
            <div class="d-flex flex-column align-items-center">
                <button type="submit" name="submit" class="btn btn-secondary btn-lg active">Dang nhap</button><br>
                <a class="text-dark" href="">Quen mat khau</a>
            </div>
        </form>
    </div>

</body>
</html>