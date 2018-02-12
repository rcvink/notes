(function(exports) {
  function NotesList() {
    this._notes = [];
  }

  NotesList.prototype.notes = function () {
    return this._notes;
  };

  NotesList.prototype.add = function (string) {
    this._notes.push(new Note(string));
  };

  exports.NotesList = NotesList;
})(this)
