(function(exports) {
  function SingleNoteView(note) {
    this._note = note
  };

  SingleNoteView.prototype.note = function () {
    return this._note
  };

  SingleNoteView.prototype.parse = function () {
    return `<div>${this._note.text()}</div>`;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
