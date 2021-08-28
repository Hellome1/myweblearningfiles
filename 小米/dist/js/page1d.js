define(["jquery"], function ($) {
    function download() {
        $.ajax({
            type: "get",
            url: "./data/page1.json",
            success: function (result) {
                let arr = result.sections;
                for (let i = 0; i < arr.length; i++){
                    if (arr[i].view_type == "list_label") {
                        let section = $(`<div class="section">
                        <div class="header">
                            <h2>${arr[i].body.items[0].label_title}</h2>
                        </div>
                        <div class="goods">
                            
                        </div>
                    </div>`);
                        let start = i;
                        let end;
                        for (let j = i + 1; j < arr.length; j++){
                            end = j;
                            if (arr[j].view_type == "list_label") {
                                break;
                            }
                        }
                        for (let j = start + 1; j < end; j++){
                            if (arr[j].view_type == "list_two_type4") {
                                let newArr = arr[j].body.items;
                                let node = $(`<div class="row clear">
                                <div class="good f">
                                    <a href="buy_details.html?product_id=${newArr[0].product_id}">
                                        <div class="top_img">
                                            <img src="${newArr[0].img_url}" alt="">
                                        </div>
                                        <div class="bottom_detail clear">
                                            <div class="leftArea">
                                                <div class="title">${newArr[0].product_name}</div>
                                                <div class="description">${newArr[0].product_brief}</div>
                                            </div>
                                            <div class="rightArea">
                                                <div class="price">${newArr[0].product_price}</div><span>元${newArr[0].show_price_qi ? "起" : ""}</span>
                                                <div class="previous">${newArr[0].product_price == newArr[0].product_org_price ? "" : newArr[0].product_org_price + "元"}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="good">
                                    <a href="buy_details.html?product_id=${newArr[1].product_id}">
                                        <div class="top_img">
                                            <img src="${newArr[1].img_url}" alt="">
                                        </div>
                                        <div class="bottom_detail clear">
                                            <div class="leftArea">
                                                <div class="title">${newArr[1].product_name}</div>
                                                <div class="description">${newArr[1].product_brief}</div>
                                            </div>
                                            <div class="rightArea">
                                                <div class="price">${newArr[1].product_price}</div><span>元${newArr[1].show_price_qi ? "起" : ""}</span>
                                                <div class="previous">${newArr[1].product_price == newArr[1].product_org_price ? "" : newArr[1].product_org_price + "元"}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>`);
                                
                                node.appendTo(section.find(".goods"));
                            } else if (arr[j].view_type == "list_img_text") {
                                let newArr = arr[j].body.items[0];
                                let node = $(`<div class="row_large">
                                <div class="good f">
                                    <a href="#">
                                        <div class="left_img">
                                            <img src="${newArr.img_url}" alt="">
                                        </div>
                                        <div class="right_detail clear">
                                            <div class="area1">
                                                <div class="title">${newArr.product_name}</div>
                                                <div class="description">${newArr.product_brief}</div>
                                            </div>
                                            <div class="area2">
                                                <div class="price">${newArr.product_price}</div><span>元${newArr.show_price_qi ? "起" : ""}</span>
                                                <div class="previous">${newArr.product_price == newArr.product_org_price ? "" : newArr.product_org_price + "元"}</div>
                                            </div>
                                            <div class="buy">立即购买</div>
                                        </div>
                                    </a>
                                </div>
                            </div>`)
                                
                                node.appendTo(section.find(".goods"));
                            }else if(arr[j].view_type){
                                let node = $(`<div class="split"></div>`);
                                node.appendTo(section.find(".goods"));
                            }
                        }

                        section.appendTo($("#centerArea .main .container"));
                    }
                }

                //添加href属性
            },
            error: function (msg) {
                alert(msg);
            }
        })
    }

    function bannerMove() {
        let iNow = 0;
        let timer = null;

        let Node = $("#centerArea .top_banner ul").find("li").eq(0).clone();
        Node.appendTo($("#centerArea .top_banner ul"));
        let size = $("#centerArea .top_banner ul li").size();
        
        $("#centerArea .top_banner ul").css("width", size * 2560);
        
        timer = setInterval(() => {
            iNow++;
            tab();
        }, 4000);

        $("#centerArea .top_banner").mouseenter(function () {
            clearInterval(timer);
            timer = null;
        }).mouseleave(function () {
            if (!timer) {
                timer = setInterval(() => {
                    iNow++;
                    tab();
                }, 4000);
            }
        })

        function tab() {
            let range = -iNow * 2560;

            $("#centerArea .top_banner ul").animate({
                left: range
            }, 700, function () {
                    
                    if ($("#centerArea .top_banner ul").offset().left == -2560) {
                        $("#centerArea .top_banner ul").css("left", "0");
                        iNow = 0;
                    }
            })
        }
    }

    return {
        download: download,
        bannerMove: bannerMove
    }
})