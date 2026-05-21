$(document).ready(function () {

  $('.menu-bar').click(function () {
    $(this).toggleClass('is-active');

    $('.nav-items').toggleClass('is-active');
  });

  const $slides = $('.sliders .slider');
  let currentSlide = 0;
  let autoSlide;

  $slides.eq(currentSlide).addClass('active');

  function showSlide(index) {
    $slides.eq(currentSlide).removeClass('active');

    currentSlide =
      index >= $slides.length ? 0 :
        index < 0 ? $slides.length - 1 :
          index;

    $slides.eq(currentSlide).addClass('active');
  }

  function startAutoSlide() {
    clearInterval(autoSlide);  
    autoSlide = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 3000);
  }
  startAutoSlide();// Start auto slide

  $('.banner-click-btn.prev').click(function () {
    showSlide(currentSlide - 1);
    startAutoSlide();
  });

  $('.banner-click-btn.next').click(function () {
    showSlide(currentSlide + 1);
    startAutoSlide();
  });
});