define(["jquery", "jquery-cookie"], function ($) {
    function download() {
        $.ajax({
            url: "./data/recommend.json",
            success: function (result) {
                console.log(result);
                let arr = result.data;
                for (let i = 0; i < arr.length; i++){
                    let li = $(`<li>
                    <a href="#">
                        <img src="${arr[i].info.image}" alt="">
                        <p class="title">${arr[i].info.name}</p>
                        <p class="price">${arr[i].info.price}元</p>
                        <p class="thumbs_up">${arr[i].info.comments}人好评</p>
                        <div class="action">
                            <button>加入购物车</button>
                        </div>
                    </a>
                </li>`)
                    
                    li.appendTo($("#centerArea .section2 .goods_list ul"));
                }
            },
            error: function (msg) {
                alert(msg);
            }
        }) 
        
        let cookieStr = $.cookie("product_id");
        console.log(cookieStr);
        if (cookieStr) {
            let arr = JSON.parse(cookieStr);
            let id_arr = arr[arr.length - 1].id.split("_");
            let id1 = id_arr[0], id2 = id_arr[1];
            let desc;
            $.ajax({
                url: "./data/de1.json",
                success: function (result) {
                    for (let i = 0; i < result.length; i++){
                        if (result[i].data.product_info.product_id == id1) {
                            desc = result[i].data.goods_list[id2].goods_info.name;
                            $("#centerArea .section1 .desc").html(desc);
                        }
                    }
                },
                error: function (msg) {
                    alert(msg);
                }
            })
        }
    }

    function back_look() {
        $("#centerArea .section1 .url a").eq(0).click(function () {
            window.history.back(-1);
        })
    }

    return {
        download: download,
        back_look: back_look
    }
})