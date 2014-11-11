var Dispatcher = require("./dispatcher");
var _ = require("underscore");

var AppDispatcher = _.extend(Dispatcher.prototype, {
  handleViewAction: function(action){
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }
});

module.exports = AppDispatcher;