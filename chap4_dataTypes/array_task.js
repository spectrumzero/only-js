/* Task 1: Array operations */
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
let mid = Math.floor((styles.length) / 2);
styles[mid] = "Classics";
alert(styles);
alert(styles.shift());
styles.unshift("Rap", "Reggae");

/* Task 2: Sum input numbers */
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("a number please?", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

alert(sumInput());

/* Task 3: A maximal subarray */
// O(n**2)
function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let curSum = 0;
    for (let j = i; j < arr.length; j++) {
      curSum += arr[j];
      maxSum = Math.max(curSum, maxSum);
    }
  }

  return maxSum;
}
alert(getMaxSubSum([-1, 2, 3, -9])); // 5

// O(n)
function getMaxSubSum2(arr) {
  let maxSum = 0;
  let curSum = 0;
  for (let x of arr) {
    curSum += x;
    maxSum = Math.max(maxSum, curSum);
    if (curSum < 0) curSum = 0;
  }

  return maxSum;
}

alert(getMaxSubSum2([-1, 2, 3, -9, 11])); // 11

alert(isFinite("134pxp")); // false
