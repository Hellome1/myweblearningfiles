<?php
    header("Content-type:text/html;charset=utf-8");

    // 统一返回格式
    $responseData = array("code" => 0, "message" => "");
    // 取出传过来的数据
    $username = $_POST["username"];
    $password = $_POST["password"];

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

    // md5加密
    $str = md5(md5(md5($password)."xxx")."yyy");

    // 5、准备sql,验证是否重复用户名
    $sql = "SELECT * FROM xiaomi WHERE username='{$username}' AND password='{$str}'";

    // 6、发送sql语句
    $res = mysql_query($sql);

    // 7、取出一行数据
    $row = mysql_fetch_assoc($res);
    if(!$row){
        // 用户名或密码错误
        $responseData["code"] = 4;
        $responseData["message"] = "用户名或密码错误";
        echo json_encode($responseData);
        mysql_close($link);
        exit;
    }else{
        // 登录成功
        $responseData["message"] = "登录成功";
        echo json_encode($responseData);
    }

    // 8、关闭数据库
    mysql_close($link);
?>