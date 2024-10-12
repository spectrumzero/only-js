"use strict";
/* Task 1: Two functions - one object */

// only possible when they dont return the original this
let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

alert(new A() == new B()); // true

/* Task 2: create a new Calculator */
function Calculator() {
  this.read = function () {
    this.a = +prompt("enter a", "0");
    this.b = +prompt("enter b", "0");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

/* Task 3: create new Accumulator */
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    let add = +prompt("enter a new number", "0");
    this.value += add;
  };
}
let accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
alert(accumulator.value);
