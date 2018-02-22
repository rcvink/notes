'use strict';

(function(exports) {

  function FormSubmitted(injector, element = document.getElementById('app')) {
    this._injector = injector;
    this._element = element;
  };

  FormSubmitted.prototype.action = function (event, noteController) {
    event.preventDefault();
    noteController.addNote(this._getNoteText(event));
    this._injector.insertHTML(this._element, noteController.noteListView())
  };

  FormSubmitted.prototype._getNoteText = function (event) {
    return event.path["0"]["0"].value;
  };

  exports.FormSubmitted = FormSubmitted;

})(this);
