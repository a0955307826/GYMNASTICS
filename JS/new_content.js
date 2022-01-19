let block = document.getElementsByClassName('enlarge');
let bigPhoto = document.getElementsByClassName('photo_banner');
let none = document.getElementsByClassName('photo_header');
let body = window.document.body;

// 點擊顯示大圖
for(let i = 0; i < bigPhoto.length; i++) {
    block[i].addEventListener('click', function() {
        bigPhoto[i].classList.add('block');
        body.style.backgroundColor = "rgba(0, 0, 0, .5)";
    });
}

// 點擊隱藏大圖
for(let i = 0; i < none.length; i++) {
    none[i].addEventListener('click', function() {
        bigPhoto[i].classList.remove('block');
        body.style.backgroundColor = "#EFE6DD";
    });
}