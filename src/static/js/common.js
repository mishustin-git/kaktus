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
});
