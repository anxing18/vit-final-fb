    /* access slider class from style.css */
var slider = document.querySelector("#slider");
var imgPosition = 0;
function goLeft() {
    // wen this function is called, it will offset the image slider by -500px
    if (imgPosition < 22) {
            imgPosition++;
    }

    var imgPositionPx = imgPosition * 300;
    slider.style.transform = "translateX(-" + imgPositionPx + "px)";
}

function goRight() {
    // wen this function is called, it will offset the image slider by -500px

    if (imgPosition > 0) {
            imgPosition--;
    }
    
    var imgPositionPx = imgPosition * 300;
    slider.style.transform = "translateX(-" + imgPositionPx + "px)";
}