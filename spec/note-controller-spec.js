'use strict';

(function(exports) {

  console.log("NoteController");

  var mockNoteListView = {
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

  (function testGetId() {
    assert.isEqual(
      noteController.getNoteIdFromURL("#notes/0"),
      "0",
      "getNoteId() returns id of 0"
    );
  })();

})(this);
