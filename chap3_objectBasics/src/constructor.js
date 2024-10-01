// reusable
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

// use new operator to create a object. the value of `this` will be returned
let user = new User("Jack");

alert(user.name);

// unreusable: it can be called immediately and only once
let uniqueUser = new function () {
  this.name = "GOD";
  this.isGod = true;
}();

// NOTE: usually, constructor doesnt have a return statement. However, if there is one, the returned value depends on whether it is an object. if it is, that object will be returned; otherwise, the original `this` will be returned.

// add methods
function CompleteUser(name) {
  this.name = name;
  this.sayHi = function () {
    alert("My name is: " + this.name + "!");
  };
}

let john = new CompleteUser("John");
john.sayHi();
