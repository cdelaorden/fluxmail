var EventEmitter = require("events").EventEmitter,
    _ = require("underscore");

var Store = {

  createStore: function(storeSpec){
    var newStore = _.extend(EventEmitter.prototype, {
      CHANGE_EVENT: "change",
      emitChange: function(){
        this.emit(this.CHANGE_EVENT);
      },
      addChangeListener: function(callback){
        this.on(this.CHANGE_EVENT, callback);
      },
      removeChangeListener: function(callback){
        this.removeListener(this.CHANGE_EVENT, callback);
      },
      dispatchCallback: function(payload){
        throw Error("No dispatcher callback provided to the Store");
      }
    });

    if(storeSpec.dispatcher && typeof(storeSpec.dispatcher.register) === "function"){
      newStore.dispatcherIndex = storeSpec.dispatcher.register(newStore.dispatcherCallback);
    }

    return _.extend(newStore, _.omit(storeSpec, "dispatcherCallback"));
  }
};


module.exports = Store;