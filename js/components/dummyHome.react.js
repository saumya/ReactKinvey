//
var React = require('react');
var AppActions = require('../actions/appActions');
//
var DummyHomeComponent = React.createClass({
  render: function(){
    var self = this;
    return(
      <div className="twelve columns">
        <h3>Home</h3>
        <div className="one-half column">Welcome {this.props.name} </div>
        <div className="one-half column">{this.props.message}</div>
        <button onClick={self._onClickServerConnect}>Connect</button>
      </div>
    );
  },
  _onClickServerConnect: function(event){
    event.stopPropagation();
    event.preventDefault();
    console.log('_onClickServerConnect:event',event);// Synthetic Event
    console.log('_onClickServerConnect:event.nativeEvent:',event.nativeEvent);// Native Browser Event
    console.log('_onClickServerConnect:event.currentTarget',event.currentTarget);
    AppActions.initKinveyConnection(null);
  }
});
//
module.exports = DummyHomeComponent;
