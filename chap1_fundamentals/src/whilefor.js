// Task 1: output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 != 0) {
    continue;
  }
  alert(i);
}

// Task 2: replace for with while
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Task 3: repeat until the input is correct
while (true) {
  let input = prompt("Enter a number greater than 100", 0);
  if (input > 100 || !input) {
    break;
  }
}

// Task 4: output prime numbers
let n = 20;
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = i - 1; j > 1; j--) {
    if (i % j == 0) {
      continue nextPrime;
    }
  }
  alert(i);
}
