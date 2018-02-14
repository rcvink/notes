(function(exports) {

  function NoteList(noteConstructor = Note) {
    this._notes = [];
    this._noteConstructor = noteConstructor;
  };

  NoteList.prototype.notes = function () {
    return this._notes;
  };

  NoteList.prototype.add = function (string) {
    note = new this._noteConstructor(this._notes.length, string);
    this._notes.push(note);
  };

  exports.NoteList = NoteList;
})(this)
