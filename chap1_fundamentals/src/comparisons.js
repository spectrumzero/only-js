// NOTE: comparison operators always return a boolean value.

// between numbers
alert(2 > 1); // true

let result = 2 > 1;
alert(result); // true

// between strings
alert("z" > "a"); // true
alert("Glow" > "Glee"); // true
alert("Glow" > "glee"); // false
alert("2" > "12"); // true

// between different types:
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

// Notice 1: an equality check(8) == and comparisons(9) > < >= <= work differently when they process the comparisons concerning null and undefined.
alert(null > 0); // false: 0>0
alert(null == 0); // false: null==number (no conversion here)
alert(null >= 0); // true! the comparison converts null to the number zero, but == not.
// Notice 2: undefined is incomparable
alert(undefined > 0); // false: NaN>0 ==> false (with type conversion)
alert(undefined < 0); // false: NaN<0 ==> false (with type conversion)
alert(undefined == 0); // false: undefined != number (no type conversion; btw, undefined only equals null and undefined.)
