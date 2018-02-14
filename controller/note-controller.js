(function(exports) {
  function NoteController(noteList, noteListView, HTMLelement = document.getElementById('app')) {
    this._noteListModel = noteList;
    this._noteListView = noteListView;
    this._HTMLelement = HTMLelement;
  }

  NoteController.prototype.HTMLelement = function () {
    return this._HTMLelement;
  };

  NoteController.prototype.insertHTML = function () {
    this._HTMLelement.innerHTML = this._noteListView.list();
  };

  exports.NoteController = NoteController;
})(this);
