$(document).ready(function() {
    setTimeout(function(){
        $('.preloader').fadeOut()
    },1000);
    $('.contact-us').click(function(){
        $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
    });
    $(".image-gallery .col-md-4.px-0").slice(0,6).show();
    $("#seeMore").click(function(e){
        e.preventDefault();
        $(".image-gallery .col-md-4.px-0:hidden").slice(0,3).fadeIn("slow").removeAttr('hidden');
        
        if($(".image-gallery .col-md-4.px-0:hidden").length == 0){
           $("#seeMore").fadeOut("slow");
          }
      });

    $('.filterOptions li a').click(function() {
        var ourClass = $(this).attr('class');
        $('.filterOptions li').removeClass('active');
        $(this).parent().addClass('active');

        if (ourClass == 'all') {
            $('.ourHolder').children('div.item').show();
        } else {
            $('.ourHolder').children('div:not(.' + ourClass + ')').hide();
            $('.ourHolder').children('div.' + ourClass).show();
        }
        return false;
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
});