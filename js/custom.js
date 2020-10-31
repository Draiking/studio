$(function() {
    'use strict'; // Start of use strict
   
  
     /*------------------------------------
    01. Sticky Menu
	-------------------------------------- */  
    var windows = $(window);
    var stick = $(".header-sticky");
	windows.on('scroll',function() {    
		var scroll = windows.scrollTop();
		if (scroll < 245) {
			stick.removeClass("sticky");
		}else{
			stick.addClass("sticky");
		}
	});
	
    /* =======================================
        For Menu
    =======================================*/
    $("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    });	
    /* =======================================
        Main Slider
    =======================================*/
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 2000,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
		}
	    // ======================= TESTIMONIAL  ======================= // 
     if($('#testimonial').length > 0){
        $("#testimonial").owlCarousel({
          dots: true,
          loop: true,
          autoplay: true,
          slideSpeed : 2000,
          margin: 0,
          responsiveClass: true,
          nav: false, 
             navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"], 
          responsive: {
            0: {
              items: 1,
              nav: false
            },
            480: {
              items: 1,
              nav: false
            },
            600: {
              items: 1,
             nav: false
            },
            1000: {
              items: 2,
              nav: false, 
              margin: 0
            }
          }
           
        });
    }	
    /*--------------------------
    scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

	/*------------------------------------------------------------------
        Year
    ------------------------------------------------------------------*/
	$(function(){
    var theYear = new Date().getFullYear();
    $('#year').html(theYear);
	});


});

/*------------------------------------------------------------------
WOW
------------------------------------------------------------------*/
 new WOW().init();
/*------------------------------------------------------------------
 Loader 
------------------------------------------------------------------*/
jQuery(window).on("load scroll", function() {
    'use strict'; // Start of use strict
    // Loader 
     $('#dvLoading').fadeOut('slow', function () {
            $(this).remove();
        });
	$('.google-map').on('click', function() {
            $('.google-map').find('iframe').css("pointer-events", "auto");
        });
	
});
/*======================================counter-up ========================================*/

$('.Count').each(function () {
    "use strict";
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
