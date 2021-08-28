console.log("加载成功");

require.config({
    paths: {
        "jquery": "jquery-1.10.2.min",
        "jquery-cookie": "jquery.cookie",
        "nav": "nav",
        "secMain": "secMain",
        "buy_details1": "buy_details1"
    },
    shim: {
        "jquery-cookie": ["jquery"]
    }
})

require(["nav", "secMain", "origin_buy_details1"], function (nav, sec, buy) {
    nav.download_left_nav();
    nav.left_nav_hover();
    nav.top_nav_hover();
    nav.tool();
    nav.topSearch();

    sec.footerSwitch();

    buy.download_c();
    buy.service();
})