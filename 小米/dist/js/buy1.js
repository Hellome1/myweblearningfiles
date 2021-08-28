define(["jquery", "jquery-cookie"], function ($) {
    function download() {
        // Promise 试用
        new Promise(function (resolve, reject) {
            $.ajax({
                url: "./data/recommend.json",
                success: function (result) {
                    resolve(result);
                },
                error: function (msg) {
                    reject(msg);
                }
            }) 
        }).then(function (result) {
            let arr = result.data;
            console.log(arr);
            for (let i = 0; i < arr.length; i++){
                let li = $(`<li product_id="${arr[i].info.product_id}_x">
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
                
                li.click(function () {
                    let first = $.cookie("product_id") ? false : true;
                    let serNum = null;
                    let id = `${arr[i].info.product_id}_x`;
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

                    reload_goods_list();
                })
                
                li.appendTo($("#main .section2 .goods_list ul"));
            }

            return new Promise(function (resolve, reject) {
                let cookieStr = $.cookie("product_id");
                if (cookieStr) {
                    $.ajax({
                        url: "./data/de1.json",
                        success: function (result) {
                            let reArr = [result, arr];
                            resolve(reArr);
                        },
                        error: function (msg) {
                            reject(msg);
                        }
                    })
                }
            })
        }).then(function (reArr) {
            let result = reArr[0], result2 = reArr[1];
            let cookieStr = $.cookie("product_id");
            $("#main .goods_details .goods_list.body").remove();

            let arr = JSON.parse(cookieStr);
            for (let j = 0; j < arr.length; j++){
                let id_arr = arr[j].id.split("_");
                let id1 = id_arr[0], id2 = id_arr[1];
                if (id2 == "x") {
                    for (let i = 0; i < result2.length; i++){
                        if (result2[i].info.product_id == id1) {
                            let node = $(`<div class="goods_list body" product_id="${arr[j].id}">
                            <div class="check"><i class="iconfont active">√</i></div>
                            <div class="img"><img src="${result2[i].info.image}?thumb=1&w=80&h=80" alt=""></div>
                            <div class="name">${result2[i].info.name}</div>
                            <div class="price">${result2[i].info.price}元</div>
                            <div class="num">
                                <div class="num_btn">
                                    <div class="ic">
                                        <i class="iconfont"></i>
                                    </div>
                                    <input type="text" value="${arr[j].num}">
                                    <div class="ic">
                                        <i class="iconfont"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="total">${result2[i].info.price * arr[j].num}元</div>
                            <div class="action">
                                <div class="ic">
                                    <i class="iconfont"></i>
                                </div>
                            </div>
                        </div>`);
                            
                            node.insertBefore($("#main .goods_details .submit"));
                        }
                    }
                } else {
                    for (let i = 0; i < result.length; i++){
                        if (result[i].data.product_info.product_id == id1) {
                            goods = result[i].data.goods_list[id2].goods_info;
                            console.log(goods);
                            let node = $(`<div class="goods_list body" product_id="${arr[j].id}">
                            <div class="check"><i class="iconfont active">√</i></div>
                            <div class="img"><img src="${goods.imgs[0]}?thumb=1&w=80&h=80" alt=""></div>
                            <div class="name">${goods.name}</div>
                            <div class="price">${goods.price}元</div>
                            <div class="num">
                                <div class="num_btn">
                                    <div class="ic">
                                        <i class="iconfont"></i>
                                    </div>
                                    <input type="text" value="${arr[j].num}">
                                    <div class="ic">
                                        <i class="iconfont"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="total">${goods.price * arr[j].num}元</div>
                            <div class="action">
                                <div class="ic">
                                    <i class="iconfont"></i>
                                </div>
                            </div>
                        </div>`);
                            
                            // 有服务显示服务
                            if (arr[j].serNum) {
                                let serNum = arr[j].serNum;
                                let a = parseInt(serNum / 100);
                                let b = parseInt(serNum / 10) - a * 10;
                                let c = serNum % 10;
                                let dataArr = [[{ title: "意外保障服务", desc: "手机意外碎屏/进水/碾压等损坏", price: 179 }, { title: "碎屏保障服务", desc: "手机意外碎屏", price: 99 }],
                                [{ title: "延长保修服务", desc: "厂保延一年，性能故障免费维修", price: 49 }],
                                [{ title: "云空间年卡200G", desc: "主商品签收后，自动激活至下单帐号", price: 159 }, { title: "云空间年卡50G", desc: "主商品签收后，自动激活至下单帐号", price: 49 }, { title: "云空间月卡200G", desc: "主商品签收后，自动激活至下单帐号", price: 1 }, { title: "云空间月卡50G", desc: "主商品签收后，自动激活至下单帐号", price: 6 }]];
                                let services_box;
                                if (a) {
                                    services_box = $(`<div class="services_box" serNum="${a * 100}">
                                    <div class="ser_img"><img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1605594163.22542401.png?thumb=1&w=60&h=60" alt=""></div>
                                    <div class="ser_name">
                                        <h3>${dataArr[0][a - 1].title}</h3>
                                        <p>${dataArr[0][a - 1].desc}</p>
                                    </div>
                                    <div class="ser_price">${dataArr[0][a - 1].price}元</div>
                                    <div class="ser_num">${arr[j].num}</div>
                                    <div class="ser_total">${arr[j].num * dataArr[0][a - 1].price}元</div>
                                    <div class="ser_action">
                                        <div class="ic">
                                            <i class="iconfont"></i>
                                        </div>
                                    </div>
                                </div>`)
                                    
                                    services_box.appendTo(node);
                                }
                                if (b) {
                                    services_box = $(`<div class="services_box" serNum="${b * 10}">
                                    <div class="ser_img"><img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1605594163.22542401.png?thumb=1&w=60&h=60" alt=""></div>
                                    <div class="ser_name">
                                        <h3>${dataArr[1][b - 1].title}</h3>
                                        <p>${dataArr[1][b - 1].desc}</p>
                                    </div>
                                    <div class="ser_price">${dataArr[1][b - 1].price}元</div>
                                    <div class="ser_num">${arr[j].num}</div>
                                    <div class="ser_total">${arr[j].num * dataArr[1][b - 1].price}元</div>
                                    <div class="ser_action">
                                        <div class="ic">
                                            <i class="iconfont"></i>
                                        </div>
                                    </div>
                                </div>`)
                                    
                                    services_box.appendTo(node);
                                }
                                if (c) {
                                    services_box = $(`<div class="services_box" serNum="${c}">
                                    <div class="ser_img"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png?thumb=1&w=60&h=60" alt=""></div>
                                    <div class="ser_name">
                                        <h3>${dataArr[2][c - 1].title}</h3>
                                        <p>${dataArr[2][c - 1].desc}</p>
                                    </div>
                                    <div class="ser_price">${dataArr[2][c - 1].price}元</div>
                                    <div class="ser_num">${arr[j].num}</div>
                                    <div class="ser_total">${arr[j].num * dataArr[2][c - 1].price}元</div>
                                    <div class="ser_action">
                                        <div class="ic">
                                            <i class="iconfont"></i>
                                        </div>
                                    </div>
                                </div>`)
                                    
                                    services_box.appendTo(node);
                                }
                            }
                            
                            node.insertBefore($("#main .goods_details .submit"));
                        }
                    }
                }
            }

            reload_sub();
        })

        // $.ajax({
        //     url: "./data/recommend.json",
        //     success: function (result) {
        //         let arr = result.data;
        //         for (let i = 0; i < arr.length; i++){
        //             let li = $(`<li>
        //             <a href="#">
        //                 <img src="${arr[i].info.image}" alt="">
        //                 <p class="title">${arr[i].info.name}</p>
        //                 <p class="price">${arr[i].info.price}元</p>
        //                 <p class="thumbs_up">${arr[i].info.comments}人好评</p>
        //                 <div class="action">
        //                     <button>加入购物车</button>
        //                 </div>
        //             </a>
        //         </li>`)
                    
        //             li.appendTo($("#main .section2 .goods_list ul"));
        //         }
        //     },
        //     error: function (msg) {
        //         alert(msg);
        //     }
        // }) 

        // let cookieStr = $.cookie("product_id");
        // if (cookieStr) {
        //     $("#main .goods_details .goods_list.body").remove();

        //     let arr = JSON.parse(cookieStr);
        //     $.ajax({
        //         url: "./data/de1.json",
        //         success: function (result) {
        //             for (let j = 0; j < arr.length; j++){
        //                 let id_arr = arr[j].id.split("_");
        //                 let id1 = id_arr[0], id2 = id_arr[1];
        //                 for (let i = 0; i < result.length; i++){
        //                     if (result[i].data.product_info.product_id == id1) {
        //                         goods = result[i].data.goods_list[id2].goods_info;
        //                         console.log(goods);
        //                         let node = $(`<div class="goods_list body" product_id="${arr[j].id}">
        //                         <div class="check"><i class="iconfont active">√</i></div>
        //                         <div class="img"><img src="${goods.imgs[0]}?thumb=1&w=80&h=80" alt=""></div>
        //                         <div class="name">${goods.name}</div>
        //                         <div class="price">${goods.price}元</div>
        //                         <div class="num">
        //                             <div class="num_btn">
        //                                 <div class="ic">
        //                                     <i class="iconfont"></i>
        //                                 </div>
        //                                 <input type="text" value="${arr[j].num}">
        //                                 <div class="ic">
        //                                     <i class="iconfont"></i>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div class="total">${goods.price * arr[j].num}元</div>
        //                         <div class="action">
        //                             <div class="ic">
        //                                 <i class="iconfont"></i>
        //                             </div>
        //                         </div>
        //                     </div>`);
                                
        //                         node.insertBefore($("#main .goods_details .submit"));
        //                     }
        //                 }
        //             }

        //             reload_sub();
        //         },
        //         error: function (msg) {
        //             alert(msg);
        //         }
        //     })
        // }
    }

    function reload_goods_list() {
        new Promise(function (resolve, reject) {
            $.ajax({
                url: "./data/recommend.json",
                success: function (result) {
                    resolve(result);
                },
                error: function (msg) {
                    reject(msg);
                }
            }) 
        }).then(function (result) {
            let arr = result.data;

            return new Promise(function (resolve, reject) {
                let cookieStr = $.cookie("product_id");
                if (cookieStr) {
                    $.ajax({
                        url: "./data/de1.json",
                        success: function (result) {
                            let reArr = [result, arr];
                            resolve(reArr);
                        },
                        error: function (msg) {
                            reject(msg);
                        }
                    })
                }
            })
        }).then(function (reArr) {
            let result = reArr[0], result2 = reArr[1];
            let cookieStr = $.cookie("product_id");
            $("#main .goods_details .goods_list.body").remove();

            let arr = JSON.parse(cookieStr);
            for (let j = 0; j < arr.length; j++){
                let id_arr = arr[j].id.split("_");
                let id1 = id_arr[0], id2 = id_arr[1];
                if (id2 == "x") {
                    for (let i = 0; i < result2.length; i++){
                        if (result2[i].info.product_id == id1) {
                            let node = $(`<div class="goods_list body" product_id="${arr[j].id}">
                            <div class="check"><i class="iconfont active">√</i></div>
                            <div class="img"><img src="${result2[i].info.image}?thumb=1&w=80&h=80" alt=""></div>
                            <div class="name">${result2[i].info.name}</div>
                            <div class="price">${result2[i].info.price}元</div>
                            <div class="num">
                                <div class="num_btn">
                                    <div class="ic">
                                        <i class="iconfont"></i>
                                    </div>
                                    <input type="text" value="${arr[j].num}">
                                    <div class="ic">
                                        <i class="iconfont"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="total">${result2[i].info.price * arr[j].num}元</div>
                            <div class="action">
                                <div class="ic">
                                    <i class="iconfont"></i>
                                </div>
                            </div>
                        </div>`);
                            
                            node.insertBefore($("#main .goods_details .submit"));
                        }
                    }
                } else {
                    for (let i = 0; i < result.length; i++){
                        if (result[i].data.product_info.product_id == id1) {
                            goods = result[i].data.goods_list[id2].goods_info;
                            console.log(goods);
                            let node = $(`<div class="goods_list body" product_id="${arr[j].id}">
                            <div class="check"><i class="iconfont active">√</i></div>
                            <div class="img"><img src="${goods.imgs[0]}?thumb=1&w=80&h=80" alt=""></div>
                            <div class="name">${goods.name}</div>
                            <div class="price">${goods.price}元</div>
                            <div class="num">
                                <div class="num_btn">
                                    <div class="ic">
                                        <i class="iconfont"></i>
                                    </div>
                                    <input type="text" value="${arr[j].num}">
                                    <div class="ic">
                                        <i class="iconfont"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="total">${goods.price * arr[j].num}元</div>
                            <div class="action">
                                <div class="ic">
                                    <i class="iconfont"></i>
                                </div>
                            </div>
                        </div>`);
                            
                            // 有服务显示服务
                            if (arr[j].serNum) {
                                let serNum = arr[j].serNum;
                                let a = parseInt(serNum / 100);
                                let b = parseInt(serNum / 10) - a * 10;
                                let c = serNum % 10;
                                let dataArr = [[{ title: "意外保障服务", desc: "手机意外碎屏/进水/碾压等损坏", price: 179 }, { title: "碎屏保障服务", desc: "手机意外碎屏", price: 99 }],
                                [{ title: "延长保修服务", desc: "厂保延一年，性能故障免费维修", price: 49 }],
                                [{ title: "云空间年卡200G", desc: "主商品签收后，自动激活至下单帐号", price: 159 }, { title: "云空间年卡50G", desc: "主商品签收后，自动激活至下单帐号", price: 49 }, { title: "云空间月卡200G", desc: "主商品签收后，自动激活至下单帐号", price: 1 }, { title: "云空间月卡50G", desc: "主商品签收后，自动激活至下单帐号", price: 6 }]];
                                let services_box;
                                if (a) {
                                    services_box = $(`<div class="services_box" serNum="${a * 100}">
                                    <div class="ser_img"><img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1605594163.22542401.png?thumb=1&w=60&h=60" alt=""></div>
                                    <div class="ser_name">
                                        <h3>${dataArr[0][a - 1].title}</h3>
                                        <p>${dataArr[0][a - 1].desc}</p>
                                    </div>
                                    <div class="ser_price">${dataArr[0][a - 1].price}元</div>
                                    <div class="ser_num">${arr[j].num}</div>
                                    <div class="ser_total">${arr[j].num * dataArr[0][a - 1].price}元</div>
                                    <div class="ser_action">
                                        <div class="ic">
                                            <i class="iconfont"></i>
                                        </div>
                                    </div>
                                </div>`)
                                    
                                    services_box.appendTo(node);
                                }
                                if (b) {
                                    services_box = $(`<div class="services_box" serNum="${b * 10}">
                                    <div class="ser_img"><img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1605594163.22542401.png?thumb=1&w=60&h=60" alt=""></div>
                                    <div class="ser_name">
                                        <h3>${dataArr[1][b - 1].title}</h3>
                                        <p>${dataArr[1][b - 1].desc}</p>
                                    </div>
                                    <div class="ser_price">${dataArr[1][b - 1].price}元</div>
                                    <div class="ser_num">${arr[j].num}</div>
                                    <div class="ser_total">${arr[j].num * dataArr[1][b - 1].price}元</div>
                                    <div class="ser_action">
                                        <div class="ic">
                                            <i class="iconfont"></i>
                                        </div>
                                    </div>
                                </div>`)
                                    
                                    services_box.appendTo(node);
                                }
                                if (c) {
                                    services_box = $(`<div class="services_box" serNum="${c}">
                                    <div class="ser_img"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png?thumb=1&w=60&h=60" alt=""></div>
                                    <div class="ser_name">
                                        <h3>${dataArr[2][c - 1].title}</h3>
                                        <p>${dataArr[2][c - 1].desc}</p>
                                    </div>
                                    <div class="ser_price">${dataArr[2][c - 1].price}元</div>
                                    <div class="ser_num">${arr[j].num}</div>
                                    <div class="ser_total">${arr[j].num * dataArr[2][c - 1].price}元</div>
                                    <div class="ser_action">
                                        <div class="ic">
                                            <i class="iconfont"></i>
                                        </div>
                                    </div>
                                </div>`)
                                    
                                    services_box.appendTo(node);
                                }
                            }
                            
                            node.insertBefore($("#main .goods_details .submit"));
                        }
                    }
                }
            }

                reload_sub();
        })
    }

    function reload_sub() {
        let all = 0, selected = 0, total_price = 0;
        for (let i = 0; i < $("#main .goods_details .goods_list.body").size(); i++){
            all += parseInt($("#main .goods_details .goods_list.body").eq(i).find(".num input").val());
        }
        for (let i = 0; i < $("#main .goods_details .goods_list.body .check i.active").size(); i++){
            selected += parseInt($("#main .goods_details .goods_list.body .check i.active").eq(i).closest(".body").find(".num input").val());

            total_price += parseInt($("#main .goods_details .goods_list.body .check i.active").eq(i).closest(".body").find(".total").html());
            if ($("#main .goods_details .goods_list.body .check i.active").eq(i).closest(".body").find(".services_box").size()) {
                let ser_totals = $("#main .goods_details .goods_list.body .check i.active").eq(i).closest(".body").find(".services_box").find(".ser_total");
                ser_totals.each(function (index, item, a) {
                    total_price += parseInt($(item).html());
                })
            }
        }

        $("#main .goods_details .submit").find(".goods_info span").eq(0).html(all);
        $("#main .goods_details .submit").find(".goods_info span").eq(1).html(selected);
        $("#main .goods_details .submit").find(".total span").html(total_price);
    }

    function fc() {
        $("#main .goods_details .goods_list.titles .check i").click(function () {
            let classStr = $(this).attr("class");
            if (classStr.indexOf("active") == -1) {
                $(this).addClass("active");
                $("#main .goods_details .goods_list.body .check i").addClass("active");
            } else {
                $(this).removeClass("active");
                $("#main .goods_details .goods_list.body .check i").removeClass("active");
            }

            reload_sub();
        })

        $("#main .goods_details").on("click", ".goods_list.body .check i" ,function () {
            let classStr = $(this).attr("class");
            let isAllCheck = false;

            if (classStr.indexOf("active") == -1) {
                $(this).addClass("active");
                if ($("#main .goods_details .goods_list.body .check i").size() == $("#main .goods_details .goods_list.body .check i.active").size()) {
                    isAllCheck = true;
                }
            } else {
                $(this).removeClass("active");
            }

            if (isAllCheck) {
                $("#main .goods_details .goods_list.titles .check i").addClass("active")
            } else {
                $("#main .goods_details .goods_list.titles .check i").removeClass("active");
            }
            reload_sub();
        })

        $("#main .goods_details").on("click", ".num .num_btn .ic", function () {
            let index = $(this).index();
            let product_id = $(this).closest(".goods_list.body").attr("product_id");
            console.log(product_id);
            if (index) {
                let num;
                // 改变cookie
                let cookieStr = $.cookie("product_id");
                let cookieArr = JSON.parse(cookieStr);
                for (let i = 0; i < cookieArr.length; i++){
                    if (cookieArr[i].id == product_id) {
                        cookieArr[i].num++;
                        cookieArr[i].num = cookieArr[i].num < 20 ? cookieArr[i].num : 20;
                        num = cookieArr[i].num;
                    }
                }

                $.cookie("product_id", JSON.stringify(cookieArr));

                //改变显示
                $(this).closest(".num").find("input").val(num);
                let total = num * parseInt($(this).closest(".goods_list.body").find(".price").html()) + "元";
                $(this).closest(".goods_list.body").find(".total").html(total);
                let services_box = $(this).closest(".goods_list.body").find(".services_box");
                if (services_box.size()) {
                    let items = services_box.find(".ser_total");
                    items.each(function (i, item) {
                        let pr = parseInt($(item).siblings(".ser_price").html());
                        $(item).siblings(".ser_num").html(num);
                        $(item).html(num * pr + "元");
                    })
                }
                reload_sub();
            } else {
                let num;
                // 改变cookie
                let cookieStr = $.cookie("product_id");
                let cookieArr = JSON.parse(cookieStr);
                for (let i = 0; i < cookieArr.length; i++){
                    if (cookieArr[i].id == product_id) {
                        cookieArr[i].num > 1 ? cookieArr[i].num-- : null;
                        num = cookieArr[i].num;
                    }
                }

                $.cookie("product_id", JSON.stringify(cookieArr));

                //改变显示
                $(this).closest(".num").find("input").val(num);
                let total = num * parseInt($(this).closest(".goods_list.body").find(".price").html()) + "元";
                $(this).closest(".goods_list.body").find(".total").html(total);
                let services_box = $(this).closest(".goods_list.body").find(".services_box");
                if (services_box.size()) {
                    let items = services_box.find(".ser_total");
                    items.each(function (i, item) {
                        let pr = parseInt($(item).siblings(".ser_price").html());
                        $(item).siblings(".ser_num").html(num);
                        $(item).html(num * pr + "元");
                    })
                }
                reload_sub();
            }

            console.log($.cookie("product_id"));
        })

        $("#main .goods_details").on("click", ".goods_list.body .action .ic", function () {
            let id = $(this).closest(".goods_list.body").attr("product_id");
            let cookieStr = $.cookie("product_id");
            let cookieArr = JSON.parse(cookieStr);
            for (let i = 0; i < cookieArr.length; i++){
                if (cookieArr[i].id == id) {
                    cookieArr.splice(i, 1);
                    break;
                }
            }

            if (cookieArr.length == 0) {
                $.removeCookie("product_id");
            } else {
                $.cookie("product_id", JSON.stringify(cookieArr));
            }
            $(this).closest(".goods_list.body").remove();

            reload_sub();
        })

        $("#main .goods_details").on("click", ".goods_list.body .img,.goods_list.body .name", function () {
            let product_id = $(this).closest(".goods_list.body").attr("product_id");
            if (product_id) {
                let pArr = product_id.split("_");
                product_id = pArr[0];
                window.location.href = "buy_details.html?product_id=" + product_id;
            }
        })

        $("#main .goods_details").on("focus", ".goods_list.body .num input", function () {
            let num = $(this).val();
            let cookieStr = $.cookie("product_id");
            
            // 添加Enter输入
            $(this).off("keyup").on("keyup", function (ev) {
                if (ev.keyCode == 13) {
                    this.blur();
                }
            })

            // focus 触发就会添加一次，调用off取消上一次
            $(this).off("blur").on("blur", handle);

            function handle() {
                 // 数字改变过
                if (typeof(parseInt($(this).val())) == "number") {
                    if (num != parseInt($(this).val()) && cookieStr) {
                        // 改变cookie
                        console.log(typeof (1));
                            
                        num = parseInt($(this).val());
                            
                        num = num < 20 ? num > 0 ? num : 1 : 20;
                        $(this).val(num);
                            
                        let product_id = $(this).closest(".goods_list.body").attr("product_id");
    
                        let cookieArr = JSON.parse(cookieStr);
                        for (let i = 0; i < cookieArr.length; i++){
                            if (cookieArr[i].id == product_id) {
                                cookieArr[i].num = num;
                            }
                        }
    
                        $.cookie("product_id", JSON.stringify(cookieArr));
                        console.log($.cookie("product_id"));
    
                        // 改变显示
                        let total = num * parseInt($(this).closest(".goods_list.body").find(".price").html()) + "元";
                        $(this).closest(".goods_list.body").find(".total").html(total);
                        let services_box = $(this).closest(".goods_list.body").find(".services_box");
                        if (services_box.size()) {
                            let items = services_box.find(".ser_total");
                            items.each(function (i, item) {
                                let pr = parseInt($(item).siblings(".ser_price").html());
                                $(item).siblings(".ser_num").html(num);
                                $(item).html(num * pr + "元");
                            })
                        }
                        reload_sub();
                    }
                } else {
                    $(this).val(num);
                }
                
            }
        })

        $("#main .goods_details").on("click", ".goods_list.body .services_box .ser_action .ic", function () {
            let product_id = $(this).closest(".body").attr("product_id");
            let serNum = null;
            let items = $(this).closest(".body").find(".services_box");
            let index = $(this).closest(".services_box").index();
            items.each(function (i, item) {
                if ($(item).index() != index) {
                    serNum += parseInt($(item).attr("serNum"));
                }
            })
            console.log(serNum);
            // 改变cookie中的serNum
            let cookieStr = $.cookie("product_id");
            let cookieArr = JSON.parse(cookieStr);
            for (let i = 0; i < cookieArr.length; i++){
                if (cookieArr[i].id == product_id) {
                    cookieArr[i].serNum = serNum;
                }
            }

            $.cookie("product_id", JSON.stringify(cookieArr));
            $(this).closest(".services_box").remove();
            reload_sub();
        })
    }

    return {
        download: download,
        fc: fc
    }
})