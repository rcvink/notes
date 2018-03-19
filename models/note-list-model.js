'use strict';

(function(exports) {

  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.notes = function () {
    return this._notes;
  };

  NoteList.prototype.add = function (string) {
    var note = new Note(this._nextNoteId(), string);
    this._notes.push(note);
  };

  NoteList.prototype.getNote = function (id) {
    return this._notes.find(function(note) {
      return note.id() === id;
    });
  };

  NoteList.prototype._nextNoteId = function () {
    return this._notes.length
  };

  exports.NoteList = NoteList;

})(this);
