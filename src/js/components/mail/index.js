/**
 * @jsx React.DOM
 */

var React = require("react"),
    Sidebar = require("./sidebar"),
    MailStore = require("../../stores/mail_store");

var MailApp = React.createClass({
  componentDidMount: function() {
    //MailStore.addChangeListener(this.onMailStoreChange);
  },
  onMailStoreChange: function(){
    console.log("Mail App - Mail stored change!!");
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
        <h1>Mail</h1>
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