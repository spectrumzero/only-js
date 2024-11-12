/* syntax */
// with class
class Rabbit {}
let rabbit = new Rabbit();
// with Constructor
function Animal() {}
let dog = new Animal();
// with built-in class
let arr = [1, 2, 3];

alert(rabbit instanceof Rabbit); // true
alert(dog instanceof Animal); // true
alert(arr instanceof Array); // true
alert(arr instanceof Object); // true

/* customization */
class Monster {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };
alert(obj instanceof Monster); // true

/* a longer progress */
class Cat extends Animal {}
let cat = new Cat();
alert(cat instanceof Animal);
// why true:
// cat.__proto__ !=== Animal.prototype (cat.__proto__ === Cat.prototype)
// cat.__proto__.__proto__ === Animal.prototype

/* only check `prototype` chain */
function Bird() {}
let sparrow = new Bird();
Bird.prototype = {};
alert(sparrow instanceof Bird); // false
