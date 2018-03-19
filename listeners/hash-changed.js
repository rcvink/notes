'use strict';

(function(exports) {

  function HashChanged(injector, noteController, element = document.getElementById('note')) {
    this._injector = injector;
    this._noteController = noteController;
    this._element = element;
  };

  HashChanged.prototype.action = function () {
    var noteView = new SingleNoteView(this._noteController.getNote(this._getNoteId()));
    this._injector.insertHTML(this._element, noteView);
  };

  HashChanged.prototype._getNoteId = function () {
    return parseInt(window.location.hash.split('/')[1]);
  };

  exports.HashChanged = HashChanged;

})(this);
