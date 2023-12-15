document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("animationContainer");
    var containerWidth = window.innerWidth;
    var containerHeight = window.innerHeight;
    var images = ["./img/heart1.gif", "./img/heart2.gif", "./img/heart3.gif", "./img/heart4.gif"]; // 이미지 파일 경로 배열
                
    function createFallingImage() {
        var image = new Image();
        var randomLeft = Math.floor(Math.random() * (containerWidth - 100 + 1));
        var duration = 5000; // 5초
        var fadeOutDuration = 12000; // fade out 효과 지속 시간

        image.classList.add("falling-image");
        image.src = images[Math.floor(Math.random() * images.length)];
        image.style.left = randomLeft + "px";
        image.style.top = "-100px";
        image.style.transition = "top " + duration + "ms, opacity " + fadeOutDuration + "ms";

        container.appendChild(image);

        setTimeout(function() {
            image.style.top = containerHeight + "px";
            image.style.opacity = 1;
        }, 500);

        setTimeout(function() {
            container.removeChild(image);
        }, duration + fadeOutDuration);

        setTimeout(createFallingImage, 1000); // 1초 후에 이미지 생성
    }

    createFallingImage();
});