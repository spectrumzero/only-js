"use strict";

/* getter and setter */
let user = {
  name: "John",
  surname: "Smith",

  // accessors:
  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

alert(user.fullName);

user.fullName = "Alice Cooper";
alert(user.name);

/* descriptors of accessor property */
let user2 = {
  name: "Jack",
  surname: "Chan",
};

Object.defineProperty(user2, "fullName", {
  get() {
    return `${this.name} ${this.surname}!`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },

  // fullName is counted
  enumerable: true,

  configurable: true,
});

alert(user2.fullName);
for (let key in user) alert(key); // `fullName` is counted

/* Smarter */
let smartUser = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

smartUser.name = "l"; // failed
smartUser.name = "lllspecter"; // successful
alert(smartUser.name);

/* Using for compatibility */
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // NOTE: object.defineProperty() inside a Constructor
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let specter = new User("specter", new Date(2002, 0, 2));
alert(specter.birthday);
alert(specter.age);
