/* rest */
function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert(sumAll(1, 2));

function showName(firstName, lastName, ...titles) {
  alert(firstName + " " + lastName);

  alert(titles[0]);
  alert(titles[1]);
  alert(titles.length);
}

showName("Julius", "Caesar", "Consul", "Imperator");

/* spread */
// array
let arr = [3, 5, 1];
alert(Math.max(...arr)); // 5

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert(Math.max(1, ...arr1, 3, ...arr2, 7)); // 8

let merged = [0, ...arr, 2, ...arr2]; // 0,3,5,1,2,8,3,-8,1
alert(merged);

// other iterables
let str = "hello";
alert([...str]);

// shallow copy
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };

alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
alert(obj === objCopy); // false
obj.b = 4;

alert(JSON.stringify(obj));
alert(JSON.stringify(objCopy));
