/* Object.create(proto,[descriptors]) */
let animal = {
  eats: true,
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});

alert(rabbit.eats);
alert(rabbit.jumps);

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {});
alert(rabbit.eats); // undefined

/* powerful clone: all the property descriptors and correct [[Prototype]] */
let clone = Object.create(
  Object.getPrototypeOf(rabbit),
  Object.getOwnPropertyDescriptors(rabbit),
);

/* "Very plain" object */
let obj = Object.create(null);

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // "some value"

// still an object (just with no inheritance method)
alert(Object.keys(obj));
