// NOTE: javascript as a dynamically typed programming language.

// 1, String
let str = "hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str2}`;
alert(`${str}!`);
alert(`the result is ${1 + 2}`); //the result is 3

// 2, Number
str = 134;
// Infinity
alert(1 / 0);
alert(Infinity);
// NaN: a computational error
alert("not a number" / 2);
// Any further mathematical operation on NaN returns NaN, with only one exception: NaN ** 0 == 1;
alert(NaN ** 0);
alert(NaN + 1);

// 3, Bigint
const bigInt = 1234567890123456789012345678901234567890n;

// 4, Boolean
let nameFieldChecked = true;
let isGreater = 4 > 1; //true
alert(isGreater);

// 5, null(unknown)
let age = null;
alert(age);

// 6, undefined
let name;
alert(name);

// 7, Object: used to store collections of data and more complex entities. NOTE: it isnt primitive
// 8, Symbol: used to create unique identifiers for objects.

// the `typeof` operator returns the type of the operand:
typeof 0; // == typeof(0);
