// 'use strict';

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
    mockElement = {
      innerHTML: ""
    }

    noteController = new NoteController(mockElement)
    console.log("1")
    console.log(noteController.element())
    noteController.insertHTML();
    console.log("2")
    console.log(noteController.element())

    if (noteController.element().innerHTML !== "<ul><li><div>Favourite drink: seltzer</div></li></ul>") {
      throw Error("Shit")
    }
    console.log("Yay")
  })();

})(this);
