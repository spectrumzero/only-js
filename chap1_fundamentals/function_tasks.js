"use strict";
/* NOTE:
   argument: the value that is passed to the function when it is called
   ONE FUNCTION, ONE ACTION
   Functions == Comments
*/

/* Task 1: rewrite the function using "?" or "||" */

// ?
function checkAge(age) {
  return age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
}

// ||
function checkAgeOR(age) {
  return age > 18 ||
    confirm("Do you have your parents permission to access this page?");
}

/* Task 2: function min(a,b) */
function min(a, b) {
  return a < b ? a : b;
}

/* Task 3: function pow(x,n) */
function pow(x, n) {
  return x ** n;
}

let x = prompt("x?", "");
let n = prompt("n?", "");
if (n < 1) {
  alert(`Power ${n} is not supported`);
} else {
  alert(pow(x, n));
}
