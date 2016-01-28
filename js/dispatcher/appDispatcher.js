//
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
AppDispatcher.handleAction = function(action){
  var viewAction = { source: 'VIEW_ACTION', action:action };
  this.dispatch(viewAction);
};
module.exports = AppDispatcher;
