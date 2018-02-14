(function(exports) {
  const CHARACTER_LIMIT = 20;

  function NoteListView(noteList) {
    this._noteList = noteList
  };

  NoteListView.prototype.parse = function() {
    string = "<ul>"
    this._noteList.notes().forEach(function(note) {
      string += `<li><div>${note.text().slice(0, CHARACTER_LIMIT)}</div></li>`
    });
    string += "</ul>"
    return string
  };

  exports.NoteListView = NoteListView

})(this);
