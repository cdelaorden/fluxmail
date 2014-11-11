/**
 * @jsx React.DOM
 */

var React = require('react'),
    MailStore = require("../../stores/mail_store");

var MessageItem = React.createClass({
  render: function(){
    return (
      <tr>
        <td>
          <strong>{this.props.message.fromName}</strong>
        </td>
        <td>
          {this.props.message.subject}
        </td>
        <td>
          {this.props.message.date}
        </td>
      </tr>
    );
  }
});

var MessageList = React.createClass({
  render: function(){
    var items = this.props.messages.map(function(message){
      return (<MessageItem key={message.id} message={message} />);
    });
    return (
      <table className="table table-striped">
      <tbody>
      {items}
      </tbody>
      </table>
    );
  }
});


var Inbox = React.createClass({
  componentDidMount: function() {
    var inboxData = MailStore.getInbox(function(inboxData){
      this.setState({
        messages: inboxData.messages
      });
    }.bind(this));
  },
  getInitialState: function() {
    return { messages: []};
  },
  render: function() {
    return (
      <MessageList messages={this.state.messages} />
    );
  }

});

module.exports = Inbox;