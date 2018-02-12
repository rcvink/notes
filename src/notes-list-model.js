(function(exports) {
  function NotesList() {
    this._notes = [];
  }

  NotesList.prototype.notes = function () {
    return this._notes;
  };

  exports.NotesList = NotesList;
})(this)
