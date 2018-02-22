'use strict';

(function(exports) {

  function EventController(noteController, hashChanged, formSubmitted, scope = window) {
    this._noteController = noteController;
    this._hashChanged = hashChanged;
    this._formSubmitted = formSubmitted;
    this._scope = scope;
  };

  EventController.prototype.listenForHashChange = function () {
    this._scope.addEventListener("hashchange", function () {
      this._hashChanged.action(this._noteController.getNote(this._getNoteId()));
    }.bind(this));
  };

  EventController.prototype.listenForSubmit = function () {
    this._scope.addEventListener("submit", function (event) {
      this._formSubmitted.action(event, this._noteController);
    }.bind(this));
  };

  EventController.prototype._getNoteId = function () {
    return parseInt(this._scope.location.hash.split('/')[1]);
  };

  exports.EventController = EventController;

})(this);
