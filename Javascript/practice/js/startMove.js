function startMove(node, cssObj, func){
    clearInterval(node.timer);
    node.timer = setInterval(function(){
        let isEnd = true;
        for(let attr in cssObj){
            let iCur = null;
            let iTarget = cssObj[attr];
            if(attr == 'opacity'){
                iCur = parseInt(parseFloat(getStyle(node, attr)) * 100);
            }else{
                iCur = parseInt(getStyle(node, attr));
            }
            var speed = (iTarget - iCur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if(iCur != iTarget){
                isEnd = false;
                if(attr == 'opacity'){
                    node.style.opacity = (iCur + speed) / 100;
                    node.style.filter = "alpha(opacity=" + (iCur + speed) + ")";
                }else{
                    node.style[attr] = iCur + speed + 'px';
                }
            }
        }
        if(isEnd){
            clearInterval(node.timer);
            if(func){
                func.call(node);
            }
        }
    },30)
}

function getStyle(node, cssStyle) {
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}