"use strict";
/* constructor syntax: */
let userA = new Object();

/* literal syntax: */
let user = {
  name: "John",
  age: 30,
  "likes birds": true,
};

/* dot notation */
user.isAdmin = true;

/* square brackets */

// interaction
let key = prompt("What do you want to know about the user?", "name");
alert(user[key]); // John (if enter "name")

let fruit = prompt("which fruit to buy?", "apple");
let bag = {
  // computed properties
  [fruit]: 5,
  [fruit + "Computers"]: 2,
};

/* check whether property exists */

alert(user.noSuchProperty === undefined); // true

// or use: "key" in object
alert("age" in user); // true
delete user.age;
alert("age" in user); // false

/* traverse all pairs */
for (let k in newUser) {
  // keys
  alert(k);
  // values
  alert(newUser[k]);
}
