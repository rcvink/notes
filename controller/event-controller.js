'use strict';

(function(exports) {

  function EventController(scope = window) {
    this._scope = scope;
  };

  EventController.prototype.registerListener = function (eventString, handler) {
    this._scope.addEventListener(eventString, function (event) {
      handler.action(event);
    });
  };

  exports.EventController = EventController;

})(this);
