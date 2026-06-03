
$(document).ready(function() { 
  const radius = 110; 

 
  $('.scroll-top-wrapper').hover(
    function() {
      const $links = $('.quick-nav-menu a');
      const totalLinks = $links.length;

      $('.quick-nav-menu').css('visibility', 'visible');

      $links.each(function(index) {
 
        const angle = 160 + (index / (totalLinks - 1)) * 100; 
        const radians = angle * (Math.PI / 180);
 
        const x = Math.round(radius * Math.cos(radians));
        const y = Math.round(radius * Math.sin(radians));

        $(this).css({
          'transform': `translate(${x}px, ${y}px) scale(1)`,
          'opacity': '1',
          'transition-delay': `${index * 0.08}s` 
        });
      });
    },
    
 
    function() {
      const $links = $('.quick-nav-menu a');
      const totalLinks = $links.length;

      $links.each(function(index) {
        const reverseDelay = (totalLinks - 1 - index) * 0.08;

        $(this).css({
          'transform': 'translate(0, 0) scale(0.5)',
          'opacity': '0',
          'transition-delay': `${reverseDelay}s` 
        });
      });

      setTimeout(function() {
        if (!$('.scroll-top-wrapper').is(':hover')) {
          $('.quick-nav-menu').css('visibility', 'hidden');
        }
      }, totalLinks * 80);
    }
  );
   
  $('.menu-bar').on('click', function() {
    $('.menu-bar, .nav').toggleClass('is-active');
  });
 
  $(window).on('scroll', function() {
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
