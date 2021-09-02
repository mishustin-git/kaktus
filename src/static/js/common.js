$(document).ready(function () {
    if (($(window).width()<1024) && $(window).width()>768){
    $("#disclose").on("focus",function(){
        $(".actions-icons").css("display","none");
        $(".find-bar").css("margin-right","0");
    });
    $("#disclose").on("focusout",function(){
        $(".actions-icons").css("display","inline-flex");
        $(".find-bar").css("margin-right","66px");
    });
    }
    // 
    $(".sticky-block a").on("click",function(){
        $(".sticky-block a.active").toggleClass("active");
      $(this).toggleClass("active");
    })
    // 
    if ($(window).width()<769){
        $('body').height($('body').height()+$(".sticky-block").height()+24);
        $(".nav-block").on("click",function(){
            if (!$(this).hasClass("opened"))
                $(".nav-block.opened").toggleClass("opened");
        $(this).toggleClass("opened");
        })
    }
});
