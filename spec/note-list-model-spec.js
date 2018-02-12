(function(exports) {
    function testEmptyNotesArray () {
      var notesList = new NotesList()

      if(notesList.notes().length !== 0) {
        throw Error("Notes array is not empty")
      }
      console.log("test passed whoopdy woo")
    }

    testEmptyNotesArray()

    function testAddNote () {
      var notesList = new NotesList()
      notesList.add("Hello!");

      if(notesList.notes()[0].text() !== "Hello!") {
        throw Error("Note was not stored in the array!")
      };
      console.log("Note was added");
    };

    testAddNote()
})(this)
