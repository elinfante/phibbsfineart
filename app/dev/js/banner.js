/**
 * Created by Juan Infante on 10/10/16.
 */

var Banner = function(){






	/**
	 * Set height of the banner
	 */
    var setSizeWindow = function(button){

        $('.bg-slider').css('height',$(window).height());


        setTimeout(function() {
            $('.bg-slider').find('.slide:nth-child(1)').fadeOut(500);
            $('.bg-slider').find('.slide:nth-child(2)').fadeIn(500);
        },2000);

    };






    return {
        init: function(){
            setSizeWindow();
        },
    };



}();

Banner.init();







