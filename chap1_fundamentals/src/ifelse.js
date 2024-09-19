// Task 2
"use strict";

let name = prompt("what is the 'official' name of JavaScript?", "");
if (name == "ECMAScript") {
  alert("right!");
} else {
  alert("You don't know? 'ECMAScript'!");
}

// Task 3
let num = prompt("please type a number", "");
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}

// Task 4
let result = (a + b) < 4 ? "Below" : "Over";

// Task 5
let message = (login == "Employee")
  ? "Hello"
  : (login == "Director")
  ? "Greetings"
  : (login == "")
  ? "No login"
  : "";
