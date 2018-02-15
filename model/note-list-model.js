(function(exports) {

  function NoteList(noteConstructor = Note) {
    this._notes = [];
    this._noteConstructor = noteConstructor;
  };

  NoteList.prototype.notes = function () {
    return this._notes;
  };

  NoteList.prototype.add = function (string) {
    note = new this._noteConstructor(this._nextNoteId(), string);
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
})(this)
