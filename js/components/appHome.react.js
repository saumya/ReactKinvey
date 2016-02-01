// Controller View
//
var React = require('react');
var KinveyStore = require('../stores/kinveyStore');
var AppActions = require('../actions/appActions');
//
var DummyHomeComponent = require('./dummyHome.react');
var LoginComponent = require('./login.react');
//
var getKinveyState = function(){
  var obj = { kinvey:KinveyStore.getKinveyInitData() };
  console.log('AppHome:getKinveyState:',obj);
  return obj;
};
// Component
var AppHome = React.createClass({
  getInitialState: function(){
    var obj = getKinveyState();
    return obj;
  },
  componentDidMount:function(){
    KinveyStore.addChangeListener(this._onChange);
  },
  componentWillUnmount:function(){
    KinveyStore.removeChangerListener(this._onChange);
  },
  render: function(){
    console.log('render:kinveyData:this.state',this.state);
    var self = this;
    var partial = null;
    if(this.state.kinvey.appName){
      partial = <LoginComponent />;
    }else {
      partial = <DummyHomeComponent name={this.props.name} message={this.props.message} />
    }
    // render
    return (
      <div className="row">
        {partial}
      </div>
    );
  },
  _onChange: function(){
    this.setState(getKinveyState());
  },
  _onKinveyClick: function(event){
    event.preventDefault();
    event.stopPropagation();
    //console.log('_onKinveyClick:event:',event);
    AppActions.kinveyConnect();
  }
});
module.exports = AppHome;
