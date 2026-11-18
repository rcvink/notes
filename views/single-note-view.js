'use strict';

(function(exports) {

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function(character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
    });
  }

  function SingleNoteView(note) {
    this._note = note;
  };

  SingleNoteView.prototype.note = function () {
    return this._note;
  };

  SingleNoteView.prototype.parse = function () {
    return `<div>${escapeHtml(this._note.text())}</div>`;
  };

  exports.SingleNoteView = SingleNoteView;
  
})(this);
