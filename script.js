$(document).ready(function(){
    
    $(".rslidesA").responsiveSlides({ timeout : 6000 });
    $(".rslidesB").responsiveSlides({ timeout : 5000});
    $(".rslidesC").responsiveSlides({ timeout: 4500});
    
    
    $("#burger-container").on('click', function(){
        $(this).toggleClass("open");
        $("#store > *").fadeToggle(1000);
        $("#store").slideToggle(1000);
    });
    
    
});
