$(document).ready(function () {
    $('.slide_BG').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        arrows: false,
        pauseOnFocus: false,
        draggable:true,
    });


    $(".slide_box").click(function(){
        var imageUrl = "./img/background/main_3_bg.png";
        $("#box3_wrap").css("background-image", "url(" + imageUrl + ") ")
        .css('background-repeat' , 'no-repeat')
        .css("background-size","cover");
        //  이거 5개 똑같이 복붙하면 댈듯~
    });  


});


