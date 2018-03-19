'use strict';

(function(exports) {

  const CHARACTER_LIMIT = 20;

  function NoteListView(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype.noteList = function () {
    return this._noteList;
  };

  NoteListView.prototype.parse = function() {
    var HTMLString = "<ul>";

    this._noteList.notes().forEach(function(note) {
      HTMLString += `<li><div><a href='#notes/${note.id()}'>${note.text().slice(0, CHARACTER_LIMIT)}</a></div></li>`;
    });

    HTMLString += "</ul>";
    return HTMLString;
  };

  exports.NoteListView = NoteListView;

})(this);
