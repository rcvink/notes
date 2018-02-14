(function(exports) {
  var note = {
    text: function() {return "Favourite food: burrito"}
  };

  var singleNoteView = new SingleNoteView(note);

  (function testInstantiateSingleNoteView () {
    assert.isA(
      singleNoteView,
      SingleNoteView,
      "SingleNoteView can be instantiated"
    );
  })();

  (function testReturnNoteHTML () {
    assert.isTrue(
      singleNoteView.parse() === "<div>Favourite food: burrito</div>",
      "Parsed note HTML"
    );
  })();

})(this);
