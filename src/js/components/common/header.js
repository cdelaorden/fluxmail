var React = require("react"),
    Link = require("react-router").Link;

var Header = React.createClass({
  doLogout: function(){
    console.log("Log out!");
    //TODO: dispatch action
  },
  render: function() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="app" className="navbar-brand">FluxMail</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="mail" className="navlink">Mail</Link></li>
              <li><Link to="contacts" className="navlink">Contacts</Link></li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Search</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span> My Account <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><Link to="profile">Edit profile</Link></li>
                  <li className="divider"></li>
                  <li><a href="#" onClick={ this.doLogout }>Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

});

module.exports = Header;