console.log("加载成功");

require.config({
    paths: {
        "jquery": "jquery-1.10.2.min",
        "jquery-cookie": "jquery.cookie",
        "nav": "nav",
        "secMain": "secMain",
        "bsc": "b_s_c1"
    },
    shim: {
        "jquery-cookie": ["jquery"]
    }
})

require(["nav", "secMain", "bsc"], function (nav, sec, bsc) {
    nav.download_left_nav();
    nav.left_nav_hover();
    nav.top_nav_hover();
    nav.tool();
    nav.topSearch();

    sec.footerSwitch();

    bsc.download();
    bsc.back_look();
})