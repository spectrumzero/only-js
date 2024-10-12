"use strict";
/* reusable dec */
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

/* `new` operator */
let user = new User("Jack");

/* unreusable dec */
let uniqueUser = new function () {
  this.name = "GOD";
  this.isGod = true;
}();

/* add methods */
function CompleteUser(name) {
  this.name = name;
  this.sayHi = function () {
    alert("My name is: " + this.name + "!");
  };
}
