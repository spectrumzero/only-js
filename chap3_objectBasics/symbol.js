"use strict";
/* unique property */

let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

alert(id1.toString()); // Symbol(id)
alert(id2.description); // id

/* hidden property */

let idSymbol = Symbol("idSymbol");
let user = {
  name: "John",
  age: 30,
  [idSymbol]: 123,
};

// Hidden: Symbol will be skipped in for..in loop
for (let key in user) alert(key);

// access the Symbols
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
