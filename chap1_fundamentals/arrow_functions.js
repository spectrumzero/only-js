"use strict";
/* basic usage */
let sumArrow = (a, b) => a + b;

/* no argument */
let sayHi = () => alert("Hello");

/* only one argument */
let double = (n) => n * 2;

/* create a function dynamically */
let age = prompt("What is your age", 18);
let welcome = (age < 18) ? () => alert("Hello!") : () => alert("Greetings!");

/* mutiple rows */
let Sum = (a, b) => {
  let result = a + b;
  return result;
};
