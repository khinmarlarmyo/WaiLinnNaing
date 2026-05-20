$(document).ready(function() {
  $('.menu-bar').click(function() { 
    $(this).toggleClass('is-active');
     
    $('.nav-items').toggleClass('is-active');
  });
});