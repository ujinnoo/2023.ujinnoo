$(document).ready(function() {
    $('#buttonA').click(function() {
        toggleContent('contentA');
    });
    $('#buttonB').click(function() {
        toggleContent('contentB');
    });
    $('#buttonC').click(function() {
        toggleContent('contentC');
    });

    function toggleContent(contentId) {
        // 모든 컨텐츠를 숨김
        $('.display-none').hide();
        $('.display-block').hide();
        
        // 클릭된 버튼에 해당하는 컨텐츠를 보이게 함
        $('#' + contentId).show();
    }
    });