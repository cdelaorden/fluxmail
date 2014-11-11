/**
 * @jsx React.DOM
 */

var React = require("react"),
    ContactStore = require("../../stores/contact_store");

var ContactsApp = React.createClass({
  render: function() {
    return (
      <h1>This is CONTACTS</h1>
    );
  }

});

module.exports.Main = ContactsApp;