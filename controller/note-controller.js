(function(exports) {
  function NoteController(noteListView, appElement = document.getElementById('app')) {
    this._noteListView = noteListView;
    this._appElement = appElement;
  }

  NoteController.prototype.appElement = function () {
    return this._appElement;
  };

  NoteController.prototype.insertHTML = function () {
    this._appElement.innerHTML = this._noteListView.parse();
  };

  exports.NoteController = NoteController;
})(this);
