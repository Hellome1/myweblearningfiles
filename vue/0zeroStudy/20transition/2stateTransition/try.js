class MyFirstClass{
    constructor(x, y){
        this.x = x
        this.y = y
    }
    play(){
        console.log('hello')
    }
}

MyFirstClass.prototype = {
    tween: function(msg){
        return {
            a: function(){
                console.log(msg)
            }
        }
    }
}

new MyFirstClass.tween('hello world')