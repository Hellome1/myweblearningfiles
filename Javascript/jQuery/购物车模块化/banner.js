define(["jquery"], function ($) {
    function banner() {
        var aBtns = $("#play ol li");
        var oUl = $("#play ul");
        var aLis = oUl.find("li");

        //给所有的按钮添加点击事件
        // aBtns.click(function(){
        //     $(this).attr("class", "active").siblings().attr("class","");

        //     oUl.animate({
        //         top: $(this).index() * -130
        //     }, 500)
        // })

        var iNow = 0; //当前显示图片下标
        aBtns.click(function(){
            iNow = $(this).index() == 0 && iNow == aBtns.size() - 1 ? aBtns.size() : $(this).index();
            tab();
        })

        $("#play").hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(function(){
                iNow++;
                tab();
            }, 2000)
        })

        //启动定时器
        var timer = null;
        timer = setInterval(function(){
            iNow++;
            tab();
        }, 2000)

        function tab(){
            aBtns.attr("class", "").eq(iNow).attr("class", "active");
            if(iNow == aBtns.size()){
                aBtns.eq(0).attr("class", "active");
            }
            oUl.animate({
                top: -130 * iNow
            }, 500, function(){
                //判断是否为最后一张图片
                if(iNow == aBtns.length){
                    iNow = 0;
                    oUl.css("top", 0);
                }
            })
        }
    }

    return {
        banner: banner
    }
})