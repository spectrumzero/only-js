/* Task 1: Add toString to the dictionary */
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join(",");
    },
  },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
  alert(key);
}

alert(dictionary);

/* The difference between calls */
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined
