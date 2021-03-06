// 0.1.0
var Kinvey = require('kinvey');
var AppActions = require('../actions/appActions');
//
var _init = function(){
  var promise = Kinvey.init({
    appKey    : 'xxxxxxx',
    appSecret : 'xxxxxxx'
  });
  promise.then(function(activeUser){
    console.log('Kinvey.init:SUCCESS: activeUser:',activeUser);
    var promise = Kinvey.ping();
    promise.then(function(response) {
      console.log('Kinvey.ping:SUCCESS: Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
      AppActions.kinveyConnectionSuccess(response);
    }, function(error) {
      console.log('Kinvey.ping:ERROR:', error);
      //console.log('Kinvey.ping:ERROR: Response: ' + error.description);
    });
  },function(error){
    console.log('Kinvey.init:ERROR:',error);
  });
};
// Public Object
var api = {
  init: function(){
    console.log('KinveyAPI:init');
  },
  initServer: function(data,AppActions){
    _init(AppActions);
  },
  initServerCallFromStore: function(){
    _init();
  }
};
module.exports = api;
