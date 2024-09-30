// NOTE::
//  Objects store properties (key-value pairs), where:
//    Property keys must be strings or symbols (usually strings).
//    Values can be of any type.

// object constructor syntax:
let userA = new Object();
// or object literal syntax:
let user = {
  name: "John",
  age: 30,
  "likes birds": true,
};

user.isAdmin = true;

// dot notation
alert(user.name);
alert(user.isAdmin);

// square brackets
alert(user["likes birds"]);
// interaction
let key = prompt("What do you want to know about the user?", "name");
alert(user[key]); // John (if enter "name")

let fruit = prompt("which fruit to buy?", "apple");
let bag = {
  // computed properties
  [fruit]: 5,
  [fruit + "Computers"]: 2,
};

function makeUser(name, age) {
  return {
    name: name, // or just name,
    age, // the same as age: age,
    key, // the global variable can also be used as the value for the property name (key).
  };
}

let newUser = makeUser("Mary", 20);
alert(newUser.age);
alert(newUser.key); // "name"

// the type of key != the type of value
let obj = {
  for: 1,
  let: 2,
  return: 3,
};
alert(obj.for + obj.let + obj.return); // 6

// check whether property exists
alert(user.noSuchProperty === undefined); // true
// or use `in` operator: syntax: "key" in object
alert("noSuchProperty" in user); // false
alert("age" in user); // true
delete user.age;
alert("age" in user); // false

// traverse all pairs
for (let k in newUser) {
  // keys
  alert(k);
  // values
  alert(newUser[k]);
}

// if the keys are non-integer, they are listed in the creation order.
// otherwise, the keys are arranged in ascending sorted order.
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  alert(+code); // (+49, +41, +44, +1) => (49, 41, 44, 1)
}
