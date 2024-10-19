/* Task 1: Sum the properties */

function sumSalaries(salaries) {
  let salariesArr = Object.values(salaries);
  let sum = 0;
  for (let x of salariesArr) {
    sum += x;
  }
  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

// or:
function sumSalariesBrief(salaries) {
  return Object.values(salaries).reduce(
    (accumulators, item) => accumulators + item,
    0,
  );
}

alert(sumSalariesBrief(salaries)); // 650

/* Task 2: Count properties */
function count(obj) {
  return Object.keys(obj).length;
}
alert(count(salaries)); // 3
