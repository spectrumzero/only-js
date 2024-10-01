// WARNING:
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
// when a function is declared, it may use `this`, but that `this` has no value until the function is called. the value of this is defined at run-time.
"use strict";

let user = {};

// add a method using a dot symbol
user.sayHi = function () {
  alert("Hi!");
};
// or
user = {
  name: "John",
  sayHello: function () {
    alert("Hello!");
  },
};
// or
user = {
  name: "John",
  age: 30,

  sayHi() {
    alert("Hi!");
  },
  sayHello() {
    alert("Hello!");
  },
  // the usage of `this` bound to the object method
  sayYes() {
    alert("Yes!");
    // use `this` pointer to access the current object. ( NOTE: it can be used in functions which are not methods of objects, but eventually, it plays the role of reading a object)
    alert(`this is ${this.name}!`);
  },
};

// call
user.sayHi();
user.sayHello();
user["sayYes"]();

// more about `this`:
// 1. `this` in arrow funtion:
// the arrow function doesnt have its own this. in such cases, this depends on the external normal function.
let newUser = {
  firstname: "Ilya",
  sayHi() {
    // `this` of arrow() comes from the `this` of user.sayHi() method => newUser.firstname
    let arrow = () => alert(this.firstname);
    arrow();
  },
};

newUser.sayHi();

// 2. `this` in non object methods:
// NOTE: `this` here will be bound to the object method eventually
let adminA = { name: "adminA" };
let adminB = { name: "adminB" };

function sayHi() {
  alert(this.name);
}

// the value of `this`--that is, the object it points to--in the global function `sayHi` is evaluated during the run-time, depending on the context
adminA.f = sayHi;
adminB.f = sayHi;

adminA.f(); // John  (this == user)
adminB.f(); // Admin  (this == admin)

// WARNING: 3. this not bound to any object method (there is not object at all):
function sayNo() {
  alert(this);
}

sayNo(); // this == undefined
