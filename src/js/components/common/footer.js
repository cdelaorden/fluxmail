var React = require("react");

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="footer">
        <div className="container-fluid">
        &copy; Carlos de la Orden 2014 - Made with React, Flux et al
        </div>
      </footer>
    );
  }

});

module.exports = Footer;
