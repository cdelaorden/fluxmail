/**
 * @jsx React.DOM
 */

var React = require("react"),
    Link = require("react-router").Link,
    Navigation = require("react-router").Navigation,
    MailStore = require("../../stores/mail_store");

var MessageItem = React.createClass({
  render: function(){
    var messageCssClass = this.props.message.read ? "mail-item-row": "mail-item-row mail-unread";
    return (
      <tr className={ messageCssClass } onClick={this.onMessageClick} >
        <td>
          <input type="checkbox" name="mail-item-select" className="js-mail-item" value={this.props.message.id} onClick={this.stopBubbling} onChange={this.onMessageSelect} />
        </td>
        <td>
          <Link to="message" className="mail-item-from" params={{ id: this.props.message.id }}>{this.props.message.fromName}</Link>
        </td>
        <td>
          <Link to="message" className="mail-item-subject" params={{ id: this.props.message.id }}>{this.props.message.subject}</Link>
        </td>
        <td>
          {this.props.message.date}
        </td>
      </tr>
    );
  },
  stopBubbling: function(event){
    event.stopPropagation();
  },
  onMessageSelect: function(event){
    event.stopPropagation();
    //forward to parent event handler
    this.props.onSelect(event, this.props.message, event.target.checked);
  },
  onMessageClick: function(event){
    event.stopPropagation();
    //forward to parent event handler
    this.props.onClick(event, this.props.message);
  }
});

var MessageList = React.createClass({
  render: function(){
    var items = this.props.messages.map(function(message){
      return (<MessageItem key={message.id} message={message} onSelect={this.props.onSelectMessage} onClick={this.props.onClickMessage} />);
    }.bind(this));
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
  mixins: [Navigation],
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
    return { messages: [], selectedMessages: []};
  },
  render: function() {
    return (
      <MessageList messages={this.state.messages} onClickMessage={this.onClickMessage} onSelectMessage={this.onSelectMessage} />
    );
  },
  onStoreChange: function(){

  },
  onSelectMessage: function(event, message, isSelected){
    //console.log("Message " + message.id + " selected", isSelected);
    this.props.onSelect(message, isSelected);
  },
  onClickMessage: function(event, message){
    event.preventDefault();
    //navigate!
    this.transitionTo("message", { id: message.id} );
  }

});

module.exports = Inbox;