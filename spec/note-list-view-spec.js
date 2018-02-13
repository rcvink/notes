(function(exports) {
  var noteList = new NoteList();

  function testReturnEmptyNoteList () {
    var noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() === "<ul></ul>",
      "0 notes listed in HTML"
    );
  };

  function testReturnSingletonNoteList () {
    noteList.add("Hi there!");
    var noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() === "<ul><li><div>Hi there!</div></li></ul>",
      "1 note listed in HTML"
    );
  };

  function testReturnManyNoteList () {
    noteList.add("Greetings!");
    var noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() === "<ul><li><div>Hi there!</div></li><li><div>Greetings!</div></li></ul>",
      "2 notes listed in HTML"
    );
  };

  testReturnEmptyNoteList();
  testReturnSingletonNoteList();
  testReturnManyNoteList();

})(this)
