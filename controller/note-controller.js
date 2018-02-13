(function(exports) {
  function NoteController(element = document.getElementById('app')) {
    this._noteListModel = new NoteList();
    this._noteListModel.add("Favourite drink: seltzer");
    this._noteListView = new NoteListView(this._noteListModel);
    this._element = element
  }

  NoteController.prototype.element = function () {
    return this._element;
  };

  NoteController.prototype.insertHTML = function () {
    this._element.innerHTML = this._noteListView.list();
  };

  exports.NoteController = NoteController;
})(this);
