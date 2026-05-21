$(document).ready(function () {
  $('.menu-bar').click(function () {
    $(this).toggleClass('is-active');

    $('.nav-items').toggleClass('is-active');
  });

  const $slides = $('.sliders .slider');
  let currentSlide = 0; 
  function showSlide(index) {
    $slides.eq(currentSlide).removeClass('active');
    if (index >= $slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = $slides.length - 1;
    } else {
      currentSlide = index;
    }
    $slides.eq(currentSlide).addClass('active');
  }
 
  
  $('.banner-click-btn.prev').click(function () {
    showSlide(currentSlide - 1);  
  });

  $('.banner-click-btn.next').click(function () {
    showSlide(currentSlide + 1);  
  });
 startAutoLoop();
});