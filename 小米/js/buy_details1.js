define(["jquery", "jquery-cookie"], function ($) {
    function download_c() {
        $.ajax({
            type: "get",
            url: "./data/de1.json",
            success: function (result) {
                for (let i = 0; i < result.length; i++){
                    if (result[i].data.product_info.product_id == valueByname("product_id", location.search)) {
                        result = result[i];
                        let arrData = null;
                        if (result.data.buy_option.length > 2) {
                            arrData = [];
                            let arr1 = result.data.goods_list;
                            for (let i = 0; i < arr1.length; i++){
                                let arr = arr1[i].goods_info.prop_list;
                                let obj;
                                if (!arrData.length) {
                                    obj = new Object();
                                    obj.main_id = arr[0].prop_value_id;
                                    obj.list1 = new Array();
                                    obj.list2 = new Array();
                                    obj.list1.push(arr[1].prop_value_id);
                                    obj.list2.push(arr[2].prop_value_id);
                                    arrData.push(obj);
                                } else {
                                    let aRis = true;
                                    for (let j = 0; j < arrData.length; j++){
                                        if (arrData[j].main_id == arr[0].prop_value_id) {
                                            console.log(1);
                                            aRis = false;
                                            obj = arrData[j];
                                            let ok = true;
                                            for (let k = 0; k < obj.list1.length; k++){
                                                if (obj.list1[k] == arr[1].prop_value_id) {
                                                    ok = false;
                                                    break;
                                                }
                                            }
                                            if (ok) {
                                                obj.list1.push(arr[1].prop_value_id); 
                                            }
                                            ok = true;
                                            for (let k = 0; k < obj.list2.length; k++){
                                                if (obj.list2[k] == arr[2].prop_value_id) {
                                                    ok = false;
                                                    break;
                                                }
                                            }
                                            if (ok) {
                                                obj.list2.push(arr[2].prop_value_id); 
                                            }
                                            break;
                                        }
                                    }
                                    
                                    if (aRis) {
                                        obj = new Object();
                                        obj.main_id = arr[0].prop_value_id;
                                        obj.list1 = new Array();
                                        obj.list2 = new Array();
                                        obj.list1.push(arr[1].prop_value_id);
                                        obj.list2.push(arr[2].prop_value_id);
                                        arrData.push(obj);
                                    }
                                }
                            }
                            
                            //对aR进行排序
                            for (let i = 0; i < arrData.length; i++){
                                arrData[i].list1.sort();
                                arrData[i].list2.sort();
                            }
                            for (let i = 0; i < arrData.length; i++){
                                for (let j = i + 1; j < arrData.length; j++){
                                    if (arrData[i].main_id > arrData[j].main_id) {
                                        let temp = arrData[i];
                                        arrData[i] = arrData[j];
                                        arrData[j] = temp;
                                    }
                                }
                            }
                            console.log(arrData);
                        }
                        handle_r(result, 0, arrData);
                        _switch(result, arrData);
                        load(result);
                    }
                }
            },
            error: function (msg) {
                alert(msg);
            }
        })
    }

    function valueByname(name, search) {
        let start = search.indexOf(name + "=");
        if (start == -1) {
            return null;
        } else {
            let end = search.indexOf("&", start);
            if (end == -1) {
                end = search.length;
            }
            let str = search.substring(start, end);
            let arr = str.split("=");
            return arr[1];
        }
    }

    function load(r) {
        //改变顶部banner信息

        //改变标题
        let title = r.data.product_info.name;
        $("#centerArea .commodity_info .common_info .title").html(title);

        //改变描述
        let descStr = r.data.product_info.product_desc;
        let start = descStr.indexOf("\u003e") + 1;
        let end = descStr.indexOf("\u003c", start);
        let descStr1 = descStr.substring(start, end);
        let descStr2 = descStr.substring(descStr.indexOf("\u003e", end) + 1);
        $("#centerArea .description .gift").html(descStr1);
        $("#centerArea .description .special").html(descStr2);
    }

    function handle_r(r, num, arrData) {
        let arr = r.data.goods_list[num];
        console.log(arr);
        let commodity_info = $("#centerArea .commodity .commodity_info");

        $("#centerArea .commodity_info .total .buy").attr("product_id", num);

        let img_ul;
        img_ul = $("#centerArea .commodity .img_area ul").remove();
        img_ul = $(`<ul class="img"></ul>`);
        $(`#centerArea .commodity .btn_area`).remove();
        let btn_area = $(`<div class="btn_area"></div>`);
        
        if (arr.goods_info.imgs.length > 1) {
            let btn_ul = $(`<ul class="btn"><li class="prev"></li><li class="next"></li></ul>`);
            let p_ul = $(`<ul class="point"></ul>`);
            let max = arr.goods_info.imgs.length;

            for (let i = 0; i < max; i++){
                let li = $(`<li>
                <img src="${arr.goods_info.imgs[i]}" alt="">
            </li>`);
                
                if (i == 0) {
                    li.css("zIndex", "5");
                }
                
                li.appendTo(img_ul);

                let p_li = $(`<li></li>`);
                if (i == 0) {
                    p_li.addClass("active");
                }
                p_li.appendTo(p_ul);
            }

            btn_ul.appendTo(btn_area);
            p_ul.appendTo(btn_area);
        } else {
            $(`<li>
            <img src="${arr.goods_info.imgs[0]}" alt="">
        </li>`).appendTo(img_ul);
        }

        img_ul.appendTo("#centerArea .commodity .img_area");
        btn_area.appendTo("#centerArea .commodity .img_area");
        if (arr.goods_info.imgs.length > 1) {
            let max = arr.goods_info.imgs.length;
            img_move(max);
        }

        let company_info = arr.after_sale_info.company_info.desc.desc;
        commodity_info.find(".common_info .company").attr("title", company_info);
        $("#centerArea .commodity .common_info .price").html(`${arr.goods_info.price}元`);

        if (arrData) {
            //选择区域
            let n;
            //移出之前的第二第三选项框，为了复用
            $("#centerArea .commodity_info .option_area").find(".option_box").eq(0).remove();
            $("#centerArea .commodity_info .option_area").find(".option_box").eq(0).remove();
            $("#centerArea .commodity_info .option_area").find(".option_box").eq(0).remove();
            let option_box;

            option_box = $(`<div class="option_box">
            <h3>选择产品</h3>
            <div class="option">
                
            </div>
        </div>`)
            for (let j = 0; j < r.data.buy_option[0].list.length; j++){
                let span = $(`<span prop="${r.data.buy_option[0].list[j].prop_value_id}">${r.data.buy_option[0].list[j].name}</span>`);
                if (arr.goods_info.prop_list[0].prop_value_id == r.data.buy_option[0].list[j].prop_value_id) {
                    span.addClass("active");
                }
                span.appendTo(option_box.find(".option"));
            }
            option_box.appendTo($("#centerArea .commodity_info .option_area"));

            for (let j = 0; j < arrData.length; j++){
                if (arr.goods_info.prop_list[0].prop_value_id == arrData[j].main_id) {
                    n = j;
                }
            }
            
            option_box = $(`<div class="option_box">
            <h3>选择版本</h3>
            <div class="option">
                
            </div>
        </div>`);
            for (let j = 0; j < r.data.buy_option[1].list.length; j++){
                for (let i = 0; i < arrData[n].list1.length; i++){
                    if (arrData[n].list1[i] == r.data.buy_option[1].list[j].prop_value_id) {
                        let span = $(`<span prop="${arrData[n].list1[i]}">${r.data.buy_option[1].list[j].name}</span>`);
                        if (arrData[n].list1[i] == arr.goods_info.prop_list[1].prop_value_id) {
                            span.addClass("active");
                        }
                        span.appendTo(option_box.find(".option"));
                    }
                }
            }
            option_box.appendTo($("#centerArea .commodity_info .option_area"));
            option_box = $(`<div class="option_box">
            <h3>选择颜色</h3>
            <div class="option">
                
            </div>
        </div>`);
            for (let j = 0; j < r.data.buy_option[2].list.length; j++){
                for (let i = 0; i < arrData[n].list2.length; i++){
                    if (arrData[n].list2[i] == r.data.buy_option[2].list[j].prop_value_id) {
                        let span = $(`<span prop="${arrData[n].list2[i]}">${r.data.buy_option[2].list[j].name}</span>`);
                        if (arrData[n].list2[i] == arr.goods_info.prop_list[2].prop_value_id) {
                            span.addClass("active");
                        }
                        span.appendTo(option_box.find(".option"));
                    }
                }
            }
            option_box.appendTo($("#centerArea .commodity_info .option_area"));
        } else {
            $("#centerArea .commodity_info .option_area").find(".option_box").eq(0).remove();
            $("#centerArea .commodity_info .option_area").find(".option_box").eq(0).remove();
            let option_box;
            option_box =  option_box = $(`<div class="option_box">
            <h3>选择${r.data.buy_option[0].name}</h3>
            <div class="option">
                
            </div>
        </div>`);
            for (let j = 0; j < r.data.buy_option[0].list.length; j++){
                let span = $(`<span prop="${r.data.buy_option[0].list[j].prop_value_id}">${r.data.buy_option[0].list[j].name}</span>`);
                if (r.data.buy_option[0].list[j].prop_value_id == arr.goods_info.prop_list[0].prop_value_id) {
                    span.addClass("active");
                }
                span.appendTo(option_box.find(".option"));
            }
            option_box.appendTo($("#centerArea .commodity_info .option_area"));
            option_box =  option_box = $(`<div class="option_box">
            <h3>选择${r.data.buy_option[1].name}</h3>
            <div class="option">
                
            </div>
        </div>`);
            for (let j = 0; j < r.data.buy_option[1].list.length; j++){
                let span = $(`<span prop="${r.data.buy_option[1].list[j].prop_value_id}">${r.data.buy_option[1].list[j].name}</span>`);
                if (r.data.buy_option[1].list[j].prop_value_id == arr.goods_info.prop_list[1].prop_value_id) {
                    span.addClass("active");
                }
                span.appendTo(option_box.find(".option"));
            }
            option_box.appendTo($("#centerArea .commodity_info .option_area"));
        }

        // 改变total的价格和说明
        $("#centerArea .commodity_info .total .desc").html(arr.goods_info.name);
        $("#centerArea .commodity_info .total .price").html(arr.goods_info.price + "元");
        $("#centerArea .commodity_info .total .total_price").html(arr.goods_info.price + "元");

        calculate_price();
    }

    function _switch(r, arrData) {
        //给option添加点击事件

        $("#centerArea .commodity_info .option_area").on("click", ".option span", function () {
            if ($(this).closest(".option_box").find("h3").html() == "选择产品") {
                let index = $(this).index();
                $(this).closest(".option").find("span").removeClass("active");
                $(this).addClass("active");
                let a = $("#centerArea .commodity_info .option_area .option_box").eq(0).find(".option span.active").attr("prop");
                let b = arrData[index].list1[arrData[index].list1.length - 1];
                let c = arrData[index].list2[0];
                let num;
                let list = r.data.goods_list;
                for (let i = 0; i < list.length; i++){
                    if (a == list[i].goods_info.prop_list[0].prop_value_id && b == list[i].goods_info.prop_list[1].prop_value_id && c == list[i].goods_info.prop_list[2].prop_value_id) {
                        num = i;
                    }
                }
                handle_r(r, num, arrData);
            } else {
                let before = $(this).closest(".option").find("span.active").index();
                $(this).closest(".option").find("span").removeClass("active");
                $(this).addClass("active");
                let c = $("#centerArea .commodity_info .option_area .option_box").eq(2).find(".option span.active").attr("prop");
                if (!c) {
                    let a = $("#centerArea .commodity_info .option_area .option_box").eq(0).find(".option span.active").attr("prop");
                    let b = $("#centerArea .commodity_info .option_area .option_box").eq(1).find(".option span.active").attr("prop");
                    let num;
                    let list = r.data.goods_list;
                    for (let i = 0; i < list.length; i++){
                        let arr = list[i].goods_info.prop_list;
                        if (a == arr[0].prop_value_id && b == arr[1].prop_value_id) {
                            num = i;
                            handle_r(r, num, arrData);
                        }
                    }
                    if (!num) {
                        let _this = this;
                        setTimeout(function () {
                            $(_this).closest(".option").find("span").removeClass("active");
                            $(_this).closest(".option").find("span").eq(before).addClass("active");
                         }, 300)
                    }
                } else {
                    let a = $("#centerArea .commodity_info .option_area .option_box").eq(0).find(".option span.active").attr("prop");
                    let b = $("#centerArea .commodity_info .option_area .option_box").eq(1).find(".option span.active").attr("prop");
                    let num;
                    let list = r.data.goods_list;
                    for (let i = 0; i < list.length; i++){
                        let arr = list[i].goods_info.prop_list;
                        if (a == arr[0].prop_value_id && b == arr[1].prop_value_id && c == arr[2].prop_value_id) {
                            num = i;
                            $(this).closest(".option").find("span").removeClass("active");
                            $(this).addClass("active");
                            handle_r(r, num, arrData);
                        }
                    }
                }
            }
        })
    }

    //服务点击功能
    function service() {
        $("#centerArea .commodity_info .service .service_box ul li").click(function () {
            if ($(this).attr("class") == "active") {
                $(this).removeClass("active");
            } else {
                $(this).closest("ul").find("li").removeClass("active");
                $(this).addClass("active");
            }

            calculate_price();
        })
    }

    function img_move(max) {
        let iNow = 0, iPre = null, timer = null, img = $("#centerArea .commodity .img");
        clearInterval($("#centerArea .commodity .img_area").attr("timer"));

        timer = setInterval(function () { 
            iPre = iNow;
            iNow++;
            tab();
        }, 4000)
        
        $("#centerArea .commodity .btn_area").mouseenter(function () {
            clearInterval(timer);
            timer = null;
        }).mouseleave(function () {
            if (!timer) {
                timer = setInterval(function () { 
                    iPre = iNow;
                    iNow++;
                    tab();
                }, 4000)
                $("#centerArea .commodity .img_area").attr("timer", timer);
            }
        })

        $("#centerArea .commodity .btn_area").find(".btn li").eq(0).click(function () {
            iPre = iNow;
            iNow--;
            tab();
        })

        $("#centerArea .commodity .btn_area").find(".btn li").eq(1).click(function () {
            iPre = iNow;
            iNow++;
            tab();
        })

        $("#centerArea .btn_area .point").find("li").click(function () {
            let index = $(this).index();
            iPre = iNow;
            if (iNow != index) {
                iNow = index;
                tab();
            }
        })

        function tab() {
            iNow = iNow > max - 1 ? 0 : iNow < 0 ? max - 1 : iNow;

            $("#centerArea .btn_area .point").find("li").removeClass("active");
            $("#centerArea .btn_area .point").find("li").eq(iNow).addClass("active");
            img.find("li").css("display", "none");
            img.find("li").eq(iPre).css({ opacity: .5, zIndex: 5, display: "block" }).animate({
                opacity: .1
            }, 300, function () {
                    $(this).css("display", "none");
            });
            img.find("li").eq(iNow).css({opacity: .8, zIndex: 4, display: "block"}).animate({
                opacity: 1
            }, 300, function(){});
        }

        $("#centerArea .commodity .img_area").attr("timer", timer);
    }

    function calculate_price() {
        let price;
        price = $("#centerArea .commodity_info .total .price").html();
        price = parseInt(price);
        for (let i = 0; i < $("#centerArea .commodity_info .service .service_box ul li.active").size(); i++){
            pr = $("#centerArea .commodity_info .service .service_box ul li.active").eq(i).find(".pr").html();
            pr = parseInt(pr);
            price += pr;
        }
        $("#centerArea .commodity_info .total .total_price").html(price + "元");
    }

    function shop() {
        $("#centerArea .commodity_info .total .buy").click(function () {
            let id = valueByname("product_id", location.search) + "_";
            id += $(this).attr("product_id");
            let first = $.cookie("product_id") ? false : true;
            let serNum = null;
            for (let i = 0; i < 3; i++){
                let find = $("#centerArea .commodity_info .service .service_box ul").eq(2 - i).find("li.active").size();
                if (find) {
                    let index = $("#centerArea .commodity_info .service .service_box ul").eq(2 - i).find("li.active").index();
                    index++;
                    serNum += index * Math.pow(10, i);
                }
            }
            //是否是第一次添加
            if (first) {
                $.cookie("product_id", `[{"id":"${id}", "num":1, "serNum":${serNum}}]`);
            } else {
                // 是否有同样的
                let cookieStr = $.cookie("product_id");
                let cookieArr = JSON.parse(cookieStr);
                let fn = -1;
                for (let i = 0; i < cookieArr.length; i++){
                    if (cookieArr[i].id == id) {
                        fn = i;
                    }
                }
                if (fn == -1) {
                    // 没有同样的商品
                    let good_info = { id: id, num: 1, serNum: serNum };
                    cookieArr.push(good_info);
                } else {
                    // 有同样的商品
                    cookieArr[fn].num++;
                }

                cookieStr = JSON.stringify(cookieArr);
                $.cookie("product_id", cookieStr);
            }

            console.log($.cookie("product_id"));

            window.location.href = "buy_success_tip.html";
        })
    }
    
    return {
        download_c: download_c,
        service: service,
        shop: shop
    }
})