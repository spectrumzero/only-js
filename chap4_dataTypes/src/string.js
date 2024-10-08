// // Another advantage of using backticks is that they allow a string to span mutiple lines
// let guestList = `
// * John
// * Pete
// * Mary
// `;
//
// alert(guestList);
//
// // Special characters (escape characters)
// // newline character
// let newguestList = "Guests:\n * John\n * Pete\n * Mary";
// alert(newguestList);
// // quotes
// alert("I'm the Walrus!");
// // backslash
// alert(`the backslash: \\`);
//
// // Str.length (this is a property rather than a function)
// alert("nihao".length);

// Access characters
let str = `hello`;
alert(str[str.length - 1]); // o
// or:
alert(str.charAt(str.length - 1)); // o
// distinction:
alert(str[1000]); // undefined
alert(str.charAt(1000)); // ''
// or: for..of
for (let char of "Hello") {
  alert(char);
}

// Strings are immutable:
// str[0] = "y"; // wrong

// Change the case
alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); // interface
alert("Interface"[0].toLowerCase()); // 'i'

// Searching for a substring
// method 1: case-sensitive str.indexOf(substr,pos);
let search = "Widget with id";
alert(str.indexOf("Widget")); // 0
alert(str.indexOf("widget")); // -1 represents not found
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
  pos = foundPos + 1; // continue the search from the next position
}
// method 2: str.includes(substr,pos); str.startsWith(substr,pos); str.endsWith(substr,pos); true or false
alert("Widget with id".includes("Widg")); // true
alert("Widget with id".includes("Widg", 4)); // false
alert("hello".includes("BYE")); // false
alert("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
alert("Widget".endsWith("get")); // true, "Widget" ends with "get"

// Get a substring: substring, substr, slice
// str.slice(start [,end]): returns the part of the string from start to (but not including) end
str = "stringify";
alert(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
alert(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0
alert(str.slice(2)); // 'ringify', from the 2nd position till the end
// start at the 4th position from the right(g), end at the 1st from the right(y)
alert(str.slice(-4, -1)); // 'gif'

// str.substring(start [,end]);
