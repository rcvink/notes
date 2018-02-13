(function(exports) {
    var noteList = new NoteList();

    (function testEmptyNotesArray () {
      assert.isTrue(
        noteList.notes().length === 0,
        "Notes array is empty"
      );
    })();

    (function testAddNote () {
      noteList.add("Hello!");

      assert.isTrue(
        noteList.notes()[0].text() === "Hello!",
        "Note is stored"
      );
    })();

})(this);
