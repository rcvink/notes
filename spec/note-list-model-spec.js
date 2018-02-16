'use strict';

(function(exports) {

  (function driveNoteList() {

    drive("NoteList", function() {

      var noteList = new NoteList();

      test.unit("notes array is initially empty", function() {
        assert.isEmpty(noteList.notes());
      });

      noteList.add("Hello!");

      test.unit("add() stores note object in notes array", function() {
        assert.isA(noteList.notes()[0], Note);
      });

      test.unit("add() assigns first note object id of 0", function() {
        assert.is0(noteList.notes()[0].id());
      });

      noteList.add("Hi there!");

      test.unit("add() assigns second note object id of 1", function() {
        assert.isEqual(noteList.notes()[1].id(), 1)
      });

      test.unit("getNote() returns note with id 0", function() {
        assert.isEqual(noteList.getNote(0).text(), "Hello!")
      });

      test.unit("getNote() returns note with id 1", function() {
        assert.isEqual(noteList.getNote(1).text(), "Hi there!")
      });

    });

  })();

})(this);
