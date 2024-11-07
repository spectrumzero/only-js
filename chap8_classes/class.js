/* Basics */
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

let user = new User("John");
user.sayHi();

/* what is a `class` */
alert(typeof User); // function
alert(User === User.prototype.constructor); // true
alert(User.prototype.sayHi); // code
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

/* expression of class */
// syntax
let Greeting = class {
  sayHi() {
    alert("Hello");
  }
};

// create a class dynamically
function makeClass(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

let User2 = makeClass("Hello");
new User2().sayHi(); // hello

/* Getters/Setters */
class User3 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user3 = new User3("John");
alert(user3.name);

/* computed property */
class User4 {
  ["say" + "Hi"]() {
    alert("Hello");
  }
}

new User4().sayHi(); // Hello

/* Class fields */
class User5 {
  name = "John";
  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

// TODO:
// Making bound methods with class fields
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  };
}
