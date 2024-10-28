/* Task 1: Output every second */
function printNumbers(from, to) {
  let current = from;
  let timerId = setInterval(function () {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

function printNumbersNested(from, to) {
  let current = from;
  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

/* Task 2: What will setTimeout show ? */
let i = 0;
setTimeout(() => alert(i), 1); // 100000000

for (let j = 0; j < 100000000; j++) {
  i++;
}
