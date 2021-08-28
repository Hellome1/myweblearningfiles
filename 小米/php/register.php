<?php
    header("Content-type:text/html;charset=utf-8");

    // 统一返回格式
    $responseData = array("code" => 0, "message" => "");
    // 取出传过来的数据
    $username = $_POST["username"];
    $password = $_POST["password"];
    $recheck = $_POST["recheck"];
    $create_time = $_POST["create_time"];

    // 简单的验证
    if(!$username){
        $responseData["code"] = 1;
        $responseData["message"] = "用户名不能为空";
        echo json_encode($responseData);
        exit;
    }
    if(!$password){
        $responseData["code"] = 2;
        $responseData["message"] = "密码不能为空";
        echo json_encode($responseData);
        exit;
    }
    if($password != $recheck){
        $responseData["code"] = 6;
        $responseData["message"] = "两次密码不一致";
        echo json_encode($responseData);
        exit;
    }

    // 1、连接数据库
    $link = mysql_connect("localhost", "root", "jlsjd2");

    // 2、判断是否连接成功
    if(!$link){
        $responseData["code"] = 3;
        $responseData["message"] = "数据库链接失败";
        echo json_encode($responseData);
        exit;
    }

    // 3、设置字符集
    mysql_set_charset("utf8");

    // 4、选择数据库
    mysql_select_db("yyy");

    // 5、准备sql,验证是否重复用户名
    $sql1 = "SELECT * FROM xiaomi WHERE username='{$username}'";

    // 6、发送sql语句
    $res = mysql_query($sql1);

    // 7、取出一行数据
    $row = mysql_fetch_assoc($res);
    if($row){
        // 用户名重复
        $responseData["code"] = 4;
        $responseData["message"] = "用户名已存在";
        echo json_encode($responseData);
        mysql_close($link);
        exit;
    }

    // 8、md5加密
    $str = md5(md5(md5($password)."xxx")."yyy");

    // 9、准备sql语句插入到数据库
    $sql2 = "INSERT INTO xiaomi(username,password,create_time) VALUES('{$username}','{$str}',{$create_time})";

    // 10、发送sql语句
    $res = mysql_query($sql2);
    if(!$res){
        $responseData["code"] = 5;
        $responseData["message"] = "注册失败";
        echo json_encode($responseData);
    }else{
        $responseData["message"] = "注册成功";
        echo json_encode($responseData);
    }

    // 11、关闭数据库
    mysql_close($link);
?>