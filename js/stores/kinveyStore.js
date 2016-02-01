//
var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/appConstants');
var _ = require('underscore');
//
var KinveyAPI = require('../utils/kinveyAPI');
//
var kinveyData = {};
var kinveyInitDone = function(data){
  kinveyData = data;
}
var KinveyStore = _.extend({},EventEmitter.prototype,{
  getKinveyInitData:function(){
    return kinveyData;
  },
  emitChange: function(){
    this.emit('change');
  },
  addChangeListener: function(callback){
    this.on('change',callback);
  },
  removeChangerListener:function(callback){
    this.removeListener('change',callback);
  }
});
// Register
AppDispatcher.register(function(payload){
  var action = payload.action;
  var text = '';
  switch (action.actionType) {
    case AppConstants.KINVEY_INIT:
        kinveyInitDone(action.data);
      break;
    case AppConstants.KINVEY_CONNECT:
        KinveyAPI.initServerCallFromStore();
      break;
    default:
      return true;
  }
  KinveyStore.emitChange();
  return true;
});
//
module.exports = KinveyStore;
