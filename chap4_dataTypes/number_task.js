"use strict";
/* Task 1: why 6.35.toFixed(1) == 6.3 rather than 6.4; */
alert(6.35.toFixed(20)); // 6.34999999999999964473
alert((6.35 * 10).toFixed(20)); // 63.50000000000000000000
alert(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

/* Task 2: Repeat until the input is a number */
function readNumber() {
  let num;
  do {
    num = prompt("input a number", 0);
  } while (!isFinite(num));

  if (num == null || num === "") return null;

  return +num;
}
readNumber();

/* Task 3: a random number from min to max */
function random(min, max) {
  let num;
  num = min + Math.random() * (max - min);
  return num;
}
alert(random(1, 5));

/* Task 4: a random integer from min to max */

// WARNING: Wrong Answer; not completely random
// randoms from 1    ... to 1.4999999999  become 1
// randoms from 1.5  ... to 2.4999999999  become 2 (highest probability)
// randoms from 2.5  ... to 2.9999999999  become 3
function randomIntegerWrong(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

// NOTE: Right Answers:
// one:
// randoms from 0.5  ... to 1.4999999999  become 1
// randoms from 1.5  ... to 2.4999999999  become 2
// randoms from 2.5  ... to 3.4999999999  become 3
function randomIntegerOne(min, max) {
  // now rand is from  (min-0.5) to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max + 0.5 - (min - 0.5));
  return Math.round(rand);
}

// NOTE:
// two:
// ramdoms from 1  ... to 1.9999999999  become 1
// randoms from 2  ... to 2.9999999999  become 2
// randoms from 3  ... to 3.9999999999  become 3
function randomIntegerTwo(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomIntegerTwo(1, 3));
