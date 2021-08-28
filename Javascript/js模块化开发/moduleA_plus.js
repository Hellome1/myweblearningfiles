var moduleA = (function(mod){
    function showC(){
        console.log("hello");
    }

    mod.outC = showC;
    return mod;
 })(moduleA || {});