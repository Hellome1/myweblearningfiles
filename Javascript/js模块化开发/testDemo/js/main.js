console.log("加载成功");

/*
    引入模块，遵从AMD规范
*/
// 第一个参数必须是数组
// require(["demo/add"], function (addObj) {
//     var res = addObj.outAdd(10, 20);
//     console.log(res);
//     addObj.outShow();
// })

/*
    可以配置路径
*/
require.config({
    paths: {
        add: "demo/add",
        mul: "demo/mul"
    }
})

require(["add", "mul"], function (addObj, mul) {
    var res = addObj.outAdd(10, 20);
    console.log(res);
    var resm = mul.mul(10, 10);
    console.log(resm);
    addObj.outShow();
})