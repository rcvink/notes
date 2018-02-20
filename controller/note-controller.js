'use strict';

(function(exports) {
  function NoteController(noteListView) {
    this._noteListView = noteListView;
  };

  NoteController.prototype.noteListView = function () {
    return this._noteListView;
  };

  NoteController.prototype.getNote = function (id) {
    return this._noteListView.noteList().getNote(id);
  };

  NoteController.prototype.addNote = function (inputText) {
    this._noteListView.noteList().add(inputText);
  };

  exports.NoteController = NoteController;
  
})(this);
