console.log("加载成功");

require.config({
    paths: {
        "jquery": "jquery-1.10.2.min",
        "login": "login"
    }
})

require(["login"], function (login) {
    login.main();
})