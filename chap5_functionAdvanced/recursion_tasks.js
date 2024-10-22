/* Task 1: Sum all numbers till the given one */
function sumToIter(n) {
  sum = 0;
  for (let i = 1; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}

function sumToRec(n) {
  if (n == 1) return 1;
  return n + sumToRec(n - 1);
}

function sumToMath(n) {
  return (1 + n) * n / 2;
}

alert(sumToMath(100));

/* Task 2: Calculate factorial */
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

alert(factorial(5));

/* Task 3: Fibonacci numbers */
function fib(n) {
  if (n == 1 || n == 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibIter(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i < n + 1; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(fibIter(77));

/* Task 4: Output a single-linked list */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let cur = list;
  while (cur) {
    alert(cur.value);
    cur = cur.next;
  }
}

function printListRec(list) {
  alert(list.value);
  if (list.next) {
    printList(list.next);
  }
}

printListRec(list);

/* Task 5: Output a single-linked list in the reverse order */
function reversePrintListRec(list) {
  if (list.next) {
    reversePrintListRec(list.next);
  }
  alert(list.value);
}

function reversePrintList(list) {
  let cur = list;
  let arr = [];
  while (cur) {
    arr.push(cur.value);
    cur = cur.next;
  }

  let size = arr.length;
  for (let i = size - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}

reversePrintListRec(list);
