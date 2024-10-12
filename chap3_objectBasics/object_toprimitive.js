"use strict";
/* Symbol.toPrimitive(hint) */
let user = {
  name: "John",
  money: 1000,

  // system Symbol
  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name:"${this.name}"}` : this.money;
  },
};

// use case
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

/* toString(); valueOf() */
let normalUser = {
  name: "Mery",
  money: 9000,

  // hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },
  // hint="number" or "default"
  valueOf() {
    return this.money;
  },
};

// use case
alert(normalUser); // toString -> {name: "Mery"}
alert(+normalUser); // valueOf -> 9000
alert(normalUser + 500); // valueOf -> 9500

/* or just with toString(). it handles all situations */
let userName = {
  name: "Jack",

  toString() {
    return this.name;
  },
};
alert(userName); // Jack
alert(userName + " " + 2024); // Jack 2024
