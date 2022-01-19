$(document).ready(function(){
    $(".shop_button").click(function(){
        if($(".left_bar").hasClass('on')){
            $(".left_bar").removeClass('on');
        } else {
            $(".left_bar").addClass('on');
        }
    });
});

$(document).ready(function(){
    $('label.menu_btn').on('click', function(){
        $(this).toggleClass('block');
    })
});

