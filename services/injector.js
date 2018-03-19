'use strict';

(function(exports) {
  function Injector() {

  };

  Injector.prototype.insertHTML = function (element, view) {
    element.innerHTML = view.parse()
  };

  exports.Injector = Injector;

})(this);
