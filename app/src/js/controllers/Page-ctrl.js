/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");

//----------------------------
// REQUIRE 
//----------------------------

const DisplayGlobals_SRV = require('../services/DisplayGlobals-srv'); 
const projects_CTRL = require('../controllers/pages/projects-ctrl');
const clients_CTRL = require('../controllers/pages/clients-ctrl');
const skills_CTRL = require('../controllers/pages/skills-ctrl');
const email_CTRL = require('../controllers/pages/email-ctrl');
const about_CTRL = require('../controllers/pages/about-ctrl');
const designs_CTRL = require('../controllers/pages/designs-ctrl');




// ------------------------------------
// Constructor
// ------------------------------------

function Page_Ctrl (pagesArray) {

	this.contentPage = $('.content-page');
	this.pagesArray = pagesArray;

	_buildPages.call(this);

}




function _buildPages() {

	let self = this;
	$.each(this.pagesArray, function( index, value ) {
		let pageHash = value.hash.slice(1);
		value.objRef = eval('new '+pageHash+'_CTRL()');
	});
	// this.pagesArray[0].objRef = eval('new projects_CTRL()');
}




function _loadPage(hash) {

	let pageObjRef = _getPageRef.call(this,hash);
	pageObjRef.render();

}



function _getPageRef(hash) {

	let pageObjRef = false;
	$.each(this.pagesArray, function( index, value ) {
		// console.log("aaaaaaa", value.hash, hash, value.objRef);
		if (value.hash === hash) {
			pageObjRef = value.objRef;
		}
	});
	return pageObjRef;
}




Page_Ctrl.prototype.loadPage = function (hash) {

	this.contentPage.html('');
	_loadPage.call(this,hash);
	$(window).scrollTop(0);
	
};











module.exports = Page_Ctrl;