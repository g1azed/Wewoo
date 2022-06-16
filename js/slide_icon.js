window.onload = function () {
    var bannerLeft = 0; 
    var first = 1; 
    var last; 
    var imgCnt = 0;
    var $img = $("#icon_slide img");
    var $first; 
    var $last; 
    $img.each(function () {
        // 5px 간격으로 배너 처음 위치 시킴                
        $(this).css("left", bannerLeft);
        bannerLeft += $(this).width() + 5;
        $(this).attr("id", "banner" + (++imgCnt));  // img에 id 속성 추가    
    });
    if (imgCnt > 2) {   
        last = imgCnt;
        setInterval(function () {
            $img.each(function () {
                $(this).css("left", $(this).position().left - 1);
                // 1px씩 왼쪽으로 이동                   
            });
            $first = $("#banner" + first);
            $last = $("#banner" + last);
            if ($first.position().left < 0) {
                // 제일 앞에 배너 제일 뒤로 옮김                        
                $first.css("left", $last.position().left + $last.width() + 5);
                first++; last++; 
                if (last > imgCnt) { last = 1; } 
                if (first > imgCnt) { first = 1; }
            }
        }, 30);
        //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 //깔끔하게 변경가능하다           
    }
};
