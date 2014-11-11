var AppStore = require("./base"),
    AppConst = require("../constants/app_constants"),
    AppDispatcher = require("../dispatchers/app_dispatcher"),
    $ = require("jquery"),
    _ = require("underscore");

/* private state & methods */
var _mailData,
    _currentMessage;

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

function selectMessage(id){
  console.log("Current message is now", id);
  _currentMessage = id;
}

/* create Store from spec */
var MailStore = AppStore.createStore({
  SELECT_MAIL_EVENT: "select:mail",
  getInbox: function(callback){
    this.getMailbox("inbox", callback);
  },
  getSent: function(callback){
    this.getMailbox("sent", callback);
  },
  getTrash: function(callback){
    this.getMailbox("trash", callback);
  },
  getMailbox: function(mailbox, callback){
    loadMail(function(data){
      callback(data[mailbox]);
    });
  },
  getMessage: function(mailbox, id, callback){
    loadMail(function(data){
      var mailboxMessages = data[mailbox].messages;
      var message = _.find(mailboxMessages, function(m){
        return m.id === parseInt(id);
      });
      callback(message);
    });
  },
  //required: the dispatcher this app registers with
  dispatcher: AppDispatcher,
  //required: the dispatcher callback function
  dispatcherCallback: function(payload){
    var action = payload.action;
    switch(action.actionType){
    case AppConst.LOAD_MAIL:
      loadMail(function(){
        MailStore.emitChange();
      });
      break;
    case AppConst.VIEW_MAIL:
      console.log("MailStore - View mail");
      loadMail(function(){
        selectMessage(action.messageId);
        MailStore.emitChange();
      });
      break;
    }
  },
});

module.exports = MailStore;

