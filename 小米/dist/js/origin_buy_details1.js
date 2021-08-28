define(["jquery"], function ($) {
    function download_c() {
        $.ajax({
            type: "get",
            url: "./data/de1.json",
            success: function (result) {
                let arrData = [{list1:[], list2:[]}, {list1:[], list2:[]}, {list1:[], list2:[]}];
                let arr1 = result.data.goods_list;
                for (let i = 0; i < arr1.length; i++){
                    let arr = arr1[i].goods_info.prop_list;
                    let n;
                    switch (arr[0].prop_value_id) {
                        case 1514:
                            n = 0;
                            break;
                        case 1515:
                            n = 1;
                            break;
                        case 1516:
                            n = 2;
                            break;
                        default:
                            break;
                    }
                    let is;
                    is = true;
                    if (!arrData[n].list1.length) {
                        arrData[n].list1.push(arr[1].prop_value_id);
                        arrData[n].list2.push(arr[2].prop_value_id);
                    }
                    for (let j = 0; j < arrData[n].list1.length; j++){
                        if (arrData[n].list1[j] == arr[1].prop_value_id) {
                            is = false;
                            break;
                        }
                    }
                    if (is) {
                        arrData[n].list1.push(arr[1].prop_value_id);
                    }
                    is = true;
                    for (let j = 0; j < arrData[n].list2.length; j++){
                        if (arrData[n].list2[j] == arr[2].prop_value_id) {
                            is = false;
                            break;
                        }
                    }
                    if (is) {
                        arrData[n].list2.push(arr[2].prop_value_id);
                    }
                }
                for (let i = 0; i < arrData.length; i++){
                    arrData[i].list1.sort();
                    arrData[i].list2.sort();
                }
                console.log(arrData);
                handle_r(result, 0, arrData);
                _switch(result, arrData);
            },
            error: function (msg) {
                alert(msg);
            }
        })
    }

    function handle_r(r, num, arrData) {
        let arr = r.data.goods_list[num];
        let commodity_info = $("#centerArea .commodity .commodity_info");
        let img_ul;
        img_ul = $("#centerArea .commodity .img_area ul").remove();
        img_ul = $(`<ul></ul>`);
        
        for (let i = 0; i < arr.goods_info.imgs.length; i++){
            let li = $(`<li>
            <img src="${arr.goods_info.imgs[i]}" alt="">
        </li>`);
            
            li.appendTo(img_ul);
        }

        img_ul.appendTo("#centerArea .commodity .img_area")

        let company_info = arr.after_sale_info.company_info.desc.desc;
        commodity_info.find(".common_info .company").attr("title", company_info);
        $("#centerArea .commodity .common_info .price").html(`${arr.goods_info.price}元`);

        //选择区域
        let n;
        switch (arr.goods_info.prop_list[0].prop_value_id) {
            case 1514:
                n = 0;
                break;
            case 1515:
                n = 1;
                break;
            case 1516:
                n = 2;
                break;
            default:
                break;
        }
        //移出之前的第二第三选项框，为了复用
        $("#centerArea .commodity_info .option_area").find(".option_box").eq(1).remove();
        $("#centerArea .commodity_info .option_area").find(".option_box").eq(1).remove();
        let option_box;
        option_box = $(`<div class="option_box">
        <h3>选择版本</h3>
        <div class="option">
            
        </div>
    </div>`)
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
    </div>`)
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

        // 改变total的价格和说明
        $("#centerArea .commodity_info .total .desc").html(arr.goods_info.name);
        $("#centerArea .commodity_info .total .price").html(arr.goods_info.price + "元");
        $("#centerArea .commodity_info .total .total_price").html(arr.goods_info.price + "元");

        calculate_price();
    }

    function _switch(r, arrData) {
        //给option添加点击事件
        $("#centerArea .commodity_info .option_area .option").eq(0).find("span").click(function () {
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
        })

        $("#centerArea .commodity_info .option_area").on("click", ".option span", function () {
            let prop = $(this).attr("prop");
            if (prop != 1514 && prop != 1515 && prop != 1516) {
                $(this).closest(".option").find("span").removeClass("active");
                $(this).addClass("active");
                let a = $("#centerArea .commodity_info .option_area .option_box").eq(0).find(".option span.active").attr("prop");
                let b = $("#centerArea .commodity_info .option_area .option_box").eq(1).find(".option span.active").attr("prop");
                let c = $("#centerArea .commodity_info .option_area .option_box").eq(2).find(".option span.active").attr("prop");
                let num;
                let list = r.data.goods_list;
                for (let i = 0; i < list.length; i++){
                    let arr = list[i].goods_info.prop_list;
                    if (a == arr[0].prop_value_id && b == arr[1].prop_value_id && c == arr[2].prop_value_id) {
                        num = i;
                    }
                }
                handle_r(r, num, arrData);
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
    
    return {
        download_c: download_c,
        service: service
    }
})