"use strict";

/* syntax */
try {
  alert("start!");
  lalala;
} catch (err) {
  alert("error appeared!");
}

setTimeout(function () {
  try {
    noSuchVariable;
  } catch {
    alert("error was captured!");
  }
}, 1000);

/* error object */
try {
  lalala;
} catch (err) {
  alert(err.name);
  alert(err.message);
  alert(err.stack);
}

// a practical case
let json = "{ bad json }";

try {
  let user = JSON.parse(json);
  alert(user.name);
} catch (err) {
  alert(err.name);
  alert(err.message);
}

// error constructor
let error1 = new Error("Things happen o_O");
alert(error1.name);
alert(error1.message);

let error2 = new ReferenceError("Errors happen o_O");
alert(error2.name);
alert(error2.message);

// throw
let json2 = '{ "age": 30 }';
try {
  let user = JSON.parse(json2);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // stop execution
  }

  alert(user.name);
} catch (err) {
  alert("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
}

// rethrow
function readData() {
  let json = '{ "age": 30 }';
  try {
    aljlaf; // not an error of incompleteness

    let user = JSON.parse(json);
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name");
    }
    alert(user.name);
  } catch (err) {
    if (!(err instanceof SyntaxError)) {
      throw err; // rethrow
    }
    alert("JSON Error: " + err.message);
  }
}

try {
  readData();
} catch (err) {
  alert("External catch got: " + err);
}

/* try...catch...finally */
let num = +prompt("Enter a positive integer number?", 35);

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert(`execution took ${diff}ms`);
