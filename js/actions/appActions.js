//
var AppDispatcher = require('../dispatcher/appDispatcher');
var AppConstants  = require('../constants/appConstants');
//var KinveyAPI = require('../utils/kinveyAPI');
//
var AppActions = {
  initKinveyConnection: function(data){
    var action  = {
      actionType:AppConstants.KINVEY_CONNECT,
      data:data
    };
    AppDispatcher.handleAction(action);
  },
  kinveyConnect: function(data){
    var action  = {
      actionType:AppConstants.KINVEY_CONNECT,
      data:data
    };
    AppDispatcher.handleAction(action);
  },
  kinveyConnectionSuccess: function(data){
    console.log('AppActions:initKinveySuccess');
    var action = {
      actionType:AppConstants.KINVEY_INIT,
      data:data
    };
    AppDispatcher.handleAction(action);
  }
};
module.exports = AppActions;
