
console.log("加载成功");

/* 
    配置当前项目依赖模块 AMD规范
*/

require.config({
    paths: {
        "jquery": "jquery-1.10.2.min",
        "jquery-cookie": "jquery.cookie",
        "nav": "nav",
        "secMain": "secMain"
    },
    shim: {
        "jquery-cookie": ["jquery"]
    }
})

require(["nav", "secMain"], function (nav, sec) {
    nav.download();
    nav.banner();
    nav.left_nav_hover();
    nav.top_nav_hover();
    nav.tool();
    nav.topSearch();

    sec.download();
    sec.flash_move();
    sec.timer();
    sec.more_hover();
    sec.footerSwitch();
})