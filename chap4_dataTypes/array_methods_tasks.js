/* Task 1: Translate border-left-width to borderLeftWidth */
function camlize(str) {
  return str.split("-").map((item, index) =>
    index == 0 ? item : item[0].toUpperCase() + item.slice(1)
  ).join("");
}
alert(camlize("list-style-image"));

/* Task 2: Filter range */
function filterRange(arr, a, b) {
  return arr.filter((item) => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1

/* Task 3: Filter range "in place" */
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr); // 3,1

/* Task 4: Sort in decreasing order */
arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);

/* Task 5: Copy and sort array */
function copySorted(arr) {
  return arr.slice().sort();
}

arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

/* NOTE: Task 6: Create an extendable calculator */

function Calculator() {
  // property
  this.method = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  // method
  this.calculate = function (str) {
    let split = str.split(" "), a = +split[0], op = split[1], b = +split[2];
    if (!this.method[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.method[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.method[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let res = powerCalc.calculate("2 ** 3");
alert(res); // 8

/* Task 7: Map to names */
let users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
];

let names = users.map((item) => item.name);
alert(names);

/* Task 8: Get average age */
function getAverageAge(arr) {
  return arr.reduce((accum, item) => accum + item.age, 0) / arr.length;
}
alert(getAverageAge(users)); // 28

/* Task 9: Map to objects */
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let newUsers = [john, pete, mary];

let newUsersMapped = newUsers.map((user) => ({
  fullName: user.name + " " + user.surname,
  id: user.id,
}));
alert(newUsersMapped[0].id); // 1
alert(newUsersMapped[0].fullName); // John Smith

/* Task 10: Sort users by age */
function sortByAge(users) {
  arr.sort((a, b) => a.age - b.age);
}

/* Task 11: Filter unique array members */
function unique(arr) {
  let newArr = [];
  for (let str of arr) {
    if (!newArr.includes(str)) {
      newArr.push(str);
    }
  }
  return newArr;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O

/* NOTE: Task 12: Create keyed object from array */
function groupById(arr) {
  return arr.reduce((accum, item) => {
    // dynamic assaignment
    accum[item.id] = item;
    return accum;
  }, {});
}

users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
for (let k in usersById) {
  alert(k);
  alert(usersById[k]); // [object Object]
}

// result would be:
// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
