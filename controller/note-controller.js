(function(exports) {
  function NoteController(noteListView, HTMLelement = document.getElementById('app')) {
    this._noteListView = noteListView;
    this._HTMLelement = HTMLelement;
  }

  NoteController.prototype.HTMLelement = function () {
    return this._HTMLelement;
  };

  NoteController.prototype.insertHTML = function () {
    this._HTMLelement.innerHTML = this._noteListView.parse();
  };

  exports.NoteController = NoteController;
})(this);
