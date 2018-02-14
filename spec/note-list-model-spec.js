(function(exports) {

  console.log("NoteList");

  var noteList = new NoteList();

  (function testEmptyNotesArray () {
    assert.isTrue(
      noteList.notes().length === 0,
      "notes array is initially empty"
    );
  })();

  noteList.add("Hello!");

  (function testAddNoteObject () {
    assert.isA(
      noteList.notes()[0],
      Note,
      "note object is stored in notes array"
    );
  })();

})(this);
