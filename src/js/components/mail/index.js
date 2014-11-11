/**
 * @jsx React.DOM
 */

var React = require("react"),
    Sidebar = require("./sidebar"),
    Toolbar = require("./toolbar"),
    MailStore = require("../../stores/mail_store"),
    Actions = require("../../actions/app_actions");

var MailApp = React.createClass({
  getInitialState: function() {
    return {
      selectedMessages : []
    };
  },
  componentDidMount: function() {
    Actions.loadMail();
  },
  onSelectMessage: function(message, isSelected){
    //console.log("Message " + message.id + " " + (isSelected ? "selected" : "de-selected"));
    var currentMessages = this.state.selectedMessages;
    if(isSelected){
      currentMessages.push(message.id);
    }
    else {
      currentMessages = _.without(currentMessages, message.id);
    }
    this.setState({ selectedMessages: currentMessages });
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
        <Toolbar selectedMessages={this.state.selectedMessages} />
        <this.props.activeRouteHandler onSelect={this.onSelectMessage} />
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