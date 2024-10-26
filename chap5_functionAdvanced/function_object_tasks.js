/* Task 1: Set and decrease for counter */
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => count = value;
  counter.decrease = () => count--;

  return counter;
}

// NOTE:
/* Task 2: Sum with an arbitary amount of brakets */
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

// Currying
let res = sum(0)(1)(2)(3)(4)(5);
alert(res); // toString
