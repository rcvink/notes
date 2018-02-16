'use strict';

(function(exports) {

  (function driveNoteListView() {

    drive("NoteListView", function() {

      // var link0html = "<li><div><a href='#notes/0'>Hi there!</a></div></li>";
      // var link1html = "<li><div><a href='#notes/1'>Greetings!</a></div></li>";
      // var link2html = "<li><div><a href='#notes/0'>This note is longer </a></div></li>";
      // var link3html = "<li><div><a href='#notes/1'>This note is also lo</a></div></li>";

      var note1 = {
        text: function() { return "Hi there!" },
        id: function() { return 0 }
      };

      var note2 = {
        text: function() { return "Greetings!" },
        id: function() { return 1 }
      };

      var note3 = {
        text: function() { return "This note is longer than 20 characters." },
        id: function() { return 0 }
      };

      var note4 = {
        text: function() { return "This note is also longer than 20 characters." },
        id: function() { return 1 }
      };

      var noteList = {
        notes: function() { return [] }
      };

      var noteListView = new NoteListView(noteList);

      test.unit("is initialised with a note list model", function() {
        assert.isEqual(noteListView.noteList(), noteList);
      });

      test.unit("parse() parses 0 notes into HTML", function() {
        assert.isEqual(noteListView.parse(), "<ul></ul>");
      });

      noteList = {
        notes: function() { return [note1] }
      };

      noteListView = new NoteListView(noteList);

      test.unit("parse() parses 1 note into HTML", function() {
        assert.isEqual(noteListView.parse(), "<ul><li><div><a href='#notes/0'>Hi there!</a></div></li></ul>");
      });

      noteList = {
        notes: function() { return [note1, note2] }
      };

      noteListView = new NoteListView(noteList);

      test.unit("parse() parses 2 notes into HTML", function() {
        assert.isEqual(noteListView.parse(), "<ul><li><div><a href='#notes/0'>Hi there!</a></div></li><li><div><a href='#notes/1'>Greetings!</a></div></li></ul>");
      });

      noteList = {
        notes: function() { return [note3] }
      };

      noteListView = new NoteListView(noteList);

      test.unit("parse() only parses first 20 characters of 1 note into HTML", function() {
        assert.isEqual(noteListView.parse(), "<ul><li><div><a href='#notes/0'>This note is longer </a></div></li></ul>");
      });

      noteList = {
        notes: function() { return [note3, note4] }
      };

      noteListView = new NoteListView(noteList);

      test.unit("parse() only parses first 20 characters of 2 notes into HTML", function() {
        assert.isEqual(noteListView.parse(), "<ul><li><div><a href='#notes/0'>This note is longer </a></div></li><li><div><a href='#notes/1'>This note is also lo</a></div></li></ul>");
      });

    })

  })();

})(this);
