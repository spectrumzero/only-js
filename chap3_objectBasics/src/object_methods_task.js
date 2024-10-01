"use strict";

// Task 1: Using this in object literal
function makeUser() {
  return {
    name: "John",
    // this here is not bound to a object METHOD, so it is undefined
    ref: this,
  };
}

let user = makeUser();

// alert(user.ref.name); // an error happended
//
// rewrite:
function makeUserRe() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

user = makeUserRe();

alert(user.ref().name);

// Task 2: Create a calculator
let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt("please enter the first number", "0");
    this.b = +prompt("please enter the second number", "0");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Task 3: Chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
