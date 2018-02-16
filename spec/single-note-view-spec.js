'use strict';

(function(exports) {

  (function driveSingleNoteView() {

    drive("SingleNoteView", function() {

      var noteMock = {
        text: function() { return "Favourite food: burrito" }
      };

      var singleNoteView = new SingleNoteView(noteMock);

      test.unit("can be instantiated", function() {
        assert.isA(singleNoteView, SingleNoteView);
      });

      test.unit("parse() parses note text into HTML", function() {
        assert.isEqual(singleNoteView.parse(), "<div>Favourite food: burrito</div>");
      });

    });

  })();

})(this);
