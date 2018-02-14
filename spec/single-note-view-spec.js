(function(exports) {

  console.log("SingleNoteView");

  var noteMock = {
    text: function() {return "Favourite food: burrito"}
  };

  var singleNoteView = new SingleNoteView(noteMock);

  (function testInstantiateSingleNoteView () {
    assert.isA(
      singleNoteView,
      SingleNoteView,
      "can be instantiated"
    );
  })();

  (function testReturnNoteHTML () {
    assert.isTrue(
      singleNoteView.parse() === "<div>Favourite food: burrito</div>",
      "parses note into HTML"
    );
  })();

})(this);
