/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");

//----------------------------
// REQUIRE 
//----------------------------

const DisplayGlobals_SRV = require('../../services/DisplayGlobals-srv'); 
const HBTemplates = require('../../services/HBTemplates-srv');
const designItem = require('./designItem-ctrl');




// ------------------------------------
// Constructor
// ------------------------------------

function Designs_Ctrl () {

	this.projectRefArray = [];
	this.project_index = 0;
	this.num_thumbs_perpage = 15;

	_init.call(this);

}












function _init() {

	_setupLoadedFlag.call(this);

}


function _addScrollEvent() {

	var self = this;
	$(window).scroll(function() {
	    if (_isElementInViewport( $("footer")[0] )) {
			_loadNextBunchProjects.call(self);
	    }
	});

}



function _isElementInViewport(el) {
	var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && //* or $(window).height()
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) //* or $(window).width()
    );
}



function _setupLoadedFlag() {

	let self = this;
	let masterConfig = DisplayGlobals_SRV.getMasterConfig();
	let allDesigns = masterConfig.elInfanteApp.designs_videos;

	$.each(allDesigns, function( index, designItemMO ) {

		designItemMO["pos"] = index + 1;
		designItemMO["loaded"] = false;

	});

}





//This function is used when we scroll down the page so the user does not have to load all thunbs in one go
function _loadNextBunchProjects() {

	let self = this;
	let masterConfig = DisplayGlobals_SRV.getMasterConfig();
	let allDesigns = masterConfig.elInfanteApp.designs_videos;

	var numThumbsLoaded = 0;
	var allDesignsLoaded = true;
	$.each(allDesigns, function( index, designItemMO ) {

		if (!designItemMO.loaded) {
			self.projectRefArray[index] = new designItem(designItemMO);
			numThumbsLoaded++;

			if (numThumbsLoaded == self.num_thumbs_perpage){
				//stop loading, number of thumbs per page have reached the limit
				//let's wait until user scrolls down to load more thumbs
				return false;
			}
			allDesignsLoaded = false;
		}

	});

	if (allDesignsLoaded) _allDesignsLoaded();

	DisplayGlobals_SRV.getHeaderRef().onWindowScroll();

	_addScrollEvent.call(this);
	

}


function _allDesignsLoaded() {

	console.log("ALL DESIGNS HAVE BEEN LOADED!!!!!!");
	$(window).unbind('scroll');

}


function _reset() {

	this.project_index = 0;

	let self = this;
	let masterConfig = DisplayGlobals_SRV.getMasterConfig();
	let allDesigns = masterConfig.elInfanteApp.designs_videos;

	$.each(allDesigns, function( index, designItemMO ) {

		designItemMO["pos"] = index + 1;
		designItemMO["loaded"] = false;

	});

}



Designs_Ctrl.prototype.render = function () {

	_reset.call(this);
	_loadNextBunchProjects.call(this);


};
















module.exports = Designs_Ctrl;