(function(exports) {
  function testReturnEmptyNoteList () {
    var notesList = new NotesList();
    var notesListView = new NotesListView(notesList);

    if(notesListView.list() !== undefined) {
      throw Error("Did not return undefined for empty list");
    };
    console.log("0 notes were listed");
  };

  testReturnEmptyNoteList();

  function testReturnSingletonNoteList () {
    var notesList = new NotesList();
    notesList.add("Hi there!");
    var notesListView = new NotesListView(notesList);

    if(notesListView.list() !== "<ul><li><div>Hi there!</div></li></ul>") {
      throw Error("Did not return list of 1 note");
    };
    console.log("1 note was listed");
  };

  testReturnSingletonNoteList();

  function testReturnManyNoteList () {
    var notesList = new NotesList();
    notesList.add("Hi there!");
    notesList.add("Greetings!");
    var notesListView = new NotesListView(notesList);

    if(notesListView.list() !== "<ul><li><div>Hi there!</div></li><li><div>Greetings!</div></li></ul>") {
      throw Error("Did not return list of 2 notes");
    };
    console.log("2 notes were listed");
  };

  testReturnManyNoteList();

})(this)
