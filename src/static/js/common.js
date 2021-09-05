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
        if($(this).hasClass("icon-menu")){
            if ($(this).hasClass("active")){
                $('#menu').modal('show');
                if (!$(".burger").hasClass("active")){
                    $(".burger").toggleClass("active");
                }
            }    
        }
        else{
            if ($('#menu').hasClass("show"))
            {
                $('#menu').modal("hide");
            }
            if ($(".burger").hasClass("active")){
                $(".burger").toggleClass("active");
            }
        }
    })
    if ($(window).width()<769){
        $(".menu span").on('click',function(){
            $(".burger").toggleClass("active");
          })
    }
    //
    if ($(window).width()<769){ 
        $(".burger").on("click",function(){
            if (!$(this).hasClass("active")){
                $(this).toggleClass("active");
                $(".sticky-block a.active").toggleClass("active");
                $(".sticky-block a.icon-menu").toggleClass("active");
            }
            else{
                $(this).toggleClass("active");
                $(".sticky-block a.active").toggleClass("active");
                $(".sticky-block a.icon-home").toggleClass("active");
            }
        })
    } 
    // 
    if ($(window).width()<769){
        $('body').height($('body').height()+$(".sticky-block").height()+24);
        $(".nav-block").on("click",function(){
            if (!$(this).hasClass("opened"))
                $(".nav-block.opened").toggleClass("opened");
        $(this).toggleClass("opened");
        })
    }
    // 
    
    if ($(window).width()<769){
        $(".back").on("click",function(){
            $(".sub-category").css("display","none");
            $("a.no-link").removeClass("active");
            $(this).css("display","none");
            $(".top-item").css("display","block");
        })
        //
        $(".top-item .no-link").on("click",function(){
            $(".top-item").css("display","none");
            $(this).parent().css("display","block");
            $(this).parent().children(".sub-category").css("display","block");
            $(this).parent().children("a").toggleClass("active");
            $(".back").css("display","block");
        })
    }
    // 
    if ($(window).width()<769){
        $(".sub-category li").on("click",function(){
            $(this).children(".categories").toggleClass("opened");
        })
    }
    // 
    if ($(window).width()>768 && $(window).width()<1025){
        $(document).on('click', '.sub-category li', function() {
        // $(".sub-category li").on("click",function(){
            $(this).children(".categories").toggleClass("opened");
        })
    }
    // 
    if ($(window).width()<769){
        $(".arrow").on("click",function(){
            $(this).toggleClass("opened");
            })
    }
    // 
    if ($(window).width()>768 && $(window).width()<1025){
        $(document).on('click', '.arrow', function() {
        // $(".arrow").on("click",function(){
            $(this).toggleClass("opened");
            })
    }
    // 
    temp = 0;
    
    if ($(window).width()>768 && $(window).width()<1025){
        $(".top-item").on("click",function(){
            $(".top-item").children(".no-link").removeClass("active");
            $(this).children(".no-link").toggleClass("active");
            var html_code = $(this).html();
            $(".modal-sub-content").html(html_code);
            $(".modal-sub-content").removeClass("hidden");
            $(".modal-sub-content .sub-category").css("display","block");
            if (temp == 0){
                mar = $(".modal-sub-content").css("width");
                $(".close").css("margin-left",mar);
                // console.log(mar);
                temp++;
            }
        })
    }
    // 
    if ($(window).width()>1024){
        $(".top-item").on("click",function(){
            $(".top-item").children(".no-link").removeClass("active");
            $(this).children(".no-link").toggleClass("active");
            var html_code = $(this).html();
            $(".modal-sub-content").html(html_code);
            $(".modal-sub-content").removeClass("hidden");
            $(".modal-sub-content .sub-category").css("display","grid");
            if (temp == 0){
                mar = $(".modal-sub-content").css("width");
                $(".close").css("margin-left",mar);
                // console.log(mar);
                temp++;
            }
        })
    }
    // 
    var first  = $(".c-description.c-description__bottom div").text().slice(0,566);
    var second  = $(".c-description.c-description__bottom div").text().slice(567,$(".c-description.c-description__bottom div").text().length);
    $(".c-description.c-description__bottom div").remove();
    $(".c-description.c-description__bottom").append('<p style="font-weight: normal;font-size: 16px;line-height: 24px;">'+first+'</p>');
    $(".c-description.c-description__bottom").append('<span class="open-seo">Подробнее...</span>');
    $(".c-description.c-description__bottom").append('<p class="full-seo" style="font-weight: normal;font-size: 16px;line-height: 24px;">'+second+'</p>');
    $(".open-seo").on("click",function(){
        $(this).css("display","none");
          $(".full-seo").css("display","block");
      })
});
