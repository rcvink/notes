(function(exports) {
  function NoteController(noteListView, appElement = document.getElementById('app'), noteElement = document.getElementById('note')) {
    this._noteListView = noteListView;
    this._appElement = appElement;
    this._noteElement = noteElement;
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

  NoteController.prototype.noteElement = function () {
    return this._noteElement;
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
    this._noteElement.innerHTML = noteView.parse();
  };

  NoteController.prototype.showNoteForCurrentPage = function () {
    // Untested method
    this.insertNoteHTML(this.getNote(this.getNoteIdFromURL()));
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function () {
    window.addEventListener("hashchange", function () { this.showNoteForCurrentPage() }.bind(this));
  };

  exports.NoteController = NoteController;
})(this);
