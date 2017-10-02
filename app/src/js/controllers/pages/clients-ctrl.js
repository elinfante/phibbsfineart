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

function Clients_Ctrl () {

	this.contentPage = $('.content-page');
	this.title = 'Clients PAGE';
	console.log(this.title);

}



















Clients_Ctrl.prototype.render = function () {

	this.contentPage.html(HBTemplates.getTemplate('clients_layout'));

};












module.exports = Clients_Ctrl;