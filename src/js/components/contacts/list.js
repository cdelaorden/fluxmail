/**
 * @jsx React.DOM
 */

var React = require("react"),
    ContactStore = require("../../stores/contact_store"),
    ContactItemView = require("./list_item"),
    AppActions = require("../../actions/app_actions");


function _getAllContacts(){
  return ContactStore.getAllContacts();
}

var ContactList = React.createClass({

  componentDidMount: function() {
    ContactStore.addChangeListener(this.onContactsChange);
  },

  getInitialState: function() {
    return {
      contacts : _getAllContacts()
    };
  },

  render: function() {
    var total = 0;
    var contactViews = this.state.contacts.map(function(contact){
      total++;

      return (
        <ContactItemView key={contact.id} contact={contact} />
      );
    });
    return (
      <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Twitter</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { contactViews }
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" className="text-right">Total: {total}</td>
        </tr>
      </tfoot>
      </table>
    );
  },

  onContactsChange: function(){
    this.setState({
      contacts: _getAllContacts()
    });
  }

});

module.exports = ContactList;