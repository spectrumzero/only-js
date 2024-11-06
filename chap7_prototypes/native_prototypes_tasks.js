/* Task 1: Add method "f.defer(ms)" to all functions */
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

f.defer(1000);

/* TODO:Task 2: Add the decorating "defer()" to functions */
Function.prototype.wrapDefer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

// global
function f2(a, b) {
  alert(a + b);
}
f2.wrapDefer(1000)(1, 2);

// object
let user = {
  name: "John",
  sayHi() {
    alert(this.name);
  },
};
user.sayHi = user.sayHi.wrapDefer(1000);
user.sayHi();
