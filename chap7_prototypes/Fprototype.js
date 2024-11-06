/* F.prototype */
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

// NOTE: by default, every function has `prototype` property named `constructor`, which references the function itself. It can be modified.
Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); // rabbit.__proto__ == animal

alert(rabbit.eats);

/* constructor prop */
function Rabbit2(name) {
  this.name = name;
  alert(name);
}

let rabbit2 = new Rabbit2("Red Rabbit");
alert(rabbit2.constructor == Rabbit2); // true

// NOTE:
let rabbit3 = new rabbit2.constructor("Black Rabbit");

// ensure correct constructor prop
function Rabbit4() {
  Rabbit4.prototype.jumps = true;
}

// or:
Rabbit4.prototype = {
  jumps: true,
  fly: true,
  constructor: Rabbit4,
};
