(function(exports) {
  function testNoteTextIsStored() {
    var note = new Note("Javascript is my favourite language");

    if (note.text() !== "Javascript is my favourite language") {
      throw Error("Text is not 'Javascript is my favourite language'")
    }
    console.log("testNoteTextIsStored = passed!")
  };

  testNoteTextIsStored();
})(this);
