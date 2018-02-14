'use strict';

(function(exports) {

  console.log("NoteController");

  var noteListView = {
    parse: function() { return "<ul><li><div>Favourite drink: seltzer</div></li></ul>"}
  };

  var HTMLelement = {
    innerHTML:""
  };

  var noteController = new NoteController(noteListView, HTMLelement);

  (function testInstantiateNoteController () {
    assert.isA(
      noteController,
      NoteController,
      "can be instantiated"
    );
  })();

  (function testInsertHtml() {
    noteController.insertHTML();
    assert.isTrue(
      noteController.HTMLelement().innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>",
      "insertHTML() adds note list view"
    );
  })();

})(this);
