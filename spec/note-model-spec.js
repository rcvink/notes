(function(exports) {
  var note = new Note("Javascript is my favourite language");

  function testNoteTextIsStored() {
    if (note.text() !== "Javascript is my favourite language") {
      throw Error("Text was not stored");
    };
    console.log("Pass. Text is stored in note");
  };

  testNoteTextIsStored();
})(this);
