(function($){
  $(function(){

    $('.parallax').parallax();

    var stickyNavTop = $('#top-nav').offset().top;
     
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
              
        if (scrollTop > stickyNavTop) { 
            $('#top-nav').addClass('sticky');
            $(document.body).css('margin-top', '64px');
        } else {
            $('#top-nav').removeClass('sticky'); 
            $(document.body).css('margin-top', '0px');
        }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
      stickyNav();
    });


    $("#learn-more-button").click(function () {
        $("html, body").animate({ scrollTop: $("#top-container").offset().top - 64 }, 500);
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space