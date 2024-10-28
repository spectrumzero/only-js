/* setTimeout */
function sayHi(phrase, who) {
  alert(phrase + "," + who);
}

let timerId = setTimeout(sayHi, 1000, "Hello", "John");
alert(timerId); // 1

// clearTimeout(timerId); // canceled
alert(timerId); // 1

/* setInterval */
let timerId2 = setInterval(() => alert("tick"), 2000);
// stop
setTimeout(() => {
  clearInterval(timerId2);
  alert("stop");
}, 5000);

/* nested setTimeout */
let timeId3 = setTimeout(function tick() {
  alert("tick");
  timeId3 = setTimeout(tick, 2000);
}, 2000);
