/* 
    遵从AMD规范
*/

define(["jquery", "jquery-cookie"], function ($) {
    function index() {
        //商品计数
        all_num();
        //加载右侧
        right_msg();
        //ajax异步加载商品数据
        $.ajax({
            type: "get",
            url: "goods.json",
            success: function(arr){
                let html = ``;
                for(let i = 0; i < arr.length; i++){
                    html += `<li>
                                <img src="${arr[i].img}" alt="">
                                <span title="${arr[i].title}"}>${arr[i].title}</span>
                                <button id=${arr[i].id}>加入购物车</button>
                            </li>`
                }
                $("#goods").html(html);
            },
            error: function(msg){
                alert(msg);
            }
        })

        //事件委托添加点击事件
        $("#goods").on("click", "button", function(){
            let id = this.id;

            //cookie里存储添加商品数据
            let first = $.cookie("goods") == null ? true : false;
            if(first){
                //第一次添加
                $.cookie("goods", `[{"id":${id},"num":1}]`);
            }else{
                //不是第一次添加
                let cookieStr = $.cookie("goods");
                let cookieArr = JSON.parse(cookieStr);

                //判断cookie里是否有该商品
                var same = false;//假设没有
                for(let i = 0; i < cookieArr.length; i++){
                    if(id == cookieArr[i].id){
                        same = true;
                        cookieArr[i].num++;
                        break;
                    }
                }

                if(!same){
                    cookieArr.push({id:id, num:1});
                }

                //重新设置cookie
                $.cookie("goods", JSON.stringify(cookieArr));
            }

            // console.log($.cookie("goods"));
            //小球移动
            ballMove(this);
            //更新商品总数
            all_num();
            //更新右侧
            right_msg();
        })

        //加载右侧数据
        function right_msg(){
            //清空右侧数据
            $("#right ul").html(`  <li class="clear_all">
                清空购物车
            </li>`);
            $.ajax({
                url: "goods.json",
                success: function(arr){
                    let cookieStr = $.cookie("goods");
                    let newArr = [];
                    if(cookieStr){
                        let cookieArr = JSON.parse(cookieStr);
                        for(let j = 0; j < cookieArr.length; j++){
                            for(let i = 0; i < arr.length; i++){
                                if(arr[i].id == cookieArr[j].id){
                                    arr[i].num = cookieArr[j].num;
                                    newArr.push(arr[i]);
                                }
                            }
                        }
                    }

                    for(let i = 0; i < newArr.length; i++){
                        let node = $(`<li id="${newArr[i].id}">
                            <div class="detail">
                                <p>${newArr[i].title}</p>
                                <img src="${newArr[i].img}" alt="">
                            </div>
                            <div class="edit_container">
                                <div class="edit">
                                    <div class="edit_delete">删除</div>
                                    <div class="edit_addOrMinus">
                                        <i class="iconfont icon-jia"></i>
                                        <span>${newArr[i].num}</span>
                                        <i class="iconfont icon-iconset0187"></i>
                                    </div>
                                </div>
                            </div>
                        </li>`)

                        node.appendTo($("#right ul"));
                    }
                }
            })
        }

        //清空购物车
        $("#right ul").on("click", ".clear_all", function(){
            $.removeCookie("goods");
            all_num();
            right_msg();
        })

        //给右侧购物车商品的删除按钮添加点击事件，事件委托
        $("#right ul").on("click", ".edit_delete", function(){
            let id = $(this).closest("li").remove().attr("id");
            // console.log(id);
            let cookieStr = $.cookie("goods");
            let cookieArr = JSON.parse(cookieStr);
            for(let i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                    cookieArr.splice(i, 1);
                    break;
                }
            }
            //判断数组是否为空
            if(!cookieArr.length){
                $.removeCookie("goods");
            }else{
                $.cookie("goods", JSON.stringify(cookieArr));
            }

            all_num();
        })

        //右侧增加减少商品
        $("#right ul").on("click", ".icon-jia,.icon-iconset0187", function(){
            let className = $(this).attr("class");
            let id = $(this).closest("li").attr("id");
            // console.log(className);
            if(className == "iconfont icon-jia"){
                goodsAdd(id);
                let num = $(this).siblings("span").html();
                num++;
                $(this).siblings("span").html(num);
                let allNum = $("#right .all_num").html();
                allNum++;
                $("#right .all_num").html(allNum);
            }else{
                goodsMinus(id);
                let num = $(this).siblings("span").html();
                num--;
                if(!num){
                    $(this).closest("li").remove();
                }else{
                    $(this).siblings("span").html(num);
                }
                let allNum = $("#right .all_num").html();
                allNum--;
                $("#right .all_num").html(allNum);
            }
        })

        function goodsAdd(id){
            let cookieStr = $.cookie("goods");
            let cookieArr = JSON.parse(cookieStr);

            for(let i = 0; i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    cookieArr[i].num++;
                    break;
                }
            }

            //重新设置cookie
            $.cookie("goods", JSON.stringify(cookieArr));
        }

        function goodsMinus(id){
            let cookieStr = $.cookie("goods");
            let cookieArr = JSON.parse(cookieStr);

            for(let i = 0; i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    cookieArr[i].num--;
                    if(cookieArr[i].num == 0){
                        cookieArr.splice(i, 1);
                    }
                    break;
                }
            }

            if(!cookieArr.length){
                $.removeCookie("goods");
            }

            //重新设置cookie
            $.cookie("goods", JSON.stringify(cookieArr));
        }

        //右侧移入和移出
        $("#right").hover(function(){
            $(this).stop(true).animate({
                right: 0
            }, 500)
        },function(){
            $(this).stop(true).animate({
                right: -250
            }, 500)
        })

        function all_num(){
            let cookieStr = $.cookie("goods");
            if(cookieStr){
                let cookieArr = JSON.parse(cookieStr);
                let sum = 0;
                for(let i = 0; i < cookieArr.length; i++){
                    sum += cookieArr[i].num;
                }
                $("#right .all_num").html(sum);
            }else{
                $("#right .all_num").html(0);
            }
        }

        //抛物线运动
        function ballMove(_this){
            let ball = document.createElement("div");
            ball.className = 'ball';
            document.body.appendChild(ball);
            let tar = document.querySelector("#right .right_icon");
            let speed = 20;
            $(ball).css({
                left: $(_this).offset().left,
                top: $(_this).offset().top,
                display: "block"
            })
            parabola(ball, tar, speed, 45);
        }

        function parabola(node1, node2, speed, angle){
            let gravity = -1;
            let distanceX = (node2.parentNode.offsetLeft + node2.offsetLeft) - node1.offsetLeft;
            let distanceY = -(node2.offsetTop - node1.offsetTop);
            let radian = Math.atan(distanceY / distanceX);
            angle = Math.PI / 180 * angle;

            let count = 0;
            let height = null;

            if(!node1.timer){
                // console.log("timer",node1.timer);

                node1.timer = setInterval(function(){
                    distanceX = (node2.parentNode.offsetLeft + node2.offsetLeft) - node1.offsetLeft;
                    distanceY = -(node2.offsetTop - node1.offsetTop);
                    // console.log(node1.offsetLeft,",",(node2.parentNode.offsetLeft + node2.offsetLeft));
                    count++;
                    let speedX = speed * Math.cos(angle);
                    let speedY = speed * Math.sin(angle);
                    if(speedY <= 0){
                        speedY = -Math.ceil(height / 8);
                        let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
                        distanceX1 = Math.sqrt(Math.pow(distance, 2) - Math.pow(speedY, 2));
                        speedX = distanceX1 / 8;
                        speedX = Math.ceil(speedX);
                    }
                    height += speedY; 
                    speedY = height <= 0 ? 0 : speedY;
                    let transY = speedX * Math.sin(radian);
                    let transX = speedX * Math.cos(radian);
                    let addY = speedY * Math.sin(Math.PI / 2 + radian);
                    let addX = speedY * Math.cos(Math.PI / 2 + radian);
                    transY += addY;
                    transX += addX;
                    transX = transX > 0 ? Math.ceil(transX) : Math.floor(transX);
                    transY = transY > 0 ? Math.ceil(transY) : Math.floor(transY);
                    if(distanceX <= 20){
                        clearInterval(node1.timer);
                        // console.log(1111);
                        node1.timer = null;
                        document.body.removeChild(node1);
                    }
                    node1.style.left = node1.offsetLeft + transX + 'px';
                    node1.style.top = node1.offsetTop - transY + 'px';
                    speedY += gravity;
                    speed = Math.sqrt(Math.pow(speedX, 2) + Math.pow(speedY, 2));
                    angle = Math.atan(speedY / speedX);
                }, 10)
            }
        }
    }

    return {
        index: index
    }
})