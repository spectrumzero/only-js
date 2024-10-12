"use strict";
/* between numbers */
alert(2 > 1); // true

let result = 2 > 1;
alert(result); // true

/* between strings */
alert("z" > "a"); // true
alert("Glow" > "Glee"); // true
alert("Glow" > "glee"); // false
alert("2" > "12"); // true

/* between different types: */

// there is a type conversion:
alert("2" > 1); // true: 2>1
alert("01" == 1); // true: 1==1
alert(true == 1); // true: 1==1

// regular equality check:
alert(0 == false); // true
alert("" != false); // false
alert(null == undefined); // true;

// strict equality check: no type conversion so different types are not the same as each other.
alert(0 === false); // false
alert("" !== false); // true
