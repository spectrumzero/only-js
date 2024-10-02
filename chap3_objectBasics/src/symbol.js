// NOTE: Symbol is a primitive type for unique identifiers. it is the only type which may serve as the property key, apart from string.

/* unique property */

let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

// alert a Symbol after converting it to a string explicitly:
alert(id1.toString()); // Symbol(id)
// or just alert the description
alert(id2.description); // id

/* hidden property */

let idSymbol = Symbol("idSymbol");
let user = {
  name: "John",
  age: 30,
  // Symbol in an object literal:
  [idSymbol]: 123,
  // id as a string
  // id: 123
};
let id = Symbol("id");
// Symbol used as a key
user[id] = 90;
alert(user[id]); // 90

// Hidden: Symbol will be skipped in for..in loop
for (let key in user) alert(key);
// access the Symbols
alert(user[id]);
alert(user[idSymbol]);

/* global Symbols in the global symbol registry */

let idRegister = Symbol.for("id");
let idAgain = Symbol.for("id");
let idDiff = Symbol.for("yes");
// the same Symbol
alert(idRegister === idAgain);
// not the same
alert(idRegister === idDiff);
// get the description (name)
alert(Symbol.keyFor(idRegister)); // id
alert(Symbol.keyFor(idDiff)); // yes
