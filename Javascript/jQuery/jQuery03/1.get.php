<?php
    header('content-type:text/html;charset="utf-8"');
    /* 
        $_GET 存放通过get提交的所有数据
    */
    $username = $_GET['username'];
    $age = $_GET['age'];
    $password = $_GET['password'];

    echo "username:{$username},age:{$age},password:{$password}"
?>