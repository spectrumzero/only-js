function sumDec(a, b) {
  return a + b;
}

let sumExp = function (a, b) {
  return a + b;
};

// basic usage
let sumArrow = (a, b) => a + b;
alert(sumArrow(1, 2)); // 3
// no argument
let sayHi = () => alert("Hello");
sayHi();
// only one argument (parentheses are omitted):
let double = (n) => n * 2;

// create a function dynamically
let age = prompt("What is your age", 18);
let welcome = (age < 18) ? () => alert("Hello!") : () => alert("Greetings!");

// mutiple rows: use braces
let Sum = (a, b) => {
  let result = a + b;
  // there must be an explicit return statement if we use curly braces. ofcs the returned value dont have to be the result here.
  // NOTE: functions always return something, including those written in arrow function form. if there is no return statement, undefined will be returned.
  return result;
};

// Task 1: rewrite with arrow functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed"),
  () => alert("You canceled the execution."),
);
