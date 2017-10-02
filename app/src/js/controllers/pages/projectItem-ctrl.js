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

function ProjectItem_Ctrl (projectItemMO) {

	this.contentPage = $('.content-page');
	this.projectItemMO = projectItemMO; 
	this.num_thumbs = 0;
	this.current_thumb = 1;

	_renderProjectItem.call(this);

}











function _renderProjectItem() {

	this.projectItemMO.loaded = true;

	let projectDOM = HBTemplates.getTemplate('projects_layout',this.projectItemMO);
	this.contentPage.append(projectDOM);
	
	_addSkills.call(this,projectDOM, this.projectItemMO);
	_addMoreImagesBehaviour.call(this,projectDOM, this.projectItemMO);

}



function _addSkills(domProject, value) {

	let tagsArray = value.tags.split(',');
	$.each(tagsArray, function( index, skillTag ) {
		domProject.find('.skills').append('<span class="'+skillTag.toLowerCase()+'">'+skillTag.toLowerCase()+'</span>')
	});

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
	projectDOM.find('.project__img > img').attr('src', 'assets/img/projects/'+projectMOD.id+'_'+this.current_thumb+'.jpg');

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










module.exports = ProjectItem_Ctrl;