(function(exports) {

  console.log("NoteListView");

  var note1 = {
    text: function() { return "Hi there!" }
  };

  var note2 = {
    text: function() { return "Greetings!" }
  };

  var noteList;
  var noteListView;

  (function testReturnEmptyNoteList () {
    noteList = {
      notes: function() { return [] }
    };

    noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.parse() === "<ul></ul>",
      "list containing 0 notes is parsed into HTML"
    );
  })();

  (function testReturnSingletonNoteList () {
    noteList = {
      notes: function() { return [note1] }
    };

    noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.parse() === "<ul><li><div>Hi there!</div></li></ul>",
      "list containing 1 note is parsed into HTML"
    );
  })();

  (function testReturnManyNoteList () {
    noteList = {
      notes: function() { return [note1, note2] }
    };

    noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.parse() === "<ul><li><div>Hi there!</div></li><li><div>Greetings!</div></li></ul>",
      "list containing 2 notes is parsed into HTML"
    );
  })();

})(this);
