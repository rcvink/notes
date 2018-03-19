'use strict';

(function(exports) {

  function Note(id, text) {
    this._id = id;
    this._text = text;
  };

  Note.prototype.id = function () {
    return this._id;
  };

  Note.prototype.text = function () {
    return this._text;
  };

  exports.Note = Note;
  
})(this);
