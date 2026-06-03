
$(document).ready(function () {

  // 💡 ၁။ Mouse ဖယ်လိုက်ရင် ချက်ချင်းမပိတ်ဘဲ ခဏစောင့်ဖို့ variable တစ်ခု ကြေညာထားရပါမယ်
  let hoverTimeout;

  $('.scroll-top-wrapper').hover(
    function () {
      clearTimeout(hoverTimeout);

      const $links = $('.quick-nav-menu a');
      const totalLinks = $links.length;

      $('.quick-nav-menu').css('visibility', 'visible');

      $links.each(function (index) {
        const startY = -100;
        const endY = 60;
        const y = startY + (index / (totalLinks - 1)) * (endY - startY);

        const curveFactor = Math.sin((index / (totalLinks - 1)) * Math.PI);

        const baseOffset = -70;
        const maxArcPush = -30;
        const x = baseOffset + (curveFactor * maxArcPush);

        $(this).css({
          'transform': `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`,
          'opacity': '1',
          'transition-delay': `${index * 0.06}s`
        });
      });
    },
    function () {
      const $links = $('.quick-nav-menu a');
      const totalLinks = $links.length;

      hoverTimeout = setTimeout(function () {

        $links.each(function (index) {
          const reverseDelay = (totalLinks - 1 - index) * 0.08;

          $(this).css({
            'transform': 'translate(-50%, -50%) scale(0.5)',
            'opacity': '0',
            'transition-delay': `${reverseDelay}s`
          });
        });

        setTimeout(function () {
          if (!$('.scroll-top-wrapper').is(':hover')) {
            $('.quick-nav-menu').css('visibility', 'hidden');
          }
        }, totalLinks * 80);

      }, 200);
    }
  );
  $('.menu-bar').on('click', function () {
    $('.menu-bar, .nav').toggleClass('is-active');
  });

  $(window).on('scroll', function () {
    if ($('.menu-bar').hasClass('is-active')) {
      $('.menu-bar, .nav').removeClass('is-active');
    }
    if ($(this).scrollTop() > 100) {
      $('.scroll-top-wrapper').addClass('show');
    }
    else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });

  $('#scrollToTopBtn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });


  $('.slider-items').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '150px',
    infinite: true,
    arrows: false,
    dots: true,
    draggable: true,
    swipe: true,

    autoplay: true,
    autoplaySpeed: 1000,
    speed: 800,
    pausOnHover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '50px',
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '150px',
          arrows: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 800,
          pausOnHover: true,
        }
      }
    ]
  });
});
