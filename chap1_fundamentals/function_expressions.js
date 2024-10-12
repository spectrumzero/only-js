"use strict";
/* dec */
let hiSay = function () {
  alert("Hello");
};

/* copy */
let func = hiSay;

/* callback functions */
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// callback of yes
function showOk() {
  alert("You agreed");
}

// callback of no
function showCancel() {
  alert("You canceled the execution");
}

// call
ask("Do you agree?", showOk, showCancel);

/* a use case of function expression: */
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert("Hello!");
  };
} else {
  welcome = function () {
    alert("Greetings!");
  };
}

welcome();
