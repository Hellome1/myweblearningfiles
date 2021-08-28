console.log("加载成功");

require.config({
    paths: {
        "jquery": "jquery-1.10.2.min",
        "register": "register"
    }
})

require(["register"], function (register) {
    register.main();
})