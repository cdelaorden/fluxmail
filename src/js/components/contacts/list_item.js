/**
 * @jsx React.DOM
 */

var React = require("react"),
    AppActions = require("../../actions/app_actions");

var ContactListItem  = React.createClass({
  handleContactClick: function(){
    AppActions.editContact(this.props.contact.id);
  },
  render: function() {
    var twitterLink = "http://twitter.com/" + this.props.contact.twitter;
    return (
      <tr>
          <td>{this.props.contact.id}</td>
          <td>{this.props.contact.fname + " " + this.props.contact.lname}</td>
          <td><a href={twitterLink}>@{this.props.contact.twitter}</a></td>
          <td>
            <button onClick={this.handleContactClick}>Edit</button>
          </td>
        </tr>
    );
  }

});

module.exports = ContactListItem;