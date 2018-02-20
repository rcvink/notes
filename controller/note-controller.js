(function(exports) {
  function NoteController(noteListView) {
    this._noteListView = noteListView;
  };

  NoteController.prototype.noteListView = function () {
    return this._noteListView;
  };

  NoteController.prototype.noteListModel = function () {
    return this._noteListView.noteList();
  };

  NoteController.prototype.getNote = function (id) {
    return this._noteListView.noteList().getNote(id);
  };


  NoteController.prototype.addNote = function (inputText) {
    // Untested method
    this._noteListView.noteList().add(inputText);
  };

  exports.NoteController = NoteController;
})(this);
