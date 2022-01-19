var index = 1;
showImg(index);

function btn_slide(e) { 
    showImg(index = e);
}
function slide_slide(e) { 
    showImg(index += e);
} 

function showImg(e) {
    var i;
    const img = document.querySelectorAll(".banner_img")
    const sliders = document.querySelectorAll(".btn span")

    if(e > img.length) {
        index = 1
    }

    if(e < 1) {
        index = img.length
    }

    for(i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    for(i = 0; i < sliders.length; i++) {
        sliders[i].style.background = "rgba(255, 255, 255, .3)";
    }

    img[index - 1].style.display = "block";
    sliders[index - 1].style.background = "#fff";
}

var index = 0;
showauto();

function showauto() {
    const imgauto = document.getElementsByClassName("banner_img");
    const slideauto = document.querySelectorAll(".btn span");
    for(var j = 0; j < imgauto.length; j++) {
        imgauto[j].style.display = "none";
    }
    for(var j = 0; j < slideauto.length; j++) {
        slideauto[j].style.background = "rgba(255, 255, 255, .3)";
    }
    index++;
    if(index > imgauto.length) {
        index = 1;
    }
    imgauto[index - 1].style.display = "block";
    slideauto[index - 1].style.background = "#fff";
    setTimeout(showauto, 3000);
}