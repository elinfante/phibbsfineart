/**
 * Created by Juan Infante on 10/10/16.
 */

var Gallery = function(){






    var loadGalleryJSON = function(){

        let galleryConfig = $('body').data('gallery-config');

        $.ajax({
            dataType: "jsonp",
            jsonp: "callback",
            url: galleryConfig,
            // data: data,
            success: function(jsonObj) {
                console.log("JSON SUCCESS -->", jsonObj);
                loadGallery(jsonObj);

            },
            error : function(ret) {
                console.log ("%c -> JSON ERROR => ", "background:#ff0000;", ret);
                console.log ("%c -> NOTE => ", "background:#ff0000;", "NOTE:Let's check If It is a local galleryConfig. If so take the String and turn it into a JSON object:");

                if(ret.responseText) {
                    loadGallery(JSON.parse(ret.responseText));
                }else{
                    console.log("FATAL Error! Check the master config from index.html. Should be loaded from http:// not a relative json file.");
                }

            }
        });

    };





    var loadGallery = function(galleryJSON){

        console.log(galleryJSON.gallery.photos);
        $.each(galleryJSON.gallery.photos, function( index, value ) {
            loadThumb(value);
        });

        jQuery('#grid-container').cubeportfolio({
            lightboxGallery : false,
            mediaQueries :  [{width: 1440, cols: 5}, {width: 1024, cols: 3}, {width: 768, cols: 3}, {width: 480, cols: 3}, {width: 320, cols: 1}],
            caption: 'overlayBottomReveal'
         });

    };




    var loadThumb = function(photoObj) {

        var thumb = '<div class="cbp-item">';
        thumb += '  <div class="cbp-caption">';
        thumb += '      <div class="cbp-caption-defaultWrap">';
        thumb += '          <a href="'+photoObj.file_name+'" title="custom title 1" class="cbp-lightbox">';
        thumb += '              <img src="'+photoObj.file_name+'" alt="custom alt 1" width="100%"/>';
        thumb += '          </a>';
        thumb += '      </div>';
        thumb += '      <div class="cbp-caption-activeWrap">';
        thumb += '          <p>'+photoObj.title+'</p>';
        thumb += '          <p>'+photoObj.location+'</p>';
        thumb += '      </div>';
        thumb += '  </div>';
        thumb += '</div>';

        $('#grid-container').append(thumb);




    };





    return {
        init: function(){
            loadGalleryJSON();
        },
    };



}();

Gallery.init();







