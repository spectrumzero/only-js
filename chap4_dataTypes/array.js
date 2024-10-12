"use strict";
// Declaration:
let arr = new Array();
// or
let fruits = ["Apple", "Orange", "Plum"];

// we can replace an element:
fruits[2] = "Pear";
// or add a new one:
fruits[3] = "Lemon";

alert(fruits.length); // 4
alert(fruits); // show the whole array

// an array can store elements of any type:
let anyType = ["apple", { name: "John" }, true, function () {
  alert("hello");
}];

// get the object at index 1 and then show its name
alert(anyType[1].name); // John

// get the function at index 3 and run it
anyType[3](); // hello

// Get the last element using `at`:
// arr.at(i): if i>=0, the expression is exactly the same as arr[i]; if i<0, it steps back from the end of the array
fruits = ["Apple", "Orange", "Plum"];
// same as fruits[fruits.length-1]
alert(fruits.at(-1)); // Plum
