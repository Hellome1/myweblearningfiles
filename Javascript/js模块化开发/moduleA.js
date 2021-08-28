var moduleA = (function(mod){
    var count = 10; //私有变量
    function showA(){ // 私有函数
        count += 20;
        console.log(count);
    }
    function showB(){
        count *= 10;
        console.log(count);
    }
    mod.outA = showA;
    mod.outB = showB;
    
    // 对外暴露
    return mod;
})(moduleA || {});