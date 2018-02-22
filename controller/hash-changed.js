'use strict';

(function(exports) {

  function HashChanged(injector, element = document.getElementById('note')) {
    this._injector = injector;
    this._element = element;
  };

  HashChanged.prototype.action = function (note) {
    var noteView = new SingleNoteView(note);
    this._injector.insertHTML(this._element, noteView);
  };

  exports.HashChanged = HashChanged;

})(this);
