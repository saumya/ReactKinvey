// Controller View
//
var React = require('react');
var KinveyStore = require('../stores/kinveyStore');
//
var getKinveyState = function(){
  var obj = { kinvey:KinveyStore.getKinveyInitData() };
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
    return (
      <div className="row">
        <h3>Home</h3>
        <div className="one-half column">Welcome {this.props.name} </div>
        <div className="one-half column">{this.props.message}</div>
      </div>
    );
  },
  _onChange: function(){
    this.setState(getKinveyState());
  }
});
module.exports = AppHome;
