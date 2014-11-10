/**
 * @jsx React.DOM
 */

var React = require('react'),
    Link = require("react-router").Link;

var Sidebar = React.createClass({

  render: function() {
    return (
      <div>
      <h4>Mail</h4>
      <ul className="nav nav-pills nav-stacked mailboxes" role="navigation">
        <li><Link to="inbox">Inbox</Link></li>
        <li><Link to="sent">Sent</Link></li>
        <li><Link to="trash">Trash</Link></li>
      </ul>
      </div>
    );
  }

});

module.exports = Sidebar;