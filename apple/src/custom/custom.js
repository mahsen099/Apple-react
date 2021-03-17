import $ from 'jquery';

$(window).on("resize", function(){
    window.location.reload(false);
});

$(document).on("click", ".shop", function(){
    if ($(".shop").width() > 198){
    $(this).next('ul').slideToggle();
    $(this).toggleClass("new")}
})




