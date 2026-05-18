$(document).ready(function () {
    $('.hover-accordion').on('mouseenter',function(){
 
        var $description=$(this).find('.hover__des');
        if(!$description.is(':visible')){
        $(this).addClass('hover-accordion__active');
        $description.stop(true,true).slideDown(300);

        $(this).siblings('hover-accordion__active')
        .removeClass('hover-accordion__active')
        .find('.hover__des')
        .stop(true,true).slideUp(300);
        } 
    })
    $('.hover-accordion').on('mouseleave click', function(){
        $(this).removeClass('hover-accordion__active');
        $(this).find('.hover__des').stop(true,true).slideUp(300);
    })
    $('.accordion-item').click(function(){ 
        $(this).toggleClass('accordion-item__active').siblings().removeClass('accordion-item__active');
    })
   
});