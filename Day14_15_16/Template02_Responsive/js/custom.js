
$(document).ready(function() {
   
  $('.menu-bar').on('click', function() {
    $('.menu-bar, .nav').toggleClass('is-active');
  });
 
  $(window).on('scroll', function() {
    if ($('.menu-bar').hasClass('is-active')) {
      $('.menu-bar, .nav').removeClass('is-active');
    }
   if ($(this).scrollTop() > 100) {
          $('.scroll-top-wrapper').css('display', 'flex').fadeIn();
        }
        else {
          $('.scroll-top-wrapper').fadeOut();
        }
  });

  $('#scrollToTopBtn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);  
    return false;
  });

});
