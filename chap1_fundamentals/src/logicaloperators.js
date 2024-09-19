// some additional features of logical operators in JavaScript

// OR ||(3): find the first truthy value and return; if not found, return the last value.
alert(1 || 0); // 1
alert(null || 1); // 1
alert(null || undefined || 0); // 0; all falsy, returns the last value
// practical usage:
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert(firstName || lastName || nickName || "Anonymous"); // "SuperCoder";
// short-circuit evaluation: only print the second information
false || alert("printed");

// AND &&(4): find the first falsy value and return; if not found, return the last value.
alert(1 && 2 && null); // null
alert(1 && 2 && 3); // 3

// NOT !(14)
alert(!true); // false
alert(!0); // true
alert(!!"nfajlfj"); // true (do the same thing as Boolean() function)

// Nullish Coalescing ??(3):  returns the first argument if it’s not null/undefined
let user;
alert(user ?? "Anonymous"); // "Anonymous"
user = "John";
alert(user ?? "Anonymous"); // "John"
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0; more suitable than OR because 0 here still makes sense.
// Notice: you can not use ?? together with && or || unless useing parentheses to specify precedence.
// Wrong:
// let x = 1 && 2 ?? 3; // Syntax error
// OK:
let x = (1 && null) ?? 3;
alert(x); // 3

/*==========================================================================================*/

// Task 2
// First, the nested function alert(1) was excuted. this function returns undefined, which is falsy.
// Then, the number 2 was checked and returned. Therefore, 1 is printed first, followed by 2. the value 3 is ignored.
alert(alert(1) || 2 || alert(3));

// Task 4
alert(alert(1) && alert(2)); // 1->undefined

// Task 5
alert(null || 2 && 3 || 4); // 3

// Task 6
// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert("first");
// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert("second");
// Runs
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert("third");

// Task 7
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
