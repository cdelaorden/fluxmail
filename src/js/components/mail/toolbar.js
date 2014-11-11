/**
 * @jsx React.DOM
 */

var React = require("react");

var Toolbar = React.createClass({

  render: function() {
    return (
      <div className="mail-toolbar btn-toolbar well">
        <button type="button" className="btn btn-lg btn-primary">
          <span className="glyphicon glyphicon-pencil"></span>
          &nbsp;Compose
        </button>



        <button type="button" className="btn btn-lg btn-warning disabled">
          <span className="glyphicon glyphicon-remove"></span>
          &nbsp;Delete
        </button>
         <button type="button" className="btn btn-lg btn-danger disabled">
          <span className="glyphicon glyphicon-trash"></span>
          &nbsp;Mark as spam
        </button>
        <button type="button" className="btn btn-lg btn-success disabled">
          <span className="glyphicon glyphicon-forward"></span>
          &nbsp;Forward
        </button>
      </div>
    );
  }

});

module.exports = Toolbar;