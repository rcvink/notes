(function(exports) {

  console.log("Note");

  var note = new Note("Javascript is my favourite language");

  (function testNoteTextIsStored() {
    assert.isTrue(
      note.text() === "Javascript is my favourite language",
      "text is stored"
    );
  })();

})(this);
