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