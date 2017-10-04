/**
 * Created by Juan Infante on 10/10/16.
 */

var FineArtNav = function(){



    var dataHome = false;


	/**
	 * add behaviour to the navigation
	 */
    var setNav = function(button){

        loadNavOptions();

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
     * load nav options from json file
     */
    var loadNavOptions = function(button){

        let navConfig = $('body').data('menu-config');


        $.ajax({
            dataType: "jsonp",
            jsonp: "callback",
            url: navConfig,
            // data: data,
            success: function(jsonObj) {
                console.log("JSON SUCCESS -->", jsonObj);
                loadMenu(jsonObj);

            },
            error : function(ret) {
                console.log ("%c -> JSON ERROR => ", "background:#ff0000;", ret);
                console.log ("%c -> NOTE => ", "background:#ff0000;", "NOTE:Let's check If It is a local navConfig. If so take the String and turn it into a JSON object:");

                if(ret.responseText) {
                    loadMenu(JSON.parse(ret.responseText));
                }else{
                    console.log("FATAL Error! Check the master config from index.html. Should be loaded from http:// not a relative json file.");
                }

            }
        });

    };




    var loadMenu = function(menuJSON){

        $('.menu__nav').html('<ul></ul>');

        $.each(menuJSON.nav.menu, function( index, value ) {
            // console.log(value, dataHome);

            var liClass = (value.margin_bottom) ? 'class="bttm-margin"' : '';

            if (dataHome) {

                $('.menu__nav').find('ul').append('<li '+liClass+'><a href="'+value.folder_url+'">'+value.label.toUpperCase()+'</li>')

            }else{

                if (value.label === "home") {
                    $('.menu__nav').find('ul').append('<li '+liClass+'><a href="'+value.folder_url+'">'+value.label.toUpperCase()+'</li>')
                }else{
                    $('.menu__nav').find('ul').append('<li '+liClass+'><a href="../'+value.folder_url+'">'+value.label.toUpperCase()+'</li>')
                }
                
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




    var getScriptParameters = function() {

      var scripts = document.getElementsByTagName('script');
      for(var i = 0, l = scripts.length; i < l; i++){
        console.log(scripts[i].src);
        if( scripts[i].src.includes('js/nav.js') ){
            console.log("what I get from script....", scripts[i].getAttribute('data-home'))
          dataHome = Number(scripts[i].getAttribute('data-home'));
          console.log(dataHome)
          break;
        }
      }

    };




    return {
        init: function(){

            getScriptParameters();

            setNav();
            setFooterArrowUP();

        },
    };



}();

FineArtNav.init();







