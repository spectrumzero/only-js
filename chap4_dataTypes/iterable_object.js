/* general usage */
let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  alert(num); // 1,2,3,4,5
}

/* string as built-in iterable object */
for (let char of "test") {
  alert(char);
}

/* call iterator explicitly */
let str = "Hello";
// NOTE:the Symbol.iterator method here is built-in in string, so you dont need to write on your own.
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value);
}

/* array-like object */
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

/* Array.from() */
let arr = Array.from(arrayLike);
alert(arr.pop()); // World
arr = Array.from(range);
alert(arr); // 1,2,3,4,5

// Array.from(obj [,mapFn,thisArg])
let squareArr = Array.from(range, (item) => item * item);
lert(squareArr); // 1,4,9,16,25
