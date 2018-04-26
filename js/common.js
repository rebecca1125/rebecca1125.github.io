$(function() {
    $(".menu a").click(function() {
        //先把别的a的高亮效果干掉
        $(".menu a").removeClass("active");
        //再给当前点击的这个a添加高亮效果
        $(this).addClass("active");
    });

    
    $(".togglesubmenu").click(function() {
        $(".submenu").slideToggle();
    });

    $(".toggle-left").click(function() {
        //1. 让左侧的菜单栏隐藏
        //2. 让右边的内容区域全屏显示

        // $(".left").animate({left: -180});
        $(".left, .main").toggleClass("now");
    });

    $(".log-out").click(function() {
        $("#logout-modal").modal("show");
    });

    //检查用户是否登录
    $.ajax({
        url: "/employee/checkRootLogin",
        type: "GET",
        data: {},
        success: function(data) {
            console.log(data);
            //{"error":400,"message":"未登录！"}
            if (data.error) {
                //说明未登录
                window.location.href = "login.html";
            }
        }
    });
});