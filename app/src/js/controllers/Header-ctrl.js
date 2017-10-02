/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");

//----------------------------
// REQUIRE 
//----------------------------

const DisplayGlobals_SRV = require('../services/DisplayGlobals-srv'); 




// ------------------------------------
// Constructor
// ------------------------------------

function Header_Ctrl () {

	this.menuOpened = false;
	_init.call(this);

}












// ------------------------------------
// Init
// ------------------------------------

function _init() {

	_setupHeaderResponsiveness.call(this);

};





// ------------------------------------
// Header Responsiveness
// ------------------------------------

function _setupHeaderResponsiveness() {

	let page = $('.page');
	let menu = $('.menu');
	let header = $('header');
	let navBtn = $('.menu-trigger button');
	let self = this;

	//on Navigation clicked
	navBtn.click(function() {

		let menuTrigger = $(this).parent();
		let headerSticky = $('.header--sticky');

		if (menuTrigger.hasClass('opened')) {
			menuTrigger.removeClass('opened').addClass('closed');
			page.animate({left: "0px"}, 300);
			headerSticky.animate({left: "0px"}, 300);
			menu.animate({right: "-200px"}, 300);
			menuTrigger.find('span').html('MENU');
			self.menuOpened = false;
		}else{
			menuTrigger.removeClass('closed').addClass('opened');
			page.animate({left: "-200px"}, 300);
			headerSticky.animate({left: "-200px"}, 300);
			menu.animate({right: "0px"}, 300);
			menuTrigger.find('span').html('CLOSE MENU');
			self.menuOpened = true;

			// setTimeout(function(){ 
			// 	_closeMenu();
			// }, 5000);
		}

		$(this).find('img.menu-trigger-open').toggle();
		$(this).find('img.menu-trigger-close').toggle();

	});	


	_onWindowScroll();

}


function _onWindowScroll() {

	let page = $('.page');
	let menu = $('.menu');
	let header = $('header');
	let navBtn = $('.menu-trigger button');
	let self = this;

	//To show/hide fixed header when scrolling
	let navOffsetWhenScroll = header.data('offset');
	$(window).on("scroll", function(e) {
		let pageOffset = page.offset().left;
		let headerSticky = $('.header--sticky');

		if ($(this).scrollTop() > navOffsetWhenScroll) {
			header.addClass("header--sticky");
			setTimeout(function() {
				header.addClass("animIn");
			}, 0);
		} else {
			header.removeClass("header--sticky animIn");
		}
		headerSticky.animate({left: pageOffset}, 0);

	});

}


function _unbindOnWindowScroll() {

	$(window).unbind("scroll");

}



function _closeMenu() {

	if (this.menuOpened) {

		let page = $('.page');
		let pageOffset = page.offset().left;
		let header = $('header');
		let headerSticky = $('.header--sticky');
		let navBtn = $('.menu-trigger button');
		let menu = $('.menu');

		//Menu Trigger
		navBtn.parent().removeClass('opened').addClass('closed');
		navBtn.find('img.menu-trigger-open').show();
		navBtn.find('img.menu-trigger-close').hide();
		navBtn.parent().find('span').html('MENU');

		//Page and Header animation
		page.animate({left: "0px"}, 300);
		headerSticky.animate({left: "0px"}, 300);
		menu.animate({right: "-200px"}, 300);



	}

}



Header_Ctrl.prototype.close = function () {

	_closeMenu.call(this);

};


Header_Ctrl.prototype.onWindowScroll = function () {

	_unbindOnWindowScroll.call(this);
	_onWindowScroll.call(this);

};












module.exports = Header_Ctrl;