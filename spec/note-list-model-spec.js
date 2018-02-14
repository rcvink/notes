(function(exports) {
    var noteList = new NoteList();

    (function testEmptyNotesArray () {
      assert.isTrue(
        noteList.notes().length === 0,
        "Notes array is empty"
      );
    })();

    (function testAddNoteText () {
      noteList.add("Hello!");

      assert.isTrue(
        noteList.notes()[0].text() === "Hello!",
        "Note text is stored"
      );
    })();

    (function testAddNoteObject () {
      assert.isA(
        noteList.notes()[0],
        Note,
        "Note object is stored"
      );
    })();

})(this);
