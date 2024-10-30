"use strict";

/* Object.getOwnPropertyDescriptor(obj, propertyName) */
let user = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");
alert(JSON.stringify(descriptor, null, 2));

/* Object.defineProperty(obj, propertyName, descriptor) */
let user1 = {};
Object.defineProperty(user1, "name", { value: "John" });
let descriptor1 = Object.getOwnPropertyDescriptor(user1, "name");

alert(JSON.stringify(descriptor1, null, 2));

// writable
let user2 = {
  name: "JohnReadOnly",
};

Object.defineProperty(user2, "name", { writable: false });

// user2.name = "i want to change"; // strict mode
alert(user2.name); // still JohnReadOnly

// enumerable
let user3 = {
  name: "Jack",
  toString() {
    return this.name;
  },
};

for (let key in user3) alert(key);

Object.defineProperty(user3, "toString", {
  enumerable: false,
});

for (let key in user3) alert(key);

// configurable
let descriptor2 = Object.getOwnPropertyDescriptor(Math, "PI");
alert(JSON.stringify(descriptor2, null, 2));

let user4 = {
  name: "Stones",
};

Object.defineProperty(user4, "name", {
  writable: false,
  configurable: false,
});

/* Object.defineProperties(obj, descriptors); */
let user5 = { name: "John" };
Object.defineProperties(user5, {
  name: { value: "Jerry", writable: false },
  friendName: { value: "Tom", writable: false },
});

/* Object.getOwnPropertyDescriptors(obj) */
let descriptors = Object.getOwnPropertyDescriptors(user5);
alert(JSON.stringify(descriptors, null, 2));

let clone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(user5),
);

alert(clone.name); // Jerry
