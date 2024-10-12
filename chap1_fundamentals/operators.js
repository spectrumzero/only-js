"use strict";
/* + (binary) */
alert(3 + 8); //11
alert(3 + "8"); //38
alert("my" + "string"); //mystring

/* + (unary plus) */
// convert non-numbers
alert(+true); // 1
alert(+""); // 0
alert(+"989"); //989

/* -; / ; % ; * */
alert(8 % 3); // 2
alert(8 / 3); // 2.66666...
alert(6 - "3"); // 3

/* ** */
alert(4 ** 2); // 16
alert(8 ** (1 / 3)); // 2

/* = */

// NOTE: In JS, every operator will return a value, including assignment.
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(c); // 0

// chaining assignment: from right to left
a = b = c = 2 + 2;

/* *= */

/* ++; --  */
let counter = 1;
let d = counter++; // 1
d = ++counter; // 3

/* bitwise operator */

/* comma */
let e = (1 + 2, 3 + 4); // e = 7
