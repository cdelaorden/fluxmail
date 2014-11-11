/**
 * @jsx React.DOM
 */

var React = require("react");
    AppActions = require("../../actions/app_actions"),
    MailStore = require("../../stores/mail_store"),
    AppConst = require("../../constants/app_constants");

var MessageView  = React.createClass({
  componentDidMount: function() {
    MailStore.getMessage("inbox", this.props.params.id, function(m){
      this.setState({
        message: m
      });
    }.bind(this));
  },

  getInitialState: function() {
    return {
      message : {
        id: 0,
        subject: "",
        fromName: "",
        fromAddress: "",
        to: "",
        body: "",
        date: ""
      }
    };
  },

  render: function() {
    return (
      <div className="message-view">
        <div className="row">
          <div className="col-md-12 message-subject">
            <strong>{this.state.message.subject}</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 message-from">
            <span className="message-from-name">
              {this.state.message.fromName}
            </span>
            <span className="message-from-address">{this.state.message.fromAddress}</span>
          </div>
          <div className="col-md-3">
            <div className="col-md-6">
              {this.state.message.date}
            </div>
            <div className="col-md-6">
              Actions
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 message-to">
            {this.state.message.to}
          </div>
          <div className="col-md-12 message-body">
            {this.state.message.body}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = MessageView;