// 3 ways of interacting with users

// alert: pop up a modal window
alert("Hello");

// prompt(title,[default]): return user's input (string). if canceled, return null.
let age = prompt("How old are you?", 100);
alert(`you are ${age} years old!`);

// confirm(question): return true or false
let isBoss = confirm("Are you the boss?");
alert(isBoss);

// Task 1: a simple page
let name = prompt("What's your name?", "");
alert(`your name is ${name}`);
