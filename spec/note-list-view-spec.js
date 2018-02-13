(function(exports) {
  var noteList = new NoteList();

  function testReturnEmptyNoteList () {
    var noteListView = new NoteListView(noteList);

    if(noteListView.list() !== "<ul></ul>") {
      throw Error("Did not return empty list");
    };
    console.log("Pass. 0 notes were listed");
  };

  testReturnEmptyNoteList();

  function testReturnSingletonNoteList () {
    noteList.add("Hi there!");
    var noteListView = new NoteListView(noteList);

    if(noteListView.list() !== "<ul><li><div>Hi there!</div></li></ul>") {
      throw Error("Did not return list of 1 note");
    };
    console.log("Pass. 1 note was listed");
  };

  testReturnSingletonNoteList();

  function testReturnManyNoteList () {
    noteList.add("Greetings!");
    var noteListView = new NoteListView(noteList);

    if(noteListView.list() !== "<ul><li><div>Hi there!</div></li><li><div>Greetings!</div></li></ul>") {
      throw Error("Did not return list of 2 notes");
    };
    console.log("Pass. 2 notes were listed");
  };

  testReturnManyNoteList();

})(this)
