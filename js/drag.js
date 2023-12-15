    // 드래그 가능한 스티커
    let about = document.getElementById('about');
    let work = document.getElementById('work');
    let contact = document.getElementById('contact');
    let drag1 = new Draggabilly(about);
    let drag2 = new Draggabilly(work);
    let drag3 = new Draggabilly(contact);

    // 스티커 block, none + background 색 변경
    function show1() {
        var sticker = document.getElementById('about');
        sticker.style.display = (sticker.style.display === 'block') ? 'none' : 'block';
        // document.body.style.background = 'red';
    }
    function show2() {
        var sticker = document.getElementById('work');
        sticker.style.display = (sticker.style.display === 'block') ? 'none' : 'block';
        // document.body.style.background = '#3ccc40';
    }
    function show3() {
        var sticker = document.getElementById('contact');
        sticker.style.display = (sticker.style.display === 'block') ? 'none' : 'block';
        // document.body.style.background = 'blue';
    }