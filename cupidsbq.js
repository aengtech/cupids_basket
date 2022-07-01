$(document).ready(function(){
    $("header p").on('click', function(){
        $(this).toggleClass("open");
        $("nav ul").fadeToggle(800);
        $("nav").css({"visibility" : "visible"}).fadeToggle(1000);
    });
});