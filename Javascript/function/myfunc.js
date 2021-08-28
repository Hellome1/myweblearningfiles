// 兼容ie8以下
function elementsByClassName(node, classStr) {
    var nodes = node.getElementsByTagName('*');
    var arr = [];
    for (let i = 0; i < nodes.length; i++){
        if (nodes[i].className == classStr) {
            arr.push(nodes[i]);
        }
    }
    return arr;
}

// 阻止冒泡兼容
function stopBubble(e) {
    if (e.stopPropagation) {
        e.stopPropagation()
    } else {
        e.cancelBubble = true;
    }
}

// 兼容阻止默认行为函数
function preDef(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        window.event.returnValue = false;
    }
}

function bubbleSort(arr, n = 0) {
    if (n == 0) {
        for (let i = 0; i < arr.length - 1; i++){
            for (let j = 0; j < arr.length - (i + 1); j++){
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    } else if (n == 1) {
        for (let i = 0; i < arr.length - 1; i++){
            for (let j = 0; j < arr.length - (i + 1); j++){
                if (arr[j] < arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}

function selectSort(arr, n=0) {
    if (n == 0) {
        for (let i = 0; i < arr.length - 1; i++){
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    } else if (n == 1) {
        for (let i = 0; i < arr.length - 1; i++){
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}

function showTime() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();

    var week = d.getDay();

    week = numOfChinese(week);

    var hour = doubleNum(d.getHours());
    var min = doubleNum(d.getMinutes());
    var sec = doubleNum(d.getSeconds());

    var str = year + "年" + month + "月" + date + "日 星期" + week + " " + hour + ":" + min + ":" + sec;
    return str;
}

function numOfChinese(num) {
    var arr = ['日', '一', '二', '三', '四', '五', '六'];
    return arr[num];
}

function doubleNum(num) {
    if (num < 10) {
        num = '0' + num;
        return num;
    } else {
        return num;
    }
}

// 获取当前有效样式浏览器兼容
function getStyle(node, cssStyle) {
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}

function randomColor() {
    return 'rgb(' + parseInt(Math.random() * 256) + ', ' + parseInt(Math.random() * 256) + ', ' + parseInt(Math.random() * 256) + ')';
}

// drag函数有兼容获取窗口高度和宽度
function drag(node) {
    node.onmousedown = function(ev){
        let e = ev || window.event;
        let offsetX = e.clientX - node.offsetLeft;
        let offsetY = e.clientY - node.offsetTop;

        document.onmousemove = function(ev){
            let e = ev || window.event;
            let l = e.clientX - offsetX;
            let t = e.clientY - offsetY;

            if (l < 0) {
                l = 0;
            }
            var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
            if (l > windowWidth - node.offsetWidth) {
                l = windowWidth - node.offsetWidth;
            }
            if (t < 0) {
                t = 0;
            }
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            if (t > windowHeight - node.offsetHeight) {
                t = windowHeight - node.offsetHeight;
            }

            node.style.left = l + 'px';
            node.style.top = t + 'px';
        }
        
    }

    document.onmouseup = function(){
        document.onmousemove = null;
    }
}

//事件监听器兼容低版本IE
function addEvent(node, eventType, funcName) {
    if (node.addEventListener) {
        node.addEventListener(eventType, funcName);
    } else {
        node.attachEvent("on" + eventType, funcName);
    }
}

function removeEvent(node, eventType, funcName) {
    if (node.removeEventListener) {
        node.removeEventListener(eventType, funcName);
    } else {
        node.detachEvent("on" + eventType, funcName);
    }
}

 // 需要配合getStyle使用,不能传入字母,opacity属性需要传入最大一百的数
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