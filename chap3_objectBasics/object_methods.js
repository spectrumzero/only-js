"use strict";

let user = {};

/* add a method using a dot  */

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

// or more brief
user = {
  name: "John",
  sayHello() {
    alert("Hello!");
  },
};

// call
user.sayHello();
user["sayHello"]();

/* more about `this`: */

// 1. `this` in arrow funtion:
let newUser = {
  firstname: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstname);
    arrow();
  },
};

newUser.sayHi(); // Ilya

// 2. `this` in non object methods:

function sayHi() {
  alert(this.name);
}

let adminA = { name: "adminA" };
let adminB = { name: "adminB" };

adminA.f = sayHi;
adminB.f = sayHi;

adminA.f(); // AdminA  (this == user)
adminB.f(); // AdminB  (this == admin)

// 3. this not bound to any object method (there is not object at all):
function sayNo() {
  alert(this);
}

sayNo(); // this == undefined
