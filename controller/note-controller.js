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

  NoteController.prototype.getNoteIdFromURL = function (hash = window.location.hash) {
    return hash.split('/')[1];
  };

  exports.NoteController = NoteController;
})(this);
