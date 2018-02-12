(function(exports) {
    function testEmptyNotesArray () {
      var notesList = new NotesList()

      if(notesList.notes().length !== 0) {
        throw Error("Notes array is not empty")
      }
      console.log("test passed whoopdy woo")
    }

    testEmptyNotesArray()
})(this)
