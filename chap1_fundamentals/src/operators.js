// addition+(or unary plus), subtraction-(or unary negation), multilication*, division/, remainder%, exponentiation**, assignment=
// Some necessary instances are shown below:

// + (binary)
alert(3 + 8); //11
alert(3 + "8"); //38
alert("2" + "3" + 2 + 2); //2322
alert(2 + 2 + "2" + "3"); //423
alert("my" + "string"); //mystring
let apples = "2";
let oranges = "3";
alert(apples + oranges); // 23

// + (unary plus, higher priority than exponentiation)
// no effect on numbers
let y = -2;
alert(+y); // still -2
// convert non-numbers
alert(+true); // 1
alert(+""); // 0
alert(+"989"); //989
alert(+apples + +oranges); // 5

// -; / ; % ; *
// the precedence of the remainder is the same as the division, higher than subtraction
alert(8 % 3); // 2
alert(8 / 3); // 2.66666...
alert(6 - "3"); // 3

// exponentiation **, higher than remainder
alert(4 ** 2); // 16
alert(8 ** (1 / 3)); // 2

// assignment =; with the very low priority of 2
// In JS, every operator will return a value, including assignment.
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(c); // 0
// chaining assignment: from right to left
a = b = c = 2 + 2;

// *=: same low priority as =

// increment ++ or decrement -- can only be applied to variables. higher precedence than unary plus
let counter = 1;
let d = counter++;
alert(d); // 1
d = ++counter;
alert(d); // 3 (the counter has been incremented once)
alert(2 * ++counter); // 2*4 = 8

// bitwise operator: treat arguments as 32-bit integer numbers and work on the level of their binary representation
// comma: each of expressions is evaluated but only the result of the last one is returned; lower than =
let e = (1 + 2, 3 + 4);
alert(e); // 7

/*===========================================================================================*/

// TASK 3
let a1 = prompt("First Number", 1);
let b1 = prompt("Second Number", 2);
// prompt returns user's input in the form of string.
alert(a1 + b1); // 12
// so you should convert the type of the returned value:
alert(+a1 + +b1); // 3
// you can also add a unary plus right before the prompt:
let a2 = +prompt("First Number", 1);
let b2 = +prompt("Second Number", 2);
alert(a2 + b2); // 3

// SUGGESTION: one line one action
