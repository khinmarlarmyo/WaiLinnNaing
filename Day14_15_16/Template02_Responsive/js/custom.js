
$(document).ready(function() {
   
  $('.menu-bar').on('click', function() {
    $('.menu-bar, .nav').toggleClass('is-active');
  });
 
  $(window).on('scroll', function() {
    if ($('.menu-bar').hasClass('is-active')) {
      $('.menu-bar, .nav').removeClass('is-active');
    }
  });

});