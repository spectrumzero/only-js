"use strict";

alert("Module is evaluated!");

export function sayHi(user) {
  return `Hi, ${user}!`;
}

export function sayHello(user) {
  return `Hello, ${user}!`;
}

export let admin = {
  name: "John",
};
