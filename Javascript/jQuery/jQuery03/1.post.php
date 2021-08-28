<?php
    header('content-type:text/html;charset="utf-8"');
    /* 
        $_POST 存放通过post提交的所有数据
    */
    $username = $_POST['username'];
    $age = $_POST['age'];
    $password = $_POST['password'];

    echo "username:{$username},age:{$age},password:{$password}"
?>