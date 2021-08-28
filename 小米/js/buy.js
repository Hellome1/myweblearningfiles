console.log("加载成功");

require.config({
    paths: {
        "jquery": "jquery-1.10.2.min",
        "jquery-cookie": "jquery.cookie",
        "nav": "nav",
        "secMain": "secMain",
        "buy1": "buy1"
    },
    shim: {
        "jquery-cookie": ["jquery"]
    }
})

require(["nav", "secMain", "buy1"], function (nav, sec, buy1) {
    nav.download_left_nav();
    nav.left_nav_hover();
    nav.top_nav_hover();
    nav.tool();
    nav.topSearch();

    sec.footerSwitch();

    buy1.download();
    buy1.fc();
})