// $(document).ready(function () {
//     $('.slide_BG').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 9000,
//         arrows: false,
//         pauseOnFocus: false,
//         draggable:true,
//     });


    // $(".slide_box").click(function(){
    //     var imageUrl = "./img/background/main_3_bg.png";
    //     $("#box3_wrap").css("background-image", "url(" + imageUrl + ") ")
    //     .css('background-repeat' , 'no-repeat')
    //     .css("background-size","cover");
    //     //  이거 5개 똑같이 복붙하면 댈듯~
    // });  


// });

//client rolling banner
window.onload = function () {
    var bannerLeft = 0;
    var first = 1;
    var last;
    var imgCnt = 0;
    var $img = $(".slide_box img");
    var $first;
    var $last;

    $img.each(function () {   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left", bannerLeft);
        bannerLeft += $(this).width() + 5;
        $(this).attr("id", "banner" + (++imgCnt));  // img에 id 속성 추가
    });


    if (imgCnt > 4) {                //배너 9개 이상이면 이동시킴



        last = imgCnt;

        setInterval(function () {
            $img.each(function () {
                $(this).css("left", $(this).position().left - 1); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner" + first);
            $last = $("#banner" + last);
            if ($first.position().left < -500) {    // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width() + 5);
                first++;
                last++;
                if (last > imgCnt) { last = 1; }
                if (first > imgCnt) { first = 1; }
            }
        }, 10);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 

        //깔끔하게 변경가능하다           

    }



};


$(document).ready(function () {

    $(".slide_box").click(function(){
        var imageUrl = "./css/img/background/main_3_bg.png";
        $("#box3_wrap").css("background-image", "url(" + imageUrl + ") ")
        .css('background-repeat' , 'no-repeat')
        .css("background-size","cover");
        //  이거 5개 똑같이 복붙하면 댈듯~
    });  



});



