'use strict';

(function(exports) {

  function EventController(scope = window) {
    this._scope = scope;
  };

  EventController.prototype.register = function (eventString, listener) {
    this._scope.addEventListener(eventString, function (event) {
      listener.action(event);
    });
  };

  exports.EventController = EventController;

})(this);
