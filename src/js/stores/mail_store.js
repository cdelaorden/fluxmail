var BaseStore = require("./base"),
    AppConst = require("../constants/app_constants"),
    $ = require("jquery"),
    _ = require("underscore");


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


var MailStore = _.extend(BaseStore, {
  events: _.extend(BaseStore.events, {
    SELECT_MAIL: "select:mail"
  }),
  getAllMessages: function(callback){
    loadMail(function(data){
      callback(data.inbox);
    });
  },
  dispatcherCallback: function(payload){
    var action = payload.action;
    switch(action.actionType){
    case AppConst.LOAD_MAIL:
      console.log("MailStore - Load Mail");
      break;
    case AppConst.VIEW_MAIL:
      console.log("MailStore - View mail");
      break;
    }
  }

});

module.exports = MailStore;

