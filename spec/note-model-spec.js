'use strict';

(function(exports) {

  (function driveNote() {

    drive("Note", function() {

      var note = new Note(0, "Javascript is my favourite language");

      test.unit("has text", function () {
        assert.isEqual(note.text(), "Javascript is my favourite language");
      });

      test.unit("has an id", function () {
        assert.is0(note.id());
      });

    });

  })();

})(this);
