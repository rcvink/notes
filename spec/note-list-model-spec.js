(function(exports) {

  console.log("NoteList");

  var noteList = new NoteList();

  (function testEmptyNotesArray () {
    assert.isEmpty(
      noteList.notes(),
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

  (function testFirstNoteObjectHasId0 () {
    assert.isEqual(
      noteList.notes()[0].id(),
      0,
      "gives first note object id of 0"
    );
  })();

  noteList.add("Hi there!");

  (function testSecondNoteObjectHasId1 () {
    assert.isEqual(
      noteList.notes()[1].id(),
      1,
      "gives second note object id of 1"
    );
  })();

})(this);
