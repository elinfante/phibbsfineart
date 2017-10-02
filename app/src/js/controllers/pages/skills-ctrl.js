/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");

//----------------------------
// REQUIRE 
//----------------------------

const DisplayGlobals_SRV = require('../../services/DisplayGlobals-srv'); 




// ------------------------------------
// Constructor
// ------------------------------------

function Skills_Ctrl () {

	this.contentPage = $('.content-page');
	this.title = 'Skills PAGE';
	console.log(this.title);

}



















Skills_Ctrl.prototype.render = function () {

	this.contentPage.html(this.title);

};












module.exports = Skills_Ctrl;