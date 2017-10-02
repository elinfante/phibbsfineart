/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");

//----------------------------
// REQUIRE 
//----------------------------

const DisplayGlobals_SRV = require('../../services/DisplayGlobals-srv'); 
const HBTemplates = require('../../services/HBTemplates-srv');




// ------------------------------------
// Constructor
// ------------------------------------

function DesignItem_Ctrl (designItemMO) {

	this.contentPage = $('.content-page');
	this.designItemMO = designItemMO; 
	this.num_thumbs = 0;
	this.current_thumb = 1;

	_renderDesignItem.call(this);

}











function _renderDesignItem() {

	this.designItemMO.loaded = true;

	let projectDOM = HBTemplates.getTemplate('designs_layout',this.designItemMO);
	this.contentPage.append(projectDOM);

	_checkType.call(this, projectDOM);


}



function _checkType(projectDOM) {

	let type = this.designItemMO.type;
	if (type === "video") {
		_addVideo.call(this,projectDOM);
	}else{
		_addImages.call(this,projectDOM);
	}


}

function _addVideo(projectDOM) {

	projectDOM.find('.arrows').html('');

	projectDOM.find('.project__img').addClass('video_holder');
	projectDOM.find('.project__img').html('');

	let iframeWidth = projectDOM.find('.video_holder').width();
	let iframeHeight = iframeWidth / 1.77;

	projectDOM.find('.video_holder').html('<iframe width="100%" height="'+iframeHeight+'" src="'+this.designItemMO.url+'" frameborder="0" allowfullscreen></iframe>');
	
	_setupWindowEvents.call(this);

}


function _setupWindowEvents() {

    $(window).resize(function() {
        DisplayGlobals_SRV.onResizeWindow();
    });

}



function _addImages(projectDOM) {
	_addMoreImagesBehaviour.call(this,projectDOM, this.designItemMO);
}



function _addMoreImagesBehaviour(projectDOM, projectMOD) {

	let self = this;
	this.num_thumbs = projectMOD.num_thumbs;

	if (this.num_thumbs > 1) {
		projectDOM.find('.arrows').find('a').click(function(e) {
			e.preventDefault();
			if ($(this).hasClass('left')){
				console.log("left");
				_loadPrevThumb.call(self, projectDOM, projectMOD);
			}else{
				console.log("right");
				_loadNextThumb.call(self, projectDOM, projectMOD);
			}
		});
	}else{
		projectDOM.find('.arrows').remove();
	}

	_loadImage.call(this, projectDOM, projectMOD);

}


function _loadImage(projectDOM,projectMOD) {

	projectDOM.find('.arrows>small').html(this.current_thumb+'/'+this.num_thumbs);
	projectDOM.find('.project__img > img').attr('src', 'assets/img/designs/'+projectMOD.id+'_'+this.current_thumb+'.jpg');

}



function _loadNextThumb(projectDOM, projectMOD) {

	this.current_thumb++;
	if (this.current_thumb > projectMOD.num_thumbs) {
		this.current_thumb = 1;
	}
	_loadImage.call(this, projectDOM, projectMOD);

}



function _loadPrevThumb(projectDOM, projectMOD) {

	this.current_thumb--;
	if (this.current_thumb < 1) {
		this.current_thumb = projectMOD.num_thumbs;
	}
	_loadImage.call(this, projectDOM, projectMOD);

}










module.exports = DesignItem_Ctrl;