"use strict";
/* multiple lines */
let guestList = `
* John
* Pete
* Mary
`;

alert(guestList);

/* Special characters (escape characters) */

// newline character
let newguestList = "Guests:\n * John\n * Pete\n * Mary";
alert(newguestList);

// quotes
alert("I'm the Walrus!");

// backslash
alert(`the backslash: \\`);

/* Str.length */
alert("nihao".length);

/* access a character */

let str = `hello`;
alert(str[str.length - 1]); // o
// or:
alert(str.charAt(str.length - 1)); // o

// traverse
for (let char of "Hello") {
  alert(char);
}

/* Searching for a substring */

// 1, str.indexOf(substr,pos);
let search = "Widget with id";
alert(str.indexOf("Widget")); // 0
alert(str.indexOf("widget")); // -1; not found
alert(str.indexOf("id")); // 1
alert(str.indexOf("id", 2)); // 12

// all occurrences:
str = "As sly as a fox, as strong as an ox";

let target = "as";

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert(`Found at ${foundPos}`);
  pos = foundPos + 1;
}

// 2, str.includes(substr,pos);
//    str.startsWith(substr,pos);
//    str.endsWith(substr,pos);
alert("Widget with id".includes("Widg")); // true
alert("Widget with id".includes("Widg", 4)); // false
alert("hello".includes("BYE")); // false
alert("Widget".startsWith("Wid")); // true
alert("Widget".endsWith("get")); // true

/* Get a substring */

// str.slice(start [,end])
str = "stringify";
alert(str.slice(0, 1)); // 's'
alert(str.slice(2)); // 'ringify'

alert(str.slice(-4, -1)); // 'gif'

// str.substring(start [,end]);
str = "stringify";
alert(str.substring(2, 6)); // "ring"

// str.substr(start [, length])
str = "stringify";
alert(str.substr(2, 4)); // "ring"

alert(str.substr(-4, 2)); // 'gi

/* str.codePointAt(pos) */
alert("z".codePointAt(0)); // 122
alert("Z".codePointAt(0)); // 90

/* String.fromCodePoint(code) */
alert(String.fromCodePoint(90)); // Z
// or:
alert("\u005a"); // "Z"

/* str.localeCompare(str2): */
alert("Österreich".localeCompare("Zealand")); // -1: Österreich is less than Zealand

/* Change the case */
alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); // interface
alert("Interface"[0].toLowerCase()); // 'i'
