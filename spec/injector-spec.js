'use strict';

(function(exports) {

  (function driveInjector() {

    drive("Injector", function() {

      var injector = new Injector();

      var mockElement = {
        innerHTML: ""
      };

      var mockView = {
        parse: function() { return "<h1>To-do</h1>" }
      };

      test.unit("insertHTML() inserts a view's parse into HTML", function() {
        injector.insertHTML(mockElement, mockView);
        assert.isEqual(mockElement.innerHTML, mockView.parse())
      });

    });

  })();

})(this);
