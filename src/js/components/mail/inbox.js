/**
 * @jsx React.DOM
 */

var React = require("react"),
    Link = require("react-router").Link,
    MailStore = require("../../stores/mail_store");

var MessageItem = React.createClass({
  render: function(){
    return (
      <tr className="mail-item-row">
        <td>
          <input type="checkbox" name="mail-item-select" className="js-mail-item" value={this.props.message.id} />
        </td>
        <td>
          <Link to="message" params={{ id: this.props.message.id }}><strong>{this.props.message.fromName}</strong></Link>
        </td>
        <td>
          <Link to="message" params={{ id: this.props.message.id }}>{this.props.message.subject}</Link>
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
      <table className="table table-striped table-hover">
      <tbody>
      {items}
      </tbody>
      </table>
    );
  }
});


var Inbox = React.createClass({
  componentDidMount: function() {
    MailStore.addChangeListener(this.onStoreChange);
    var inboxData = MailStore.getInbox(function(inboxData){
      this.setState({
        messages: inboxData.messages,
        selectedMessage: null
      });
    }.bind(this));
  },
  componentWillUpdate: function(nextProps, nextState) {
    MailStore.removeChangeListener(this.onStoreChange);
  },
  getInitialState: function() {
    return { messages: [], selectedMessage: null};
  },
  render: function() {
    if(this.state.selectedMessage) {
      <this.props.activeRouteHandler />
    }
    else {
      return (
      <MessageList messages={this.state.messages} />
    );
    }
  },
  onStoreChange: function(){

  }

});

module.exports = Inbox;