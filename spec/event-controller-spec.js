'use strict';

(function(exports) {

  (function driveEventController() {

    drive("EventController", function() {

      var mockNoteController = {

      };

      var mockInjector = {

      };

      var mockWindow = {

      };

      var eventController = new EventController(mockNoteController, mockInjector, mockWindow);

      test.unit("can be instantiated", function() {
        assert.isA(eventController, EventController);
      });
      //
      // test.unit("is instantiated with a NoteController", function() {
      //   assert.isA(eventController.noteController(), NoteController);
      // });
      //
      // test.unit("is instantiated with an Injector", function() {
      //   assert.isA(eventController.injector(), Injector);
      // });
      // 
      // test.unit("listenForSubmit() adds an event listener for submit actions", function() {
      //   eventController.listenForSubmit()
      //   assert.isA(eventController.scope().//)
      // })

    });

  })();

})(this);
