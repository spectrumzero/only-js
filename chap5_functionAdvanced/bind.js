/* case of losing this */
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};

user.sayHi(); // Hello, John!

setTimeout(user.sayHi, 1000); // Hello, undefined!

/* solution 1: wrapper */
setTimeout(() => user.sayHi(), 100);

user = {
  sayHi() {
    alert("Another user in setTimeout!");
  },
};

/* solution 2: bind */

// object method
let user2 = {
  firstName: "Jack",
  sayHello() {
    alert(`Hello, ${this.firstName}!`);
  },
};

let sayHello = user2.sayHello.bind(user2);
sayHello();
setTimeout(sayHello, 1000); // Hello, Jack

user2 = {
  sayHello() {
    alert("NOT Another user in setTimeout!");
  },
};

// global method
let user3 = {
  firstName: "Merry",
};

function func(phrase) {
  alert(phrase + ", " + this.firstName + "!");
}

let funcUser = func.bind(user3);

funcUser("Hello"); // context: user

/* Partial functions */
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);
alert(double(3)); // 6
