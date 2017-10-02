/*jslint node: true, unused: true, esnext: true */




const _ = require("lodash");


//--------------------------------------
// CONSTRUCTOR
//--------------------------------------


let _DisplayGlobals;

function DisplayGlobals () {

  _DisplayGlobals = this;

}
















//--------------------------------------
// version
//--------------------------------------


let _version = "0.1";

DisplayGlobals.prototype.getVersion = function() {

  return _version;

};









//----------------------------
// App Node Ref
//----------------------------

let _appNode;

DisplayGlobals.prototype.setAppNodeRef = function(appNode) {

  _appNode = appNode;

};


DisplayGlobals.prototype.getAppNodeRef = function() {

    return _appNode;

};







//----------------------------
// Header Ref
//----------------------------

let _header;

DisplayGlobals.prototype.setHeaderRef = function(header) {

  _header = header;

};


DisplayGlobals.prototype.getHeaderRef = function() {

    return _header;

};






//----------------------------
// Nav Ref
//----------------------------

let _nav;

DisplayGlobals.prototype.setNavRef = function(nav) {

  _nav = nav;

};


DisplayGlobals.prototype.getNavRef = function() {

    return _nav;

};






//----------------------------
// Page Ref
//----------------------------

let _page;

DisplayGlobals.prototype.setPageControllerRef = function(page) {

  _page = page;

};


DisplayGlobals.prototype.getPageControllerRef = function() {

    return _page;

};

















































//----------------------------
// Master Config
//----------------------------

let _masterConf;  

DisplayGlobals.prototype.setMasterConfig = function (masterConf) {

  _masterConf = masterConf
  
};


DisplayGlobals.prototype.getMasterConfig = function () {

  return _masterConf;
  
};
























//----------------------------
//Resize Window
//----------------------------

DisplayGlobals.prototype.onResizeWindow = function () {

    let iframeWidth = $('div.video_holder').width();
    let iframeHeight = iframeWidth / 1.77;

    $('div.video_holder').find('iframe').attr({
        'width' : iframeWidth,
        'height' : iframeHeight,
    });

};

























module.exports = new DisplayGlobals ();
