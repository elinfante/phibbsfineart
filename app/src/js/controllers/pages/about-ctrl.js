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

function About_Ctrl () {

	this.contentPage = $('.content-page');
	this.title = 'About PAGE';

}
















About_Ctrl.prototype.render = function () {

	this.contentPage.html(HBTemplates.getTemplate('about_layout'));
	
};
















module.exports = About_Ctrl;