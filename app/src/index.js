/*jslint node: true, unused: true, esnext: true */


const DisplayGlobals_SRV = require('./js/services/DisplayGlobals-srv'); 


//----------------------------
// REQUIRE SPLASH SCREEN BYO
//----------------------------


const ElInfanteApp_NODE = require('./js/ElInfanteAppNode-ctrl');


_initApp.call(this);    			


function _initApp() {

	DisplayGlobals_SRV.setAppNodeRef(new ElInfanteApp_NODE());

}