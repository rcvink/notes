(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList
  };

  NoteListView.prototype.list = function() {
    string = "<ul>"
    this._noteList.notes().forEach(function(note) {
      string += `<li><div>${note.text()}</div></li>`
    });
    string += "</ul>"
    return string
  };

  exports.NoteListView = NoteListView
})(this);
