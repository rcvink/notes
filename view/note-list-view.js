(function(exports) {
  const CHARACTER_LIMIT = 20;

  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.parse = function() {
    string = "<ul>";

    this._noteList.notes().forEach(function(note) {
      string += `<li><div><a href='http://localhost:8080#notes/${note.id()}'>${note.text().slice(0, CHARACTER_LIMIT)}</a></div></li>`;
    });

    string += "</ul>";
    return string;
  };

  exports.NoteListView = NoteListView;

})(this);
