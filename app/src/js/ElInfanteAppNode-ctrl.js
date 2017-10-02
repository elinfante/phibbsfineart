/*jslint node: true, unused: true, esnext: true */



//----------------------------
// REQUIRE  
//----------------------------

const DisplayGlobals_SRV = require('./services/DisplayGlobals-srv'); 
// const APICalls_SRV = require('./services/APICalls-srv');
const Main_CTRL = require('./controllers/Main-ctrl');
const JSONHandler_SRV = require('./services/JSONHandler-srv');








//----------------------------
//  Constructor
//----------------------------

function App_NODE () {

    console.log ("%c -> -------------------------------------- ", "background:#eee;", '');
    console.log ("%c -> -------------------------------------- ", "background:#eee;", '');
    console.log ("%c -> VERSION:", "background:#eee;", DisplayGlobals_SRV.getVersion() );
    console.log ("%c -> -------------------------------------- ", "background:#eee;", '');
    console.log ("%c -> -------------------------------------- ", "background:#eee;", '');


    _startElInfante.call(this);


}





function _startElInfante() {

    // _setupWindowEvents();
    _loadMasterConfig();

}



// function _setupWindowEvents() {

//     $(window).resize(function() {
//         DisplayGlobals_SRV.onResizeWindow();
//     });
//     DisplayGlobals_SRV.onResizeWindow();

// }






function _loadMasterConfig() {

    let masterConfig = $('body').data('master-config');

    JSONHandler_SRV.load(masterConfig, function(masterConfJSON) {
        
        console.log ("%c -> Master Config Succesfully Loaded => ", "background:#00ff00;", masterConfJSON);

        DisplayGlobals_SRV.setMasterConfig(masterConfJSON);

        new Main_CTRL();

    }.bind(this));

}





























module.exports = App_NODE;



