(function(exports) {
    var noteList = new NoteList();

    function testEmptyNotesArray () {
      if(noteList.notes().length !== 0) {
        throw Error("Notes array is not empty on initialisation");
      };
      console.log("Pass. Note array is empty on initialisation");
    };

    testEmptyNotesArray();

    function testAddNote () {
      noteList.add("Hello!");

      if(noteList.notes()[0].text() !== "Hello!") {
        throw Error("Note was not stored in the array");
      };
      console.log("Pass. Note was added");
    };

    testAddNote();
})(this);
