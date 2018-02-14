'use strict';

(function(exports) {

  var noteListView = {
    list: function() { return "<ul><li><div>Favourite drink: seltzer</div></li></ul>"}
  };

  var HTMLelement = {
    innerHTML:""
  };
  
  var noteController = new NoteController(noteListView, HTMLelement);

  (function testInstantiateNoteController () {
    assert.isA(
      noteController,
      NoteController,
      "NoteController can be instantiated"
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
