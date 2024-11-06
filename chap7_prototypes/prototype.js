/* [[Prototype]] basics */
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  // NOTE: __proto__ is an accessor for hidden [[Prototype]]
  __proto__: animal,
};

alert(rabbit.eats); // true
alert(rabbit.jumps); // true

rabbit.walk(); // Animal walk

rabbit.walk = function () {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // changed

/* for...in */

// Object.keys()
alert(Object.keys(rabbit)); // jumps,walk
// for..in
for (let prop in rabbit) alert(prop); // jumps; walk; eats

// exclude inherited prop
for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop); // true or false

  if (isOwn) {
    alert(`Our: ${prop}`);
  } else {
    alert(`Inherited: ${prop}`);
  }
}
