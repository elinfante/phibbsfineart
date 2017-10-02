/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");

//----------------------------
// REQUIRE 
//----------------------------

const DisplayGlobals_SRV = require('../services/DisplayGlobals-srv'); 
const Header_CTRL = require('../controllers/Header-ctrl');
const Nav_CTRL = require('../controllers/Nav-ctrl');
const Page_CTRL = require('../controllers/Page-ctrl');




// ------------------------------------
// Constructor
// ------------------------------------

function Main_Ctrl () {

	this.pagesArray = [	{label: 'Projects',hash: '#projects', objRef: false},
						{label: 'Clients',hash: '#clients', objRef: false},
						{label: 'Skills',hash: '#skills', objRef: false},
						{label: 'Fun',hash: '#designs', objRef: false},
						{label: 'Email Me',hash: '#email', objRef: false},
						{label: 'About Me',hash: '#about', objRef: false},
						];

	_init.call(this);

}












// ------------------------------------
// Init
// ------------------------------------

function _init() {

	DisplayGlobals_SRV.setPageControllerRef(new Page_CTRL(this.pagesArray));	
	DisplayGlobals_SRV.setHeaderRef(new Header_CTRL());
	DisplayGlobals_SRV.setNavRef(new Nav_CTRL(this.pagesArray));

};



















module.exports = Main_Ctrl;