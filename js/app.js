// Application 1.0.0
(function(){
  var React = require('react');
  var ReactDOM = require('react-dom');
  var KinveyAPI = require('./utils/kinveyAPI');
  //
  var Home = require('./components/appHome.react');
  //
  var App = ReactDOM.render(
    <Home name="Forest" message="Happy to see you on React."/>,
    document.getElementById('react-app')
  );
  //
  KinveyAPI.init();
  KinveyAPI.initServer();
})();
