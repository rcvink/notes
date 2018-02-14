(function(exports) {
  
  function NoteListView(noteList) {
    this._noteList = noteList
  };

  NoteListView.prototype.parse = function() {
    string = "<ul>"
    this._noteList.notes().forEach(function(note) {
      string += `<li><div>${note.text().slice(0, 20)}</div></li>`
    });
    string += "</ul>"
    return string
  };

  exports.NoteListView = NoteListView

})(this);
