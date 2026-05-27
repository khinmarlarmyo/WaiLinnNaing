$(document).ready(function () {
    $('.menu-bar').click(function () {
        $(this).toggleClass('is-active');

        $('.nav-items').toggleClass('is-active');
    });
     
   $(function(){
     $('.fifth-link-items .fifth-link-item').heightLine();
   })
});