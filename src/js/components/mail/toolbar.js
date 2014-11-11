/**
 * @jsx React.DOM
 */

var React = require("react");

var Toolbar = React.createClass({
  render: function() {
    var disabledClass = this.props.selectedMessages.length ? "" : " disabled";
    var styles = {
      removeBtn: "btn btn-lg btn-warning" + disabledClass,
      trashBtn: "btn btn-lg btn-danger" + disabledClass,
      forwardBtn: "btn btn-lg btn-success" + (this.props.selectedMessages.length !== 1 ? " disabled": "")
    };

    return (
      <div className="mail-toolbar btn-toolbar well">
        <button type="button" className="btn btn-lg btn-primary">
          <span className="glyphicon glyphicon-pencil"></span>
          &nbsp;Compose
        </button>



        <button type="button" className={ styles.removeBtn }>
          <span className="glyphicon glyphicon-remove"></span>
          &nbsp;Delete
        </button>
         <button type="button" className={ styles.trashBtn }>
          <span className="glyphicon glyphicon-trash"></span>
          &nbsp;Mark as spam
        </button>
        <button type="button" className={ styles.forwardBtn }>
          <span className="glyphicon glyphicon-forward"></span>
          &nbsp;Forward
        </button>
      </div>
    );
  }

});

module.exports = Toolbar;