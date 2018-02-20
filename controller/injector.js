'user strict';

(function(exports) {
  function Injector() {

  };

  Injector.prototype.insertHTML = function (element, view) {
    // Untested method
    element.innerHTML = view.parse()
  };

  exports.Injector = Injector;

})(this);
