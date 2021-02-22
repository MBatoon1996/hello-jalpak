$('footer .bi-instagram').on({
    mouseenter: function(){
        $('.bi-twitter').css('opacity', '0.7');
        $('.bi-github').css('opacity', '0.7');
    },
    mouseleave: function(){
        $('.bi-twitter').css('opacity', '1.0');
        $('.bi-github').css('opacity', '1.0');
    }
});

$('.bi-twitter').on({
    mouseenter: function(){
        $('footer .bi-instagram').css('opacity', '0.7');
        $('.bi-github').css('opacity', '0.7');
    },
    mouseleave: function(){
        $('footer .bi-instagram').css('opacity', '1.0');
        $('.bi-github').css('opacity', '1.0');
    }
});

$('.bi-github').on({
    mouseenter: function(){
        $('.bi-twitter').css('opacity', '0.7');
        $('footer .bi-instagram').css('opacity', '0.7');
    },
    mouseleave: function(){
        $('.bi-twitter').css('opacity', '1.0');
        $('footer .bi-instagram').css('opacity', '1.0');
    }
});

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(200,1);}
        } 
      });
    }).scroll(); //invoke scroll-handler on page-load
  });