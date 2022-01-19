var index_mag = 1;
show_mag(index_mag);

function btn_slide_mag(e) { 
    show_mag(index_mag = e);
}
function slide_slide_mag(e) { 
    show_mag(index_mag += e);
} 

function show_mag(e) {
    var i;
    const mag_img = document.querySelectorAll(".photo");
    const mag_sliders = document.querySelectorAll(".mag_btn span");
    if(e > mag_img.length) {
        index_mag = 1;
    }

    if(e < 1) {
        index_mag = mag_img.length;
    }

    for(i = 0; i < mag_img.length; i++) {
        mag_img[i].style.display = "none";
    }

    for(i = 0; i < mag_sliders.length; i++) {
        mag_sliders[i].style.background = "#fff";
    }

    mag_img[index_mag - 1].style.display = "block";
    mag_sliders[index_mag - 1].style.background = "black";
}