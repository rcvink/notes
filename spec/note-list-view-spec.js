(function(exports) {
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
      noteListView.list() === "<ul></ul>",
      "0 notes listed in HTML"
    );
  })();

  (function testReturnSingletonNoteList () {
    noteList = {
      notes: function() { return [note1] }
    };

    noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() === "<ul><li><div>Hi there!</div></li></ul>",
      "1 note listed in HTML"
    );
  })();

  (function testReturnManyNoteList () {
    noteList = {
      notes: function() { return [note1, note2] }
    };

    noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() === "<ul><li><div>Hi there!</div></li><li><div>Greetings!</div></li></ul>",
      "2 notes listed in HTML"
    );
  })();

})(this);
