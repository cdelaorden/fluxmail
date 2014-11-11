var AppConst = require("../constants/app_constants"),
    AppDispatcher = require("../dispatchers/app_dispatcher");

var AppActions = {

  addContact: function(contact){
    AppDispatcher.handleViewAction({
      actionType: AppConst.ADD_CONTACT,
      contact: contact
    });
  },

  editContact: function(id){
    AppDispatcher.handleViewAction({
      actionType: AppConst.EDIT_CONTACT,
      id: id
    });
  },

  updateContact: function(id, contact){
    AppDispatcher.handleViewAction({
      actionType: AppConst.UPDATE_CONTACT,
      id: id,
      contact: contact
    });
  },

  removeContact: function(id){
    AppDispatcher.handleViewAction({
      actionType: AppConst.REMOVE_CONTACT,
      id: id
    });
  },

  loadMail: function(){
    AppDispatcher.handleViewAction({
      actionType: AppConst.LOAD_MAIL
    });
  }

};

module.exports = AppActions;

