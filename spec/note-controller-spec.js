'use strict';

(function(exports) {
  var noteList = new NoteList();
  noteList.add("Favourite drink: seltzer");
  var noteListView = new NoteListView(noteList);
  var HTMLelement = {innerHTML:""};
  var noteController = new NoteController(noteList, noteListView, HTMLelement);

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
