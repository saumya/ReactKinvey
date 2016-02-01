//
var React = require('react');
var loginComponent = React.createClass({
  render:function(){
    var self = this;
    return (
      <div className="twelve columns">
        <h3>Login / Register</h3>
        <div className="one-half column"><button>Login</button></div>
        <div className="one-half column"><button>Register</button></div>
      </div>
    );
  }
});
module.exports = loginComponent;
