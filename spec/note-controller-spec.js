'use strict';

(function(exports) {

  (function driveNoteController() {

    drive("NoteController", function() {

      var mockNote = {
        text: function() { return "Yo" }
      };

      var mockNoteList = {
        getNote: function() { return mockNote }
      };

      var mockNoteListView = {
        noteList: function () { return mockNoteList },
      };

      var noteController = new NoteController(mockNoteListView);

      test.unit("getNote() gets a note by id", function() {
        assert.isEqual(noteController.getNote(0), mockNote);
      });

    });

  })();

})(this);
