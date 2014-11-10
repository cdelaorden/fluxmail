var AppDispatcher = require("../dispatchers/app_dispatcher"),
    AppConst = require("../constants/app_constants"),
    merge = require("react/lib/merge"),
    EventEmitter = require("events").EventEmitter;

var CHANGE_EVENT = "change",
    SELECT_EVENT = "select";

var _contacts = [
  {
    id: 1,
    fname: "Carlos",
    lname: "de la Orden",
    twitter: "charliedijs"
  },
  {
    id: 2,
    fname: "Miguel",
    lname: "Martín",
    twitter: "kanedaki"
  },
  {
    id: 3,
    fname: "Elías",
    lname: "Alonso",
    twitter: "werelax"
  }
];

var _selectedContactId;

function _editContact(id){
  _selectedContactId = id;
}

function _addContact(data){
    _contacts.push(merge(data, {
      id: _contacts.length++
    }));
}

function _updateContact(id, data){
  _contacts[id-1] = data;
}

function _removeContact(id){
  _contacts.splice(id-1, 1);
}

var ContactStore = window.ContactStore =  merge(EventEmitter.prototype, {
  emitChange: function(){
    ContactStore.emit(CHANGE_EVENT);
  },

  emitSelect: function(){
    ContactStore.emit(SELECT_EVENT, _selectedContactId);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  addSelectListener: function(callback){
    this.on(SELECT_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  removeSelectListener: function(callback){
    this.removeListener(SELECT_EVENT, callback);
  },

  getAllContacts: function(){
    return _contacts;
  },

  getContact: function(id){
    return _contacts[id-1];
  },

  getSelectedContact: function(){
    return _contacts[_selectedContactId--];
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
      case AppConst.EDIT_CONTACT:
        _editContact(action.id);
        ContactStore.emitSelect();
        break;
      case AppConst.ADD_CONTACT:
        _addContact(action.contact);
        ContactStore.emitChange();
        break;
      case AppConst.UPDATE_CONTACT:
        _updateContact(action.id, action.contact);
        _editContact(null);
        ContactStore.emitChange();
        ContactStore.emitSelect();
        break;
      case AppConst.REMOVE_CONTACT:
        _removeContact(action.id);
        ContactStore.emitChange();
        break;
    }
    return true;
  })
});

module.exports = ContactStore;
