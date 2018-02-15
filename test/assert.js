var assert = {

  isTrue: function(assertionToCheck, name) {
    if (!assertionToCheck) {
      throw Error(`Fail: ${name}. Expected true but received ${assertionToCheck}.`);
    };
    console.log(`Pass: ${name}.`);
  },

  isA: function(instance, type, name) {
    if (!(instance instanceof type)) {
      throw Error(`Fail ${name}. Expected ${type.name} but received ${instance.constructor.name}.`);
    };
    console.log(`Pass: ${name}.`);
  },

  isEqual: function(instance1, instance2, name) {
    if (instance1 !== instance2) {
      throw Error(`Fail ${name}. Expected ${instance1} to equal ${instance2}.`);
    };
    console.log(`Pass: ${name}.`);
  },

  isEmpty: function(array, name) {
    if (array.length !== 0) {
      throw Error(`Fail ${name}. Expected ${array} to be empty but length was ${array.length}.`);
    };
    console.log(`Pass: ${name}.`);
  },

  contains: function(array, item, name) {
    if (!array.includes(item)) {
      throw Error(`Fail ${name}. Expected ${array} to include ${item} but contained ${array}`);
    };
    console.log(`Pass: ${name}.`);
  }

};
