'use strict';

(function(exports) {
  var noteController = new NoteController();

  (function testInstantiateNoteController () {
    assert.isA(
      noteController,
      NoteController,
      "NoteController can be instantiated"
    );
  })();

})(this);
