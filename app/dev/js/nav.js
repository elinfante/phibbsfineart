/**
 * Created by Juan Infante on 10/10/16.
 */

var FineArtNav = function(){






	/**
	 * add behaviour to the navigation
	 */
    var setNav = function(button){

        $('.menu-trigger').click(function() {

            if ( $(this).hasClass('opened') ) {
                $(this).removeClass('opened');
                $(this).find('i').removeClass().addClass('fa fa-bars');
                $('#main-holder').animate({left: "0px"}, 300);
                $('.menu').animate({left: "-300px"}, 300);
            }else{
                $(this).find('i').removeClass().addClass('fa fa-close');
                $('#main-holder').animate({left: "300px"}, 300);
                $('.menu').animate({left: "0px"}, 300);
                $(this).addClass('opened');
            }
                
        });

    };





    /**
     * add functionality to the button that sits on the right hand side of the footer, arrow up
     */
    var setFooterArrowUP = function(button){

        $('footer > span').click(function() {

            $("html, body").animate({ scrollTop: 0 }, "slow");
                
        });

    };






    return {
        init: function(){
            setNav();
            setFooterArrowUP();
        },
    };



}();

FineArtNav.init();







