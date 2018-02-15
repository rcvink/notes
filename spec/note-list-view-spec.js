(function(exports) {

  console.log("NoteListView");

  var note1 = {
    text: function() { return "Hi there!" }
  };

  var note2 = {
    text: function() { return "Greetings!" }
  };

  var note3 = {
    text: function() { return "This note is longer than 20 characters." }
  };

  var noteList;
  var noteListView;

  (function testReturnEmptyNoteList () {
    noteList = {
      notes: function() { return [] }
    };

    noteListView = new NoteListView(noteList);

    assert.isEqual(
      noteListView.parse(),
      "<ul></ul>",
      "list containing 0 notes is parsed into HTML"
    );

  })();

  (function testReturnSingletonNoteList () {
    noteList = {
      notes: function() { return [note1] }
    };

    noteListView = new NoteListView(noteList);

    assert.isEqual(
      noteListView.parse(),
      `<ul>${link0html}</ul>`,
      "list containing 1 note is parsed into HTML"
    );

  })();

  (function testReturnManyNoteList () {
    noteList = {
      notes: function() { return [note1, note2] }
    };

    noteListView = new NoteListView(noteList);

    assert.isEqual(
      noteListView.parse(),
      `<ul>${link0html + link1html}</ul>`,
      "list containing 2 notes is parsed into HTML"
    );

  })();

  (function test20CharacterSingletonNoteLimit () {
    noteList = {
      notes: function() { return [note3] }
    };

    noteListView = new NoteListView(noteList);

    assert.isEqual(
      noteListView.parse(),
      `<ul>${link2html}</ul>`,
      "only first 20 characters of 1 note is parsed into HTML"
    );

  })();

  (function test20CharacterManyNoteLimit () {
    noteList = {
      notes: function() { return [note3, note4] }
    }

    noteListView = new NoteListView(noteList);

    assert.isEqual(
      noteListView.parse(),
      `<ul>${link2html + link3html}</ul>`,
      "only first 20 characters of 2 notes are parsed into HTML"
    );

  })();

})(this);
