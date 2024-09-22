// Task 1: the name of JavaScript
"use strict";

let name = prompt("what is the 'official' name of JavaScript?", "");
if (name == "ECMAScript") {
  alert("right!");
} else {
  alert("You don't know? 'ECMAScript'!");
}

// Task 2: show the sign
let num = prompt("please type a number", "");
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}

// Task 3: rewrite if into ?
let result = (a + b) < 4 ? "Below" : "Over";

// Task 4: rewrite if..else into ?
let message = (login == "Employee")
  ? "Hello"
  : (login == "Director")
  ? "Greetings"
  : (login == "")
  ? "No login"
  : "";
