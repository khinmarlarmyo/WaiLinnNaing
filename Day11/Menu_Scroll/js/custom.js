$(document).ready(function () {
    $('.menu').click(function () {
        $(this).toggleClass('is-active');
        $('.nav-links').toggleClass('is-active');
    })

    var $window=$(window);
    var $scrollTopBtn=$('#up-to-btn'); 

    $window.on('scroll',function(){
        if($window.scrollTop()>100){ 
            $scrollTopBtn.addClass('is-visible');
        }else{
            $scrollTopBtn.removeClass('is-visible') 
        }
    }) // hiding and showing up-to-btn

    $scrollTopBtn.on("click",function(){
        $('html,body').animate({
            scrollTop:0
        },500)
    })

});