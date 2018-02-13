(function(exports) {
  var note = new Note("Javascript is my favourite language");

  function testNoteTextIsStored() {
    assert.isTrue(
      note.text() === "Javascript is my favourite language",
      "Note text is stored"
    );
  };

  testNoteTextIsStored();
})(this);
