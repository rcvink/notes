'use strict';

(function(exports) {

  function EventController(noteController, injector, scope = window, appElement = document.getElementById('app'), noteElement = document.getElementById('note')) {
    this._noteController = noteController;
    this._injector = injector;
    this._scope = scope;
    this._appElement = appElement;
    this._noteElement = noteElement;
  };

  // All methods untested

  EventController.prototype.listenForHashChange = function () {
    this._scope.addEventListener("hashchange", function () {
      this.actionOnHashChange();
    }.bind(this));
  };

  EventController.prototype.actionOnHashChange = function () {
    var noteView = new SingleNoteView(this._noteController.getNote(this._getNoteId()));
    this._injector.insertHTML(this._noteElement, noteView);
  };

  EventController.prototype.listenForSubmit = function () {
    this._scope.addEventListener("submit", function (event) {
      this.actionOnSubmit(event);
    }.bind(this));
  };

  EventController.prototype.actionOnSubmit = function (event) {
    event.preventDefault();
    this._noteController.addNote(this._getNoteText(event));
    this._injector.insertHTML(this._appElement, this._noteController.noteListView());
  };

  // private

  EventController.prototype._getNoteId = function () {
    return parseInt(this._scope.location.hash.split('/')[1]);
  };

  EventController.prototype._getNoteText = function (event) {
    return event.path["0"]["0"].value;
  };

  exports.EventController = EventController;

})(this);
