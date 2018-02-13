(function(exports) {
  function NoteListView(notesList) {
    this._notesList = notesList
  };

  NoteListView.prototype.list = function() {
    string = "<ul>"
    this._notesList.notes().forEach(function(note) {
      string += `<li><div>${note.text()}</div></li>`
    });
    string += "</ul>"
    return string
  };

  exports.NoteListView = NoteListView
})(this);
