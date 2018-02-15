(function(exports) {

  console.log("Note");

  var note = new Note(0, "Javascript is my favourite language");

  (function testNoteTextIsStored() {
    assert.isEqual(
      note.text(),
      "Javascript is my favourite language",
      "text is stored"
    );
  })();

  (function testNoteHasId() {
    assert.isEqual(
      note.id(),
      0,
      "has an id"
    );
  })();

})(this);
