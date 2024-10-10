let billionSugar = 1_000_000_000;
let billion = 1e9;

let mcs = 0.000001;
mcs = 1e-6;
mcs = 123e-6; // 0.000123

// toString(base)
let num = 255;
alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111
alert((123456).toString(36));
alert(123456..toString(36));

// rounding (return a string directly)
let pos = 3.1;
let neg = -1.1;
// rounds down:
alert(Math.floor(pos)); // 3
alert(Math.floor(neg)); // -2
// rounds up:
alert(Math.ceil(pos)); // 4
alert(Math.ceil(neg)); // -1
// rounds to the nearest integer:
alert(Math.round(pos)); // 3
alert(Math.round(neg)); // -1
// round the number to n-th digit after the decimal
// method one: multiply and divide
num = 1.23456;
alert(Math.round(num * 100) / 100); // 1.23
// method two (to the nearest value):
alert(num.toFixed(2)); // 1.23

// isNaN(value): converts its augument to a number and then tests it for being NaN. NaN doesntj equal anything, including itself.
alert(isNaN(NaN)); // true
alert(isNaN("str")); // true
alert(isNaN("15")); // false
alert(isNaN(15)); // false

// isFinite(value): converts its argument to a number and returns true if it is a regular number, not NaN/Infinity(greater than any number)/-Infinity(less than any number)
alert(isFinite("15")); // true
alert(isFinite("134pxp")); // false
alert(isFinite("str")); // false (NaN)
alert(isFinite(Infinity)); // false

// parseInt(); parseFloat();
alert(parseInt("100px")); // 100
alert(parseFloat("12.5em")); // 12.5

alert(parseInt("ff", 16)); // 255
alert(parseInt("2n9c", 36)); // 123456

// math.random(): returns a random number in the range of [0,1)
alert(Math.random());

// math.max(a,b,c); math.min(a,b,c)
alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1

// math.pow(n,power): returns n raised to the given power
alert(Math.pow(2, 10)); // 2 in power 10 = 1024

// NOTE: Imprecise calculation: there is a loss of precision when working with fractions
alert(0.1 + 0.2 == 0.3); // false
// solution:
let sum = 0.1 + 0.2;
alert(+sum.toFixed(2));
// or:
alert((0.1 * 10 + 0.2 * 10) / 10 == 0.3); // true
// the multiply/divide approach reduces the error, but doesnt remove it totally:
alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
