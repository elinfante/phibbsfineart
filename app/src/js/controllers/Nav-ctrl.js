/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");

//----------------------------
// REQUIRE 
//----------------------------

const DisplayGlobals_SRV = require('../services/DisplayGlobals-srv'); 




// ------------------------------------
// Constructor
// ------------------------------------

function Navigation_Ctrl (pagesArray) {

	this.pagesArray = pagesArray;
	this.pageSelected = this.pagesArray[0].hash;
	this.nav = $('.menu__nav');

	_buildMenu.call(this);
	_linkAboutMe.call(this);
	

}








function _buildMenu() {

	let self = this;
	$.each(this.pagesArray, function( index, value ) {
	  let html = '<ul class="nav__list">';
      html += '<li>';
      html += '<a class="visited" href="'+value.hash+'" title="">'+value.label+'</a>';
      html += '</li>';
      html += '</ul>';
	  self.nav.append(html);
	});

	// this.nav.prepend('<ul class="nav__list"><li>MAIN MENU</li></ul>');
	// this.nav.prepend('<ul class=""><li></li></ul>');

	_setupNavBehaviour.call(this);
	_initHashChange.call(this);

}




function _initHashChange() {

	var self = this;
	// Bind the event.
	$(window).hashchange( function(){
		console.log("Location HASH---->",location.hash);
		_selectNavOptionHash.call(self,location.hash);
	})

	// Trigger the event (useful on page load).
	$(window).hashchange();

};





// ------------------------------------
// Navigation Behaviour
// ------------------------------------

function _setupNavBehaviour() {

	let self = this;
	this.nav.find('a').click(function(e) {
		e.preventDefault();
		let aTag = $(this);
		let hash = aTag.attr('href');

		if (hash !== "#email") {
			DisplayGlobals_SRV.getHeaderRef().close();
			_selectOption.call(self,aTag);
		}else{
			window.location.href = "mailto:j.infante.garcia@gmail.com?subject=Email from the site!";
		}

		
	});

}


function _selectNavOptionHash(hash) {

	if(!hash) hash = this.pageSelected;
	let aTag = this.nav.find('a[href="'+hash+'"]');
	_selectOption.call(this,aTag);

}



function _selectOption(aTag) {

	this.nav.find('a').removeClass('visited');
	aTag.addClass('visited');
	this.pageSelected = aTag.attr('href');
	location.hash = this.pageSelected;

	DisplayGlobals_SRV.getPageControllerRef().loadPage(this.pageSelected);

}





function _linkAboutMe() {

	let self = this;
	$('.aboutme').click(function(e) {
		e.preventDefault();
		location.hash = 'about';
	});
	$('.home').click(function(e) {
		e.preventDefault();
		location.hash = 'projects';
	});

}










module.exports = Navigation_Ctrl;