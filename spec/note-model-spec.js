(function(exports) {

  console.log("Note");

  var note = new Note(0, "Javascript is my favourite language");

  (function testNoteTextIsStored() {
    assert.isTrue(
      note.text() === "Javascript is my favourite language",
      "text is stored"
    );
  })();

  (function testNoteHasId() {
    assert.isTrue(
      note.id() === 0,
      "has an id"
    );
  })();

})(this);
