'use strict';

(function(exports) {

  function FormSubmitted(injector, noteController, element = document.getElementById('app')) {
    this._injector = injector;
    this._noteController = noteController;
    this._element = element;
  };

  FormSubmitted.prototype.action = function (event) {
    event.preventDefault();
    this._noteController.addNote(this._getNoteText(event));
    this._injector.insertHTML(this._element, this._noteController.noteListView())
  };

  FormSubmitted.prototype._getNoteText = function (event) {
    return event.path["0"]["0"].value;
  };

  exports.FormSubmitted = FormSubmitted;

})(this);
