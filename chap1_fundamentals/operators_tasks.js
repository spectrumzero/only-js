"use strict";
/* Task 1: fix the addition */

let a1 = prompt("First Number", 1);
let b1 = prompt("Second Number", 2);

// prompt returns user's input in the form of string.
alert(a1 + b1); // 12

// so you should convert the type of the returned value:
alert(+a1 + +b1); // 3

// you can also add a unary plus right before the prompt:
let a2 = +prompt("First Number", 1);
let b2 = +prompt("Second Number", 2);
alert(a2 + b2); // 3

// NOTE: one line one action
