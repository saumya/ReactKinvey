//
var AppDispatcher = require('../dispatcher/appDispatcher');
var AppConstants = require('../constants/appConstants');
var AppActions = {
  initKinveySuccess: function(data){
    var action = {
      actionType  : AppConstants.KINVEY_INIT,
      data        : data
    };
    AppDispatcher.handleAction(action);
  }
};
module.exports = AppActions;
