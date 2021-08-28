define(["jquery"], function ($) {
    function download() {
        $.ajax({
            type: "get",
            url: "../data/flash.json",
            success: function (result) {
                let arr = result;
                let len = arr.length * 248 - 14;
                $("#secMain .flash_shop .goods_container").css("width", `${len}px`);
                for (let i = 0; i < arr.length; i++){
                    let num = i % 5 + 1;
                    let node = $(`<li class="b c${num}">
                                    <a href="#">
                                        <img src="${arr[i].src}" alt="">
                                        <div class="title">${arr[i].title}</div>
                                        <div class="description">${arr[i].description}</div>
                                        <div class="price">
                                            <span class="now">${arr[i].now}</span>
                                            <span class="before">${arr[i].before}</span>
                                        </div>
                                    </a>
                                </li>`);
                    node.appendTo($("#secMain .flash_shop .goods_container"));
                }
            },
            error: function (msg) {
                alert(msg);
            }
        })

        $.ajax({
            type: "get",
            url: "./data/phone.json",
            success: function (result) {
                let arr = result;
                for (let i = 0; i < arr.length; i++){
                    let node = $(`<li>
                                    <a href="#">
                                        <img src="${arr[i].src}" alt="">
                                        <div class="title">${arr[i].title}</div>
                                        <p class="description">${arr[i].desc}</p>
                                        <p class="price">${arr[i].price}</p>
                                    </a>
                                </li>`);
                    node.appendTo($("#secMain .phone .details ul"));
                }
            },
            error: function (msg) {
                alert(msg);
            }
        })

        $.ajax({
            type: "get",
            url: "./data/more.json",
            success: function (result) {
                for (let i = 0; i < result.length - 1; i++){
                    let more = $(`<div class="more" id="more${result[i].id}">
                    <div class="top_img">
                        <a href="#">
                            <img src="${result[i].src}" alt="">
                        </a>
                    </div>
                    <div class="more_area">
                        <div class="header">
                            <h2>${result[i].title}</h2>
                            <div class="option clear">
                                
                            </div>
                        </div>
                        <div class="section">
                            <div class="left_img">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="${result[i].left[0]}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${result[i].left[1]}" alt="">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`);
                    
                    for (let j = 0; j < result[i].option.length; j++){
                        let option = $(`<div>${result[i].option[j].title}</div>`);
                        if (j == 0) {
                            option.addClass("active");
                        }
                        option.appendTo(more.find(".more_area .header .option"));

                        //插入对应选项板块
                        let right = $(`<div class="details"><ul></ul></div>`);
                        if (j == 0) {
                            right.addClass("active");
                        }
                        let arr = result[i].option[j].details.right;
                        for (let k = 0; k < arr.length; k++){
                            let liNode = $(`<li>
                            <a href="#">
                                <img src="${arr[k].src}" alt="">
                                <div class="title">${arr[k].title}</div>
                                <p class="description">${arr[k].description}</p>
                                <div class="price clear">
                                    <div class="now">${arr[k].now}</div>
                                </div>
                            </a>
                        </li>`);
                            
                            if (arr[k].previous) {
                                let pre = $(`<del class="previous">${arr[k].previous}</del>`);
                                pre.appendTo(liNode.find(".price"));
                            }

                            liNode.appendTo(right.find("ul"));
                        }
                        let rightLast = result[i].option[j].details.rightLast;
                        let lastR;
                        if (!rightLast) {
                            lastR = $(`<li class="last">
                            <div class="view_more">
                                <a href="#">
                                    <div class="info">
                                        <div class="view_more_title">
                                            浏览更多
                                        </div>
                                        <div class="classify">
                                            ${result[i].option[j].title}
                                        </div>
                                    </div>
                                    <div class="icon">
                                        <i class="iconfont iconfont-circle-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </li>`);
                        } else {
                            lastR = $(`<li class="last">
                            <div class="small">
                                <a href="#">
                                    <div class="info">
                                        <div class="small_title">
                                            ${rightLast.title}
                                        </div>
                                        <div class="small_price">
                                            ${rightLast.price}
                                        </div>
                                    </div>
                                    <div class="pic">
                                        <img src="${rightLast.src}" alt="">
                                    </div>
                                </a>
                            </div>
                            <div class="view_more">
                                <a href="#">
                                    <div class="info">
                                        <div class="view_more_title">
                                            浏览更多
                                        </div>
                                        <div class="classify">
                                            ${result[i].option[j].title}
                                        </div>
                                    </div>
                                    <div class="icon">
                                        <i class="iconfont iconfont-circle-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </li>`);
                        }
                        
                        lastR.appendTo(right.find("ul"));
                        right.appendTo(more.find(".section"));
                    }

                    more.appendTo($("#secMain .container"));
                }

                let last = result[result.length - 1];
                let lastNode = $(`<div class="video">
                <div class="top_img">
                    <a href="#">
                        <img src="${last.img_url}" alt="">
                    </a>
                </div>
                <div class="video_main">
                    <div class="header_area">
                        <div class="header">
                            <h2>${last.floor_name}</h2>
                        </div>
                        <div class="more">
                            <a href="#" class="look_all">查看全部<i class="iconfont iconfont-arrow-right-big"></i>
                            </a>
                        </div>
                    </div>
            </div>`);
                
                let videoArea = $(`
                <div class="video_area">
                    <ul class="clear">
                    </ul>
                </div>
            </div>`)
                
                for (let i = 0; i < last.items.length; i++){
                    let li = $(`<li>
                    <a href="#">
                        <div class="figure">
                            <img src="${last.items[i].img_url}" alt="">
                            <i class="iconfont-play"></i>
                        </div>
                        <h3>${last.items[i].title}</h3>
                        <p class="description">${last.items[i].subtitle}</p>
                    </a>
                </li>`);
                    i == 0 ? li.addClass("first") : null;
                    
                    li.appendTo(videoArea.find("ul"));
                }

                videoArea.appendTo(lastNode.find(".video_main"));
                lastNode.appendTo($("#secMain .container"));
            },
            error: function (msg) {
                console(msg);
            }
        })
    }

    function flash_move() {
        let iNow = 0;
        let timer = null;
        let count,full,unfull,max;
        $.ajax({
            type: "get",
            url: "./data/flash.json",
            success: function (result) {
                count = result.length;
                full = parseInt(count / 4);
                unfull = parseInt(count % 4);
                max = unfull ? full : full - 1;
            },
            error: function (msg) {
                alert(msg);
            }
        })
        timer = setInterval(function () { 
            iNow++;
            iNow = iNow > max ? 0 : iNow;
            tab();
        }, 4000)

        $("#secMain .flash_shop .goods_container").mouseenter(function () {
            clearInterval(timer);
        }).mouseleave(function () {
            timer = setInterval(function () { 
                iNow++;
                iNow = iNow > max ? 0 : iNow;;
                tab();
            }, 4000)
        })

        $("#secMain .flash_shop .previous").click(function () {
            clearInterval(timer);
            iNow--;
            iNow = Math.max(0, iNow);
            tab();
        })
        $("#secMain .flash_shop .next").click(function () {
            clearInterval(timer);
            iNow++;
            iNow = Math.min(max, iNow);
            tab();
        })
        
        function tab() {
            let range = unfull ? iNow < full ? iNow * 248 * 4 : (iNow - 1) * 248 * 4 + 248 * unfull : iNow * 248 * 4;
            $("#secMain .flash_shop .goods_container").css({
                transform: `translate3d(${-range}px,0,0)`
            })

            iNow == 0 ? $("#secMain .flash_shop .previous").addClass("unClick") : $("#secMain .flash_shop .previous").removeClass("unClick");
            iNow == 3 ? $("#secMain .flash_shop .next").addClass("unClick") : $("#secMain .flash_shop .next").removeClass("unClick");
        }
    }

    function timer() {
        let time = 5 * 60 * 60;
        let h, m, s;

        let timer = null

        timer = setInterval(function () {
            time--;

            h = parseInt(time / (60 * 60));
            m = parseInt((time - (h * 60 * 60)) / 60);
            s = parseInt((time - (h * 60 * 60) - (m * 60)));
            h = doubleNum(h);
            m = doubleNum(m);
            s = doubleNum(s);

            $("#secMain .flash_shop .time").find("span").eq(0).html(h);
            $("#secMain .flash_shop .time").find("span").eq(1).html(m);
            $("#secMain .flash_shop .time").find("span").eq(2).html(s);

            if (!time) {
                clearInterval(timer);
                $("#secMain .flash_shop .time").html("秒杀已经结束了哦");
            }
        }, 1000)

        function doubleNum(num) {
            num = num >= 10 ? num : "0" + num;
            return num;
        }
    }

    function more_hover() {
        $("#secMain").on("mouseenter", ".more .option div", function () {
            $(this).closest(".option").find("div").removeClass("active");
            $(this).addClass("active");
            let index = $(this).index();
            
            $(this).closest(".more_area").find(".section .details").removeClass("active").eq(index).addClass("active");
        })
    }

    function footerSwitch() {
        let timer = null;
        let iNow = 0;
        timer = setInterval(function () {
            iNow++;
            iNow = iNow == 2 ? 0 : iNow;
            $("#footer .imgs .last").find("img").removeClass("active").eq(iNow).addClass("active");
        },3000)
    }

    return {
        download: download,
        flash_move: flash_move,
        timer: timer,
        more_hover: more_hover,
        footerSwitch: footerSwitch
    }
})