// new WOW().init();
AOS.init();

$("#planning").click(function(){
        // console.log("scrollTop");
    var scrollPosition = $("#box2").offset().top;
    $("html, body").animate ({scrollTop: scrollPosition }, 700 );
} );
$("#video").click(function(){
    var scrollPosition = $("#movie").offset().top;
    $("html, body").animate({scrollTop: scrollPosition }, 700 );
} );
$("#design").click(function(){
    var scrollPosition = $("#box8").offset().top;
    $("html, body").animate({scrollTop: scrollPosition }, 700 );
} );
$("#service").click(function(){
    var scrollPosition = $("#box11").offset().top;
    $("html, body").animate({scrollTop: scrollPosition }, 700 );
} );




var lastScrollTop = 0;

$(window).scroll(function () {
    var lastScrollTop = 0;

    var scrollTop = $(this).scrollTop(); 


    if (scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
        if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */

            $("header").css("top", "-100px");
        } else {
            $("header").css("top", "0px");
        }

        lastScrollTop = scrollTop;
    }


    if (scrollTop >= 1000) { // 스크롤의 위치가 1000px 이상 / section 2부터
        $("header").css("background-color", "white")
        .css("border-bottom","2px solid #eee");

        $(".header_li a").css("color", "black");

        $("#header_img").attr("src", "./css/img/logo/header_logo_color.png");


    } 
    // else if( scrollTop <= 80 && scrollTop >= 1){ // 스크롤의 위착 80px 이상 section 1일때


    //     $("header").css("background-color", "black")
    //     .css("border-bottom","none");

    //     $(".header_li a").css("color", "white");
    // } 
    else { // 스크롤의 위치가 top =0 일때
         

        $("header").css("background-color", "black")
        .css("border-bottom","none");

        $(".header_li a").css("color", "white");
        $("#header_img").attr("src", "./css/img/logo/header_LOGO.png");


    }


});

