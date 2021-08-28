/* 
    配置引入文件的路径
*/

console.log("加载完成");

require.config({
    paths: {
        "jquery": "../jquery-1.10.2.min",
        "jquery-cookie": "../jquery-cookie-master/src/jquery.cookie",
        "index": "index",
        "banner": "banner"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"]
    }
})

require(["index", "banner"], function (index, banner) {
    index.index();
    banner.banner();
})