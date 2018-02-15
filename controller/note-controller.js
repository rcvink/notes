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

  NoteController.prototype._getNoteIdFromURL = function () {
    return parseInt(window.location.hash.split('/')[1]);
  };

  NoteController.prototype.getNoteFromURL = function () {
    this._noteListView.noteList().getNote(this._getNoteIdFromURL());
  };

  NoteController.prototype.insertNoteHTML = function (note) {
    noteView = new SingleNoteView(note);
    this._appElement.innerHTML = noteView.parse();
  };

  NoteController.prototype.showNoteForCurrentPage = function () {
    this.insertNoteHTML(this.getNoteFromURL());
  };

  exports.NoteController = NoteController;
})(this);
