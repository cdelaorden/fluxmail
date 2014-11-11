/**
 * @jsx React.DOM
 */

var React = require("react"),
    Sidebar = require("./sidebar"),
    Toolbar = require("./toolbar"),
    MailStore = require("../../stores/mail_store"),
    Actions = require("../../actions/app_actions");

var MailApp = React.createClass({
  componentDidMount: function() {
    Actions.loadMail();
  },
  render: function() {
    return (
      <div className="row">
        <aside>
          <div className="col-md-3">
          <Sidebar />
          </div>
        </aside>
        <div className="col-md-9">
        <Toolbar />
        <this.props.activeRouteHandler />
        </div>
      </div>
    );
  }

});

module.exports.Main = MailApp;
module.exports.Inbox = require("./inbox");
module.exports.Sent = require("./sent");
module.exports.Trash = require("./trash");
module.exports.Message = require("./message");