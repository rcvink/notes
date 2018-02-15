'use strict';

(function(exports) {

  console.log("NoteController");

  var mockNote = {
    text: function() { return "Yo" }
  };

  var mockNoteList = {
    getNote: function() { return mockNote }
  };

  var mockNoteListView = {
    noteList: function () { return mockNoteList },
    parse: function() { return "<ul><li><div><a href='http://localhost:8080#notes/0'>Favourite drink: sel</a></div></li></ul>" }
  };

  var mockHTMLelement = {
    innerHTML:""
  };

  var noteController = new NoteController(mockNoteListView, mockHTMLelement);

  (function testInstantiateNoteController () {
    assert.isA(
      noteController,
      NoteController,
      "can be instantiated"
    );
  })();

  (function testInsertHtml() {
    noteController.insertHTML();

    assert.isEqual(
      noteController.appElement().innerHTML,
      "<ul><li><div><a href='http://localhost:8080#notes/0'>Favourite drink: sel</a></div></li></ul>",
      "insertHTML() adds note list view"
    );
  })();

  (function testGetNoteIdFromURL() {
    assert.isEqual(
      noteController.getNoteIdFromURL("#notes/0"),
      0,
      "returns correct id for current url"
    );
  })();

  (function testGetNote() {
    assert.isEqual(
      noteController.getNote(0),
      mockNote,
      "getNote gets a note by id"
    );
  })();

  (function testInsertNoteHTML() {
    noteController.insertNoteHTML(mockNote);

    assert.isEqual(
      noteController.appElement().innerHTML,
      "<div>Yo</div>",
      "insertNoteHTML inserts HTML for a note"
    );
  })();

  (function testMakeUrlChangeShowNoteForCurrentPage() {
    var mockHTMLelement = {
      innerHTML:""
    };

    var noteController = new NoteController(mockNoteListView, mockHTMLelement);

    noteController.makeUrlChangeShowNoteForCurrentPage();

    assert.isEqual(
      noteController.appElement().innerHTML,
      "<div>Yo</div>",
      "Url change shows note for current page"
    );
  })();

})(this);
