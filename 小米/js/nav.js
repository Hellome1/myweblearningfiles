// AMD规范
// 首页导航部分
define(["jquery"], function ($) {
    function download() {
        //数据下载
        $.ajax({
            type: "get",
            url: "./data/banner.json",
            success: function (result) {
                let arr = result;
                for (let i = 0; i < arr.length; i++) {
                    $(`<a href="#">
                    <img src="${arr[i].src}" alt="">
                </a>`).appendTo($("#main .main_top_area .banner"));
                    
                    let li = $(`<li></li>`);
                    if (i == 0) {
                        li.addClass("active");
                    }
                    li.appendTo($("#main .main_top_area .pagination_dot"));
                }
                $("#main .main_top_area .banner").find("a").eq(0).addClass("active");
            },
            error: function (msg) {
                alert(msg);
            }
        })

        $.ajax({
            type: "get",
            url: "./data/left_nav_details.json",
            success: function (result) {
                let arr = result;
                for (let i = 0; i < arr.length; i++){
                    let liNode = $(`<li><a target="_top">${arr[i].title}<i class="iconfont-arrow-right-big"></i></a>
                </li>`);
                    if (i == 0) {
                        liNode.find("a").attr("href", "page1.html");
                    }
                    liNode.appendTo($("#header .site_header .left_nav"));
                }
            },
            error: function (msg) {
                alert(msg);
            }
        })
        
    }

    function download_left_nav() {
        $.ajax({
            type: "get",
            url: "./data/left_nav_details.json",
            success: function (result) {
                let arr = result;
                for (let i = 0; i < arr.length; i++){
                    let liNode = $(`<li>${arr[i].title}<i class="iconfont-arrow-right-big"></i>
                </li>`);
                    liNode.appendTo($("#header .site_header .left_nav"));
                }
            },
            error: function (msg) {
                alert(msg);
            }
        })
    }

    function topSearch() {
        //给顶部搜索框添加foucs样式
        $("#header .header_search input").on("focus", function () {
            $("#header .header_search .icon_container").css("border-color", "#ff6700");
            $("#header .header_search .down").css("display", "block");
        }).blur(function () {
            $("#header .header_search .icon_container").css("border-color", "#e0e0e0");
            $("#header .header_search .down").css("display", "none");
        })

        //给顶部搜索框图标添加移入样式
        $("#header .header_search .icon_container").mouseenter(function () {
            $("#header .header_search input").addClass("icon_hover");
        }).mouseleave(function () {
            $("#header .header_search input").removeClass("icon_hover");
        })

        //给顶部搜索框添加搜索推荐
        let iNow = 0;
        let timer = null;
        let arr,max,msg;
        $.ajax({
            type: "get",
            url: "./data/search.json",
            success: function (result) {
                arr = result;
                max = arr.length - 1;
                $("#header .header_search input").attr("placeholder", arr[0]);
            },
            error: function (msg) {
                alert(msg);
            }
        })
        timer = setInterval(function () {
            iNow++;
            iNow = iNow > max ? 0 : iNow;
            msg = arr[iNow];
            $("#header .header_search input").attr("placeholder", msg);
        }, 4000)
        $("#header .header_search").mouseenter(function () { 
            clearInterval(timer);
            timer = null;
        }).mouseleave(function () {
            if (!timer) {
                timer = setInterval(function () {
                    iNow++;
                    iNow = iNow > max ? 0 : iNow;
                    msg = arr[iNow];
                    $("#header .header_search input").attr("placeholder", msg);
                }, 4000)
            }
        })
    }

    function tool() {
        let w = $(window).width();
        if (w < 1440) {
            $(".home_tool_bar").removeClass("home_tool_bar_large").addClass("home_tool_bar_small");
        } else {
            $(".home_tool_bar").removeClass("home_tool_bar_small").addClass("home_tool_bar_large");
        }
        $(window).on("scroll", function () {
            let t = $(window).scrollTop();
            if (t > 1000) {
                $(".home_tool_bar .toTop").css("display", "block").click(function () {
                    $(window).scrollTop(0);
                });
            } else {
                $(".home_tool_bar .toTop").css("display", "none");
            }
        })
        $(window).on("resize", function () {
            let w = $(window).width();
            if (w < 1440) {
                $(".home_tool_bar").removeClass("home_tool_bar_large").addClass("home_tool_bar_small");
            } else {
                $(".home_tool_bar").removeClass("home_tool_bar_small").addClass("home_tool_bar_large");
            }
        })
    }

    function banner() {
        let iNow = 0;
        let biNow = iNow;
        let max;
        $.ajax({
            type: "get",
            url: "./data/banner.json",
            success: function (result) {
                max = result.length;
            },
            error: function (msg) {
                alert(msg);
            }
        })
        let timer = setInterval(function () {
            biNow = iNow;
            iNow++;
            iNow = iNow == max ? 0 : iNow; 
            tab();
        }, 5000)

        $("#main .main_top_area .banner").mouseenter(function () {
            clearInterval(timer);
            timer = null;
        }).mouseleave(function () {
            if (!timer) {
                timer = setInterval(function () {
                    biNow = iNow;
                    iNow++;
                    iNow = iNow == max ? 0 : iNow;
                    tab();
                }, 5000);
            }
        })
        //     .hover(function () {
        //     clearInterval(timer);
        // }, function () {
        //         timer = setInterval(function () {
        //         biNow = iNow;
        //         iNow++;
        //         iNow = iNow == 4 ? 0 : iNow; 
        //         tab();
        //     }, 5000)
        // })

        $("#main .main_top_area .pagination_dot").on("click", "li", function () {
            biNow = iNow;
            iNow = $(this).index();
            tab();
        })

        $("#main .main_top_area .previous").click(function () {
            biNow = iNow;
            iNow--;
            iNow = iNow == -1 ? max - 1 : iNow;
            tab();
        })

        $("#main .main_top_area .next").click(function () {
            biNow = iNow;
            iNow++;
            iNow = iNow == max ? 0 : iNow;
            tab();
        })

        function tab() {
            let arr = $("#main .main_top_area .banner").find("a");
            let arrli = $("#main .main_top_area .pagination_dot").find("li");
            arrli.removeClass("active").eq(iNow).addClass("active");
            arr.css({
                zIndex: 1,
                opacity: .5
            });
            arr.eq(biNow).css({
                zIndex: 3
            });
            // arr.eq(iNow).css("opacity", "0");
            arr.eq(iNow).css("opacity", ".9").show().animate({
                opacity: 1
            }, 300);
            arr.eq(biNow).animate({
                opacity: 0.1
            }, 300, function () {
                    $(this).hide();
            });
        }
    }

    function left_nav_hover() {
        $("#header .site_header .left_nav").on("mouseenter", "li", function () {
            let index = $(this).index();
            let _this = this;
            let content = $(this).find(".left_nav_details");
            if (!content.length) {
                $(`<div class="left_nav_details">
            </div>`).appendTo($(this));
                ajax_left_nav_details(_this, index);
            } else {
                content.show();
            }
        });

        $("#header .site_header .left_nav").on("mouseleave", "li", function () {
            let index = $(this).index();
            let _this = this;
            let content = $(this).find(".left_nav_details");
            content.hide();
        })

        function ajax_left_nav_details(_this, index) {
            $.ajax({
                type: "get",
                url: "../data/left_nav_details.json",
                success: function (result) {
                    let arr = result[index].details;
                    for (let i = 0; i < arr.length; i++) {
                        let spanNode = $(`
                            <span>
                                <img src="${arr[i].src}" alt="">
                                ${arr[i].title}</span>`);
                        spanNode.appendTo($(_this).find(".left_nav_details"));
                    }
                    let box = $(_this).find(".left_nav_details");
                    box.css("boxShadow", "0px 8px 16px rgba(0,0,0,.18)");
                },
                error: function (msg) {
                    alert(msg);
                }
            })
        }
    }

    function top_nav_hover() {
        let download = false;
        let disp = false;
        $("#header .header_nav_detail li").mouseenter(function () {
            // $("#header .display").stop(true).animate({
            //     borderWidth: 1,
            //     height: 230
            // }, 300);
            let index = $(this).index();
            if (!download) {
                ajax_top(index);
            }
            if (download && !disp) {
                $("#header .display").find("ul").eq(index).css("display", "block");
                $("#header .display").stop(true).animate({
                    borderWidth: 1,
                    height: 230
                }, 300, function () {
                    disp = true;
                })
            }
            disp = true;
            // let len = $("#header .site_header .display .container").find("li").length;
            // if (!len) {
            //     let index = $(this).index();
            //     ajax_top(index);
            // }
        })

        $("#header .header_nav_detail li a").mouseenter(function () {
            if (!disp) {
                $("#header .display").animate({
                    borderWidth: 1,
                    height: 230
                }, 300, function () {
                    disp = true;
                })
            }
            let index = $(this).closest("li").index();
            $("#header .display").find("ul").css("display", "none").eq(index).css("display", "block");
        })

        $("#header .header_nav_detail").mouseleave(function () {
            $("#header .display").stop(true).animate({
                borderWidth: 0,
                height: 0
            }, 300)
            disp = false;
        })

        $("#header .display").mouseenter(function () {
            $(this).stop(true).animate({
                borderWidth: 1,
                height: 230
            }, 300);
            if (!disp) {
                $("#header .display").animate({
                    borderWidth: 1,
                    height: 230
                }, 300, function () {
                    disp = true;
                })
            }
        }).mouseleave(function () {
            $(this).stop(true).animate({
                borderWidth: 0,
                height: 0
            }, 300);
            disp = false;
        });

        function ajax_top(index) {
            $.ajax({
                type: "get",
                url: "./data/top_nav_mall.json",
                success: function (result) {
                    let arrA = result;
                    for (let j = 0; j < arrA.length; j++){
                        let arr = arrA[j].details;
                        let html = ``;
                        let node = $(`<ul class="container"></ul>`);
                        for (let i = 0; i < arr.length; i++){
                            if (i == 0) {
                                html += `<li class="first">
                                                <a href="#">
                                                    <img src="${arr[i].src}" alt="">
                                                    <p>${arr[i].title}</p>
                                                    <p class="price">${arr[i].price}</p>
                                                </a>
                                            </li>`;
                            }else if (!arr[i].price) {
                                html += `<li>
                                            <a href="#">
                                                <img src="${arr[i].src}" alt="">
                                                <p>${arr[i].title}</p>
                                            </a>
                                        </li>`
                            } else {
                                html += `<li>
                                                <a href="#">
                                                    <img src="${arr[i].src}" alt="">
                                                    <p>${arr[i].title}</p>
                                                    <p class="price">${arr[i].price}</p>
                                                </a>
                                            </li>`;
                            }
                        }
                        node.html(html);
                        node.appendTo("#header .display");
                    }
                    $("#header .display").find("ul").eq(index).css("display", "block");
                    $("#header .display").animate({
                        borderWidth: 1,
                        height: 230
                    }, 300);
                    download = true;
                },
                error: function (msg) {
                    alert(msg);
                }
            })
        }
    }

    return {
        download: download,
        banner: banner,
        left_nav_hover: left_nav_hover,
        top_nav_hover: top_nav_hover,
        tool: tool,
        topSearch: topSearch,
        download_left_nav: download_left_nav
    }
})