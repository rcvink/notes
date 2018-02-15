'use strict';

(function(exports) {

  console.log("NoteController");

  var mockNoteListView = {
    parse: function() { return "<ul><li><div>Favourite drink: seltzer</div></li></ul>"}
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
      "<ul><li><div>Favourite drink: seltzer</div></li></ul>",
      "insertHTML() adds note list view"
    );
  })();

})(this);
