/*
    小A同学封装的函数，可以写很多个函数，一般把实现同类功能的函数放在一个模块

    遵从AMD规范
*/

define(function() {
    function add(x, y) {
        return x + y;
    }
    function show() {
        console.log("hello world");
    }
    function ccc() {
        console.log("zaimul");
    }
    
    //对外暴露
    return {
        outAdd: add,
        outShow: show,
        ccc: ccc
    }
});