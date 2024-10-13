"use strict";

/* Dec */
let fruits = ["Apple", "Orange", "Plum", { name: "John" }, true];

/* length */
let length = fruits.length; // 5 = largest index + 1

/* at */
alert(fruits.at(-1)); // true

/* queue */
fruits.shift();
fruits.push("Pear");

/* stack */
fruits.pop();
fruits.push("Pear");

/* unshift */
fruits.unshift("Peach");

/* delete */
fruits.length = 0;

/* loop */

// for loop
let arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}

// for of loop
for (let x of arr) {
  alert(x); // only values
}

/* multidimensional arrays */
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
alert(matrix[0][1]); // 2
