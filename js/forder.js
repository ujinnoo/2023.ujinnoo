$(function(){
    $('#forder-01, #forder-02, #forder-03').click(function(){
    $(this).siblings().removeClass('selected');
    // 현재 클릭된 요소에 클래스 추가
    $(this).toggleClass('selected');
    });
    
    // btn1(닫기) 버튼 클릭 시에도 selected 클래스 제거
    $('.btn1').click(function(){
        $('#forder-01, #forder-02, #forder-03').removeClass('selected');
    });
});

// 클릭된 섹션의 z-index 값을 가장 앞으로 변경하는 코드
let sections = document.querySelectorAll('section');

sections.forEach(function (section, index) {
    section.addEventListener('click', function () {
        // 모든 섹션의 z-index 값 초기화
        sections.forEach(function (sec) {
            sec.style.zIndex = '1';
        });
        // 클릭된 섹션의 z-index 값을 가장 앞으로 설정
        this.style.zIndex = '3';
    });
});

$(function(){
    $('.text2 li').click(function(){
    $(this).siblings().removeClass('selected2');
    // 현재 클릭된 요소에 클래스 추가
    $(this).toggleClass('selected2');
    });
    
    // btn1(닫기) 버튼 클릭 시에도 selected 클래스 제거
    $('.btn1').click(function(){
        $('#forder-01, #forder-02, #forder-03').removeClass('selected');
    });
});