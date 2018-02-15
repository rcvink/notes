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

  NoteController.prototype.showNoteForCurrentPage = function () {
    this._insertNoteHTML(this._getNoteFromURL());
  };

  NoteController.prototype._insertNoteHTML = function (note) {
    noteView = new SingleNoteView(note);
    this._appElement.innerHTML = noteView.parse();
  };

  NoteController.prototype._getNoteFromURL = function () {
    return this._noteListView.noteList().getNote(this._getNoteIdFromURL());
  };

  NoteController.prototype._getNoteIdFromURL = function () {
    return parseInt(window.location.hash.split('/')[1]);
  };

  exports.NoteController = NoteController;
})(this);
