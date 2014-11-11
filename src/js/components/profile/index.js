/**
 * @jsx React.DOM
 */

var React = require('react');

var ProfileApp = React.createClass({

  render: function() {
    return (
      <div className="container">
        <h1>This is the Profile App</h1>
      </div>
    );
  }

});

module.exports.Main = ProfileApp;