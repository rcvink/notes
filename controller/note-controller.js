(function(exports) {
  function NoteController(noteListView, appElement = document.getElementById('app')) {
    this._noteListView = noteListView;
    this._appElement = appElement;
  };

  NoteController.prototype.noteListView = function () {
    return this._noteListView;
  };

  NoteController.prototype.noteListModel = function () {
    return this._noteListView.noteList();
  };

  NoteController.prototype.appElement = function () {
    return this._appElement;
  };

  NoteController.prototype.insertHTML = function () {
    this._appElement.innerHTML = this._noteListView.parse();
  };

  NoteController.prototype.getNoteIdFromURL = function (locationHash = window.location.hash) {
    return parseInt(locationHash.split('/')[1]);
  };

  NoteController.prototype.getNote = function (id) {
    return this._noteListView.noteList().getNote(id);
  };

  NoteController.prototype.insertNoteHTML = function (note) {
    noteView = new SingleNoteView(note);
    this._appElement.innerHTML = noteView.parse();
  };

  NoteController.prototype.showNoteForCurrentPage = function () {
    // Untested method
    this.insertNoteHTML(this.getNote(this.getNoteIdFromURL()));
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function () {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  exports.NoteController = NoteController;
})(this);
