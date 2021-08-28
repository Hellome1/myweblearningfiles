/*
    小B同学开发
    求两个数的积

    当前模块依赖另一个模块, 如果main.js没有配置路径就需要将路径写完整
*/
define(["add"], function (add) {
    function mul(x, y) {
        add.ccc();
        return x * y;
    }
    return {
        mul: mul
    }
})