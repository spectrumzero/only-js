// backtick quotes allow to split the long string into multiple lines.
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

// Task 1: Bad style => Good style
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) result *= x;
  return result;
}

let x = prompt("x?", ""), n = prompt("n?", "");
if (n <= 0) {
  alert(
    `Power ${n} is not supported, please enter an integer number greater than zero`,
  );
} else {
  alert(pow(x, n));
}
