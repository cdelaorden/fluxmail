var React = require("react"),
    Router = require("react-router"),
    Routes = Router.Routes,
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Redirect = Router.Redirect,
    App = require("./components/app"),
    Mail = require("./components/mail"),
    Profile = require("./components/profile"),
    Contacts = require("./components/contacts");

module.exports = (
  <Routes location="hash">
    <Route name="app" path="/" handler={App}>
      <Route name="mail" path="mail" handler={Mail.Main}>
        <Route name="inbox" path="inbox" handler={Mail.Inbox} />
        <Route name="sent" path="sent" handler={Mail.Sent}  />
        <Route name="trash" path="trash" handler={Mail.Trash} />
        <Route name="message" path="message/:id" handler={Mail.Message} />
        <DefaultRoute path="inbox" handler={Mail.Inbox} />
      </Route>
      <Route name="contacts" path="contacts" handler={Contacts.Main} />
      <Route name="profile" path="profile" handler={Profile.Main} />
      <Redirect to="inbox" />
    </Route>
  </Routes>);

