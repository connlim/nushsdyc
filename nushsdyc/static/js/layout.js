(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var stickyNavTop = $('#top-nav').offset().top;
     
    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
          
    if (scrollTop > stickyNavTop) { 
        $('#top-nav').addClass('sticky');
    } else {
        $('#top-nav').removeClass('sticky'); 
    }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
      stickyNav();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space