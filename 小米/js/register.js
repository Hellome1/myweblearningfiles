define(["jquery"], function ($) {
    function main() {
        $("#main .register_btn").click(function () {
            let inputs = $("#main input");
            $.ajax({
                type: "post",
                url: "./php/register.php",
                data: {
                    username: inputs.eq(0).val(),
                    password: inputs.eq(1).val(),
                    recheck: inputs.eq(2).val(),
                    create_time: new Date().getTime()
                },
                success: function (result) {
                    // console.log(JSON.parse(result));
                    let res = JSON.parse(result);
                    if (res.code) {
                        $("#main .bottom_container .info_area").html(res.message).removeClass("success").addClass("error");
                    } else {
                        $("#main .bottom_container .info_area").html(res.message).removeClass("error").addClass("success");
                        let i = 3;
                        let timer;
                        timer = setInterval(function () {
                            let html = `${i}秒后跳转到登录页面`;
                            $("#main .bottom_container .info_area").html(html);
                            i--;
                            if(i <= 0){
                                clearInterval(timer);
                            }
                        } ,1000)
                        setTimeout(() => {
                            location.href = 'login.html';
                        }, (i + 1) * 1000);
                    }
                },
                error: function (msg) {
                    alert(msg);
                }
            })
        })
    }

    return {
        main: main
    }
})