var test = {

  unit: function(description, test) {
    test();
    print.test(description);
  },

  feature: function(description, test) {
    test();
    console.log(` - ${description}`);
  }

};
