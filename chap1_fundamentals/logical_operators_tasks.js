"use strict";
/* Task 1: what is the result */

// First, the nested function alert(1) was excuted. this function returns undefined, which is falsy.
// Then, the number 2 was checked and returned.
// Therefore, 1 is printed first, followed by 2. the value 3 is ignored.
alert(alert(1) || 2 || alert(3));

/* Task 2: what is the result */
alert(alert(1) && alert(2)); // 1->undefined

/* Task 3: what is the result */
alert(null || 2 && 3 || 4); // 3

/* Task 4: a question about if */

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert("first");
// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert("second");
// Runs
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert("third");

/* Task 5: check the login */
let userName = prompt("Who's there?", "");
if (userName === "Admin") {
  let password = prompt("Password?", "");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled.");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
