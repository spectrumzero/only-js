/* Task 1: Sum with closures */
function sum(a) {
  return function (b) {
    return a + b;
  };
}

alert(sum(1)(2));

/* Task 2: Filter through function */
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
alert(arr.filter(inArray([1, 2, 10]))); // 1,2

/* Task 3: Sort by field */
function byField(fieldName) {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

users.sort(byField("name"));
users.sort(byField("age"));

/* Army of functions */
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      alert(j);
    };

    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
