/**
 * @jsx React.DOM
 */

var React = require('react'),
    AppActions = require("../../actions/app_actions"),
    ContactStore = require("../../stores/contact_store");

var ContactEditView = React.createClass({
  getInitialState: function() {
    return {
      contact : ContactStore.getSelectedContact()
    };
  },
  componentDidMount: function() {
    ContactStore.addSelectListener(this.onSelectedContact);
  },
  componentWillUnmount: function() {
    ContactStore.removeSelectListener(this.onSelectedContact);
  },
  onSelectedContact: function(){
    console.log("selected contact change!", ContactStore.getSelectedContact());
    this.setState({
      contact: ContactStore.getSelectedContact()
    });
  },
  handleClick: function(e){
    e.preventDefault();
    var contact = {
      id: this.state.contact.id,
      fname: this.refs.firstName.getDOMNode().value,
      lname: this.refs.lastName.getDOMNode().value,
      twitter: this.refs.twitter.getDOMNode().value
    };
    //update it
    AppActions.updateContact(this.state.contact.id, contact);
    this.setState({
      contact: contact
    });
  },
  handleChange: function(e){
    var contact = this.state.contact;

  },
  render: function() {
    if(!this.state.contact){
      return (<div />);
    }
    else {
      return (
      <div>
        <h1>{ this.state.contact.fname + " " + this.state.contact.lname }</h1>
        <form role="form">
        <div className="form-group">
          <label className="control-label" forHtml="fname">First Name</label>
          <input type="text" name="fname" ref="firstName" className="form-control" defaultValue={ this.state.contact.fname } />
        </div>
        <div className="form-group">
          <label className="control-label" forHtml="lname">Last Name</label>
          <input type="text" name="lname" ref="lastName" className="form-control" defaultValue={ this.state.contact.lname } />
        </div>
        <div className="form-group">
          <label className="control-label" forHtml="twitter">First Name</label>
          <input type="text" name="twitter" ref="twitter" className="form-control" defaultValue={ this.state.contact.twitter } />
        </div>
        <div className="form-group">
          <button onClick={ this.handleClick }>
            <span className="glyphicon glyphicon-save"></span> Save
          </button>
        </div>
        </form>
      </div>
      );
    }
  }

});

module.exports = ContactEditView;