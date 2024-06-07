$(document).ready(function(){
    $(".header__btn").click(function(){
        $(".header__menu").toggleClass("show");
        $(".menu").toggleClass("close");
        $('.closure').toggleClass('close');
    })
});