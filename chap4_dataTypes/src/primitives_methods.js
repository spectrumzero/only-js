// "use strict";

let str = "Hello";
alert(str.toUpperCase()); //  WARNING: the object wrapper `String` will be deleted right after the method returns its value.

let n = 1.23456;
alert(n.toFixed(2)); // 1.23

alert(typeof 0);
alert(typeof new Number(0)); // object

// not recommended:
let zero = new Number(0);
if (zero) {
  alert("zero is truthy?!?!?!?!?!!?");
}

// OK:
let num = Number("123"); // type conversion

// null and undefined have no object wrapper.

alert("ends here");
str.test = 5; // (*): strict mode: error
alert("no wrapper exists");
alert(str.test); // unstrict mode: undefined (the temporary wrapper was deleted right after line *)
