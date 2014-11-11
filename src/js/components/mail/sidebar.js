/**
 * @jsx React.DOM
 */

var React = require('react'),
    ActiveState = require("react-router").ActiveState,
    Link = require("react-router").Link;

var Sidebar = React.createClass({

  mixins: [ActiveState],

  render: function() {
    var inboxActive = this.isActive("inbox"),
        sentActive = this.isActive("sent"),
        trashActive = this.isActive("trash");

    return (
      <div>
      <h4>Mail</h4>
      <ul className="nav nav-pills nav-stacked mailboxes" role="navigation">
        <li className={ inboxActive ? "active" : ""}><Link to="inbox">Inbox</Link></li>
        <li className={ sentActive ? "active" : ""}><Link to="sent">Sent</Link></li>
        <li className={ trashActive ? "active" : ""}><Link to="trash">Trash</Link></li>
      </ul>
      </div>
    );
  }

});

module.exports = Sidebar;