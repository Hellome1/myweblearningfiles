console.log("加载成功");

require.config({
    paths: {
        "jquery": "jquery-1.10.2.min",
        "jquery-cookie": "jquery.cookie",
        "nav": "nav",
        "secMain": "secMain",
        "page1d": "page1d"
    },
    shim: {
        "jquery-cookie": ["jquery"]
    }
})

require(["nav", "secMain", "page1d"], function (nav, sec, page1d) {
    nav.download_left_nav();
    nav.left_nav_hover();
    nav.top_nav_hover();
    nav.tool();
    nav.topSearch();

    sec.footerSwitch();
    
    page1d.download();
    page1d.bannerMove();
})