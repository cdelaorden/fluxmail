var React = require("react"),
    //put jquery in global for bootstrap
    jQuery = window.jQuery = require("jquery"),
    //put underscore in global for commodity
    _ = window._ = require("underscore"),
    Bootstrap = require("bootstrap"),
    Header = require("./common/header"),
    Footer = require("./common/footer");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container-fluid main-container">
          <this.props.activeRouteHandler />
        </div>
        <Footer />
      </div>
    );
  }

});

module.exports = App;