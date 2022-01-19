$(function(){
    $("ul li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        let index = $(this).index();
        $(".item_down .item").eq(index).show().siblings().hide();
    });
})