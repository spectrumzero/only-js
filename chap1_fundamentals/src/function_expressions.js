/* NOTE:
 * no matter how the funtion is created, a function is a value.
 * A funtion expression is created when the execution reaches it and is usable only from that moment
 * A function declaration can be called earlier than it is defined (When JavaScript prepares to run the script, it first looks for global funtion declaration in it and create functions. After all function declarations are processed, the code is executed.).
 * */

let hiSay = function () {
  alert("Hello");
}; // the name of function can be omitted (anonymous function). the semicolon can not be omitted.

function sayHi() {
  alert("Hello");
}

alert(sayHi); // shows the function code

let func = sayHi; // copy (without parentheses)
sayHi();
func();

// callback functions
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

ask("Do you agree?", showOk, showCancel);
// or
ask("Do you agree?", function () {
  alert("You agreed");
}, function () {
  alert("You canceled the execution.");
}); // the anonymous functions are not accessible outside of the ask function.

// a use case of function expression:
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

// those two functions are still accessible outside of the if block.
welcome();

// you can create a function dynamically:
let Age = prompt("What is your age?", 18);

let Welcome = (age < 18)
  ? function () {
    alert("Hello!");
  }
  : function () {
    alert("Greetings!");
  };
