/**
 * Created by Juan Infante on 10/10/16.
 */

var Banner = function(){



    var current_slide = 1;
    var num_slides = 3;
    var bannerInterval;
    var intervalTime = 5000;
    var animTime = 1000;

	/**
	 * Set height of the banner
	 */
    var setSizeWindow = function(button){

        $('.bg-slider').css('height',$(window).height());

        bannerInterval = setInterval(function() {
            showNextSlide();
        },intervalTime);

    };


    var showNextSlide = function() {

        $('.bg-slider').find('.bg-img').fadeOut(function() { 
    
            current_slide ++;
            if (current_slide > num_slides) current_slide = 1;

            $(this).css('background-image','url(assets/banner/banner'+current_slide+'.png)');
            $(this).fadeIn(animTime);

        }); 

    };



    var resizeBanner = function() {

        
        
    };


    return {
        init: function(){
            setSizeWindow();

            $( window ).resize(function() {
              resizeBanner();
            });

        },
    };



}();

Banner.init();







