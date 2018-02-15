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

  (function testGetIdFromURL() {
    assert.isEqual(
      noteController.getNoteIdFromURL("#notes/0"),
      "0",
      "getNoteIdFromURL() returns id of 0"
    );
  })();

  (function testInsertNoteHTML() {
    noteController.insertNoteHTML("0", mockNoteList)

    assert.isEqual(
      noteController.appElement().innerHTML,
      "<div>Yo</div>",
      "insertNoteHTML(0) inserts html for note with id of 0"
    );
  })();

  (function testShowNoteForCurrentPage() {
    var mockHTMLelement = {
      innerHTML:""
    };

    var noteController = new NoteController(mockNoteListView, mockHTMLelement);

    noteController.showNoteForCurrentPage();

    assert.isEqual(
      noteController.appElement().innerHTML,
      "<div>Yo</div>",
      "showNoteForCurrentPage() shows note for current page correctly"
    );
  })();

})(this);
