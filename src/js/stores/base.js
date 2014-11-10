var AppDispatcher = require("../dispatchers/app_dispatcher"),
    AppConst = require("../constants/app_constants"),
    EventEmitter = require("events").EventEmitter,
    $ = require("jquery"),
    _ = require("underscore");


var BaseStore = _.extend(EventEmitter, {
  dispatcherCallback: function(){},
  CHANGE_EVENT: "change",
  emitChange: function(){
    this.emit(this.CHANGE_EVENT)
  },
  addChangeListener: function(callback){
    this._addEventListener(this.CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this._removeEventListener(this.CHANGE_EVENT, callback);
  },
  dispatcherIndex: AppDispatcher.register(this.dispatcherCallback),
  //private methods
  _addEventListener: function(eventName, callback){
    this.on(eventName, callback);
  },
  _removeEventListener: function(eventName, callback){
    this.removeListener(eventName, callback);
  }
});