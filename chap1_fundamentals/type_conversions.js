"use strict";
/* string conversion */
let value = true;
alert(typeof value); // Boolean
value = String(value);
alert(typeof value); // String

/* numeric conversion */

// implicit
alert("6" / "2"); // 3
let str = "123";
alert(typeof str); // String

// explicit
let num = Number(str);

// examples:
alert(Number("297947 ")); // 297947
alert(Number(null)); // 0
alert(Number(false)); // 0
alert(+""); // 0
alert(+" "); // 0
alert(Number("238238z")); // failed: NaN
alert(Number(undefined)); // failed: NaN

/* boolean conversion */

// True:
alert(Boolean(1));
alert(Boolean("hello"));
alert(Boolean(" "));
alert(Boolean("0"));
alert(Boolean(-100));

// False:
alert(Boolean(0));
alert(Boolean(""));
alert(Boolean(null));
alert(Boolean(undefined));
alert(Boolean(NaN));
