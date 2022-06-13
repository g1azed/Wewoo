// new WOW().init();


AOS.init();

var lastScrollTop = 0;

$(window).scroll(function () {


    var scrollTop = $(this).scrollTop(); /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 수직 위치를 정합니다. */
    // scrollTop - 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정하는 메소드
    // console.log(scrollTop);


    if (scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
        if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
            /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
            $("header").css("top", "-100px");
        } else {
            $("header").css("top", "0px");
        }

        lastScrollTop = scrollTop;
    }

    if (scrollTop >= 1000) {
        $("header").css("backgroundcolor", "white");
        $(".header_li").css("color", "black");
    } else {
        $("header").css("backgroundcolor", "transparent");
        $(".header_li").css("color", "white");
    }

    // $(".content").each(function () {
    //     var contentIndex = $(this).attr("id");
    //     if(scrollTop >= $(this).offset().top) {
    //         $(".scroll_03 a").removeClass("on");
    //         $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
    //     }
    // })
});

