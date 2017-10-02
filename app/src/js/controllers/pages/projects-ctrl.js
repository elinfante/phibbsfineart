/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");

//----------------------------
// REQUIRE 
//----------------------------

const DisplayGlobals_SRV = require('../../services/DisplayGlobals-srv'); 
const HBTemplates = require('../../services/HBTemplates-srv');
const ProjectItem = require('./projectItem-ctrl');




// ------------------------------------
// Constructor
// ------------------------------------

function Projects_Ctrl () {

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
	let allProjects = masterConfig.elInfanteApp.projects;

	$.each(allProjects, function( index, projectItemMO ) {

		projectItemMO["pos"] = index + 1;
		projectItemMO["loaded"] = false;

	});

}





//This function is used when we scroll down the page so the user does not have to load all thunbs in one go
function _loadNextBunchProjects() {

	let self = this;
	let masterConfig = DisplayGlobals_SRV.getMasterConfig();
	let allProjects = masterConfig.elInfanteApp.projects;

	var numThumbsLoaded = 0;
	var allProjectsLoaded = true;
	$.each(allProjects, function( index, projectItemMO ) {

		if (!projectItemMO.loaded) {
			self.projectRefArray[index] = new ProjectItem(projectItemMO);
			numThumbsLoaded++;

			if (numThumbsLoaded == self.num_thumbs_perpage){
				//stop loading, number of thumbs per page have reached the limit
				//let's wait until user scrolls down to load more thumbs
				return false;
			}
			allProjectsLoaded = false;
		}

	});

	if (allProjectsLoaded) _allProjectsLoaded();

	DisplayGlobals_SRV.getHeaderRef().onWindowScroll();

	_addScrollEvent.call(this);
	

}


function _allProjectsLoaded() {

	console.log("ALL PROJECTS HAVE BEEN LOADED!!!!!!");
	$(window).unbind('scroll');

}


function _reset() {

	this.project_index = 0;

	let self = this;
	let masterConfig = DisplayGlobals_SRV.getMasterConfig();
	let allProjects = masterConfig.elInfanteApp.projects;

	$.each(allProjects, function( index, projectItemMO ) {

		projectItemMO["loaded"] = false;

	});

}



Projects_Ctrl.prototype.render = function () {

	_reset.call(this);
	_loadNextBunchProjects.call(this);


};












module.exports = Projects_Ctrl;