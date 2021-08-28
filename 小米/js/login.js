define(["jquery"], function ($) {
    function main() {
        $("#main .login_btn").click(function () {
            let inputs = $("#main input");
            $.ajax({
                type: "post",
                url: "./php/login.php",
                data: {
                    username: inputs.eq(0).val(),
                    password: inputs.eq(1).val()
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
                            let html = `${i}秒后跳转到首页`;
                            $("#main .bottom_container .info_area").html(html);
                            i--;
                            if(i <= 0){
                                clearInterval(timer);
                            }
                        } ,1000)
                        setTimeout(() => {
                            location.href = 'index.html';
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