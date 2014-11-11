var AppStore = require("./base"),
    AppConst = require("../constants/app_constants"),
    AppDispatcher = require("../dispatchers/app_dispatcher"),
    $ = require("jquery"),
    _ = require("underscore");

/* private state & methods */
var _mailData;
function loadMail(callback){
  if(!_mailData){
    $.get("/data/mail.json")
    .done(function(data){
      _mailData = data;
      callback(_mailData);
    });
  }
  else {
    callback(_mailData);
  }
}

/* create Store from spec */
var MailStore = AppStore.createStore({
  SELECT_MAIL_EVENT: "select:mail",
  getInbox: function(callback){
    loadMail(function(data){
      callback(data.inbox);
    });
  },
  getSent: function(callback){
    loadMail(function(data){
      callback(data.sent);
    });
  },
  getTrash: function(callback){
    loadMail(function(data){
      callback(data.trash);
    });
  },
  //required: the dispatcher this app registers with
  dispatcher: AppDispatcher,
  //required: the dispatcher callback function
  dispatcherCallback: function(payload){
    var action = payload.action;
    switch(action.actionType){
    case AppConst.LOAD_MAIL:
      console.log("MailStore - Load Mail");
      loadMail(function(){
        MailStore.emitChange();
      });
      break;
    case AppConst.VIEW_MAIL:
      console.log("MailStore - View mail");
      break;
    }
  },
});

module.exports = MailStore;

