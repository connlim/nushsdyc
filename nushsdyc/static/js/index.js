(function($){
  $(function(){

    var viewportHeight = $(window).height();
    var bannerHeight = $('#top-nav').height();
    var height = viewportHeight - bannerHeight;
    $('#index-banner').height(height);

    $('.parallax').parallax();

    $('#top-nav').removeClass('navbar-fixed');

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

    $('div[id^=sidenav-overlay]').remove();

  }); // end of document ready
})(jQuery); // end of jQuery name space