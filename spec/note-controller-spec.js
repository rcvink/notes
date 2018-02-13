'use strict';

(function(exports) {
  var noteController = new NoteController();

  (function testInstantiateNoteController () {
    assert.isA(
      noteController,
      NoteController,
      "NoteController can be instantiated"
    );
  })();

  (function testInsertHtml() {
    noteController = new NoteController({innerHTML:""});
    noteController.insertHTML();
    assert.isTrue(
      noteController.element().innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>",
      "insertHTML() adds note list view"
    );
  })();

})(this);
