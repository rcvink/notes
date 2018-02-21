var print = {

  drive: function(driveDescription) {
    var spec = document.getElementById("spec");
    spec.innerHTML += `<h2>${driveDescription}</h2>`;
  },

  test: function(testDescription) {
    var spec = document.getElementById("spec");
    spec.innerHTML += `${testDescription}<br>`;
  }

};
