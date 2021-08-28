console.log("加载成功");

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
    nav.download_left_nav();
    nav.left_nav_hover();
    nav.top_nav_hover();
    nav.tool();
    nav.topSearch();

    sec.footerSwitch();
})