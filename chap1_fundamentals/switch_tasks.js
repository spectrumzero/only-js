"use strict";
/* NOTE: the equality check in switch is always strict: if (x === value1) */

/* Task 1: rewrite the switch into an if */
let browser = prompt("enter your browser name", "");

if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" || browser === "Firefox" || browser === "Safafi" ||
  browser === "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

/* Task 2: rewrite if into switch */

// use + to convert string a to number a
let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
}
