/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");

//----------------------------
// REQUIRE 
//----------------------------

const DisplayGlobals_SRV = require('../../services/DisplayGlobals-srv'); 




// ------------------------------------
// Constructor
// ------------------------------------

function Email_Ctrl () {

	this.contentPage = $('.content-page');
	this.title = 'Email PAGE';
	console.log(this.title);

}



















Email_Ctrl.prototype.render = function () {

	this.contentPage.html(this.title);

};












module.exports = Email_Ctrl;