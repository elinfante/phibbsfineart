/**
 * Created by Juan Infante on 10/10/16.
 */

var Vision = function(){



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

    };



    var resizeBanner = function() {

        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        $('.bg-slider').css('height',windowHeight);

        
    };


    return {
        init: function(){
            setSizeWindow();

            $( window ).resize(function() {
              resizeBanner();
            });
            resizeBanner();


        },
    };



}();

Vision.init();







