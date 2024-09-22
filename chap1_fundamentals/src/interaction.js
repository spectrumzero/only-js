// 3 ways of interacting with users

// alert: pop up a modal window
alert("Hello");

// prompt(title,[default]);
let age = prompt("How old are you?", 100);
alert(`you are ${age} years old!`);

// confirm(question)
let isBoss = confirm("Are you the boss?");
alert(isBoss);

// Task 1: a simple page
let name = prompt("What's your name?", "");
alert(`your name is ${name}`);
