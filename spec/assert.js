var assert = {
  isTrue: function(assertionToCheck, name) {
    if (!assertionToCheck) {
      throw Error(`Fail: ${name}. Expected true but received ${assertionToCheck}.`);
    };
    console.log(`Pass: ${name}.`)
  }
};
