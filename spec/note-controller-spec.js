'use strict';

(function(exports) {

  (function driveNoteController() {

    drive("NoteController", function() {

      var mockNote = {
        text: function() { return "Yo" }
      };

      // var mockNote2 = {
      //   text: function() { return "Hello RolyBoi" }
      // }

      var mockNoteList = {
        getNote: function() { return mockNote }//,
        // notes: function() { return mockNote2 }
        // add: function () { return  }
      };

      var mockNoteListView = {
        noteList: function () { return mockNoteList },
        parse: function() { return "<ul><li><div><a href='http://localhost:8080#notes/0'>Favourite drink: sel</a></div></li></ul>" }
      };

      var mockAppElement = {
        innerHTML:""
      };

      var mockNoteElement = {
        innerHTML:""
      };

      var noteController = new NoteController(mockNoteListView, mockAppElement, mockNoteElement);

      test.unit("can be instantiated", function() {
        assert.isA(noteController, NoteController);
      });

      noteController.insertHTML();

      test.unit("insertHTML() inserts note list view", function() {
        assert.isEqual(noteController.appElement().innerHTML,
         "<ul><li><div><a href='http://localhost:8080#notes/0'>Favourite drink: sel</a></div></li></ul>");
      });

      test.unit("getNoteIdFromURL() returns correct id for current url", function() {
        assert.is0(noteController.getNoteIdFromURL("#notes/0"));
      });

      test.unit("getNote() gets a note by id", function() {
        assert.isEqual(noteController.getNote(0), mockNote);
      });

      noteController.insertNoteHTML(mockNote);

      test.unit("insertNoteHTML() inserts HTML for a note", function() {
        assert.isEqual(noteController.noteElement().innerHTML, "<div>Yo</div>");
      });

      // test.unit("addNote() adds a new note to NoteListModel with text supplied", function() {
      //   noteController.addNote("Hello RolyBoi")
      //   assert.isEqual(noteController.noteListView().noteList()[1].text(), "Hello RolyBoi")
      // });

    });

  })();

})(this);
